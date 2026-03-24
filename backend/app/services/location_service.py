"""Periodically refreshes and caches DineOnCampus location and period IDs"""
from datetime import date
from typing import Dict, List, Any, Optional
from cachetools import TTLCache
import httpx

from app.services.dineoncampus_service import HEADERS

location_cache: TTLCache = TTLCache(maxsize=10, ttl=86400)

KNOWN_LOCATIONS: Dict[str, str] = { # location ids
    "stetson east": "586d05e4ee596f6e6c04b527",
    "international village": "5f4f8a425e42ad17329be131"
}

def get_location_id(location_name: str) -> Optional[str]:
    """
    Returns the location ID for a given location name, or None if not recognized.
    Case insensitive.
    """
    return KNOWN_LOCATIONS.get(location_name.lower().strip())

async def get_periods(location_id: str) -> List[Dict[str, str]]:
    """
    Fetches the valid period IDs for a given location for that day.
    Caches the result for 24 hours
    Args:
        location_id(str): the ID of the location to get the periods for
    Returns:
        A list of dicts with keys "id", "name", and "slug" for each period (e.g., Breakfast, Lunch, Dinner)
    """
    # https://apiv4.dineoncampus.com/locations/586d05e4ee596f6e6c04b527/periods/?date=2026-03-22
    cache_key = f"periods-{location_id}-{date.today().isoformat()}"
    if cache_key in location_cache:
        return location_cache[cache_key]
    url = (
        f"https://apiv4.dineoncampus.com/locations/{location_id}/periods/"
        f"?date={date.today().isoformat()}"
    )

    async with httpx.AsyncClient(headers=HEADERS) as client:
        try:
            res = await client.get(url, timeout=10.0)
            res.raise_for_status()
        except httpx.HTTPStatusError as e:
            # To detect a non-200 status code (4xx or 5xx error)
            return {
                "error": "DineOnCampus API failed",
                "status": e.response.status_code,
                "detail": str(e)
            }
        except httpx.RequestError as e:
            # To detect a network error or timeout
            return {
                "error" : "DineOnCampus API request failed",
                "detail" : str(e)
            }
    data = res.json()
    periods: List[Dict[str, str]] = [
        {
            "id": period.get("id"),
            "name": period.get("name"),
            "slug": period.get("slug")
        }
        for period in data.get("periods", [])
    ]
    location_cache[cache_key] = periods
    return periods

async def get_period_id_by_name(location_id: str, period_name: str) -> Optional[str]:
    """
    Finds the period ID for a given location id and period name.
    Returns None if not found.
    """
    periods = await get_periods(location_id)
    # If get_periods returned an error dict instead of a list, bubble it up
    if isinstance(periods, dict) and "error" in periods:
        return None

    for period in periods:
        if period.get("name", "").lower() == period_name.lower().strip():
            return period["id"]

    return None
