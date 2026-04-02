from fastapi import APIRouter

router = APIRouter(prefix="/vendors")

VENDORS = [
    {
        "name": "Amelia's Cluck & Smash",
        "address": "309 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Burgers & Chicken",
        "rating": 4.8,
        "avg_price": 12.00,  # sandwiches $10-$12, burgers $9-$11
        "hours": {
            "Monday": "8:00 AM - 10:00 PM",
            "Tuesday": "8:00 AM - 10:00 PM",
            "Wednesday": "8:00 AM - 10:00 PM",
            "Thursday": "8:00 AM - 10:00 PM",
            "Friday": "8:00 AM - 10:00 PM",
            "Saturday": "8:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 8:00 PM"
        }
    },
    {
        "name": "Bangkok Pinto",
        "address": "1041 Tremont St",
        "type": "Restaurant",
        "cuisine": "Thai",
        "rating": 4.5,
        "avg_price": 13.00,  # noodle soups $12-$13, specials $13-$17
        "hours": {
            "Monday": "Closed",
            "Tuesday": "11:00 AM - 3:00 PM, 4:00 - 9:00 PM",
            "Wednesday": "11:00 AM - 3:00 PM, 4:00 - 9:00 PM",
            "Thursday": "11:00 AM - 3:00 PM, 4:00 - 9:00 PM",
            "Friday": "11:00 AM - 3:00 PM, 4:00 - 9:00 PM",
            "Saturday": "12:00 - 3:00 PM, 4:00 - 9:00 PM",
            "Sunday": "Closed"
        }
    },
    {
        "name": "Blaze Pizza",
        "address": "1282 Boylston St",
        "type": "Restaurant",
        "cuisine": "Pizza",
        "rating": 4.4,
        "avg_price": 11.00,  # build-your-own pizza ~$9-$13
        "hours": {
            "Monday": "10:30 AM - 11:00 PM",
            "Tuesday": "10:30 AM - 11:00 PM",
            "Wednesday": "10:30 AM - 11:00 PM",
            "Thursday": "10:30 AM - 11:00 PM",
            "Friday": "10:30 AM - 12:00 AM",
            "Saturday": "10:30 AM - 12:00 AM",
            "Sunday": "10:30 AM - 11:00 PM"
        }
    },
    {
        "name": "Boston Shawarma",
        "address": "315 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Middle Eastern / Halal",
        "rating": 4.6,
        "avg_price": 15.00,  # plates $15-$18, wraps ~$13-$16
        "hours": {
            "Monday": "10:00 AM - 11:00 PM",
            "Tuesday": "10:00 AM - 11:00 PM",
            "Wednesday": "10:00 AM - 11:00 PM",
            "Thursday": "10:00 AM - 11:00 PM",
            "Friday": "10:00 AM - 11:00 PM",
            "Saturday": "10:00 AM - 11:00 PM",
            "Sunday": "10:00 AM - 11:00 PM"
        }
    },
    {
        "name": "El Jefe's Taqueria",
        "address": "269 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Mexican",
        "rating": 4.5,
        "avg_price": 11.00,  # burritos/bowls ~$11
        "hours": {
            "Monday": "8:00 AM - 3:00 AM",
            "Tuesday": "8:00 AM - 3:00 AM",
            "Wednesday": "8:00 AM - 3:00 AM",
            "Thursday": "8:00 AM - 3:00 AM",
            "Friday": "8:00 AM - 3:00 AM",
            "Saturday": "8:00 AM - 3:00 AM",
            "Sunday": "8:00 AM - 3:00 AM"
        }
    },
    {
        "name": "Five Guys",
        "address": "263 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "American / Burgers",
        "rating": 4.3,
        "avg_price": 15.00,  # burger + fries ~$13-$17
        "hours": {
            "Monday": "7:00 AM - 10:00 PM",
            "Tuesday": "7:00 AM - 10:00 PM",
            "Wednesday": "7:00 AM - 10:00 PM",
            "Thursday": "7:00 AM - 11:30 PM",
            "Friday": "7:00 AM - 11:30 PM",
            "Saturday": "8:00 AM - 11:30 PM",
            "Sunday": "8:00 AM - 10:00 PM"
        }
    },
    {
        "name": "Mamacita Mexican Comida",
        "address": "329 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Mexican",
        "rating": 4.4,
        "avg_price": 13.00,  # bowls/burritos ~$12-$14
        "hours": {
            "Monday": "11:00 AM - 11:00 PM",
            "Tuesday": "11:00 AM - 11:00 PM",
            "Wednesday": "11:00 AM - 11:00 PM",
            "Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "11:00 AM - 11:00 PM",
            "Sunday": "11:00 AM - 11:00 PM"
        }
    },
    {
        "name": "Panera Bread",
        "address": "289 Huntington Ave",
        "type": "Restaurant / Cafe",
        "cuisine": "American / Sandwiches",
        "rating": 3.9,
        "avg_price": 13.00,  # sandwiches/soups ~$11-$15
        "hours": {
            "Monday": "6:00 AM - 11:00 PM",
            "Tuesday": "6:00 AM - 11:00 PM",
            "Wednesday": "6:00 AM - 11:00 PM",
            "Thursday": "6:00 AM - 11:00 PM",
            "Friday": "6:00 AM - 11:00 PM",
            "Saturday": "6:00 AM - 11:00 PM",
            "Sunday": "7:00 AM - 10:00 PM"
        }
    },
    {
        "name": "TeaDo",
        "address": "333 Huntington Ave",
        "type": "Cafe",
        "cuisine": "Boba Tea & Snacks",
        "rating": 4.6,
        "avg_price": 7.00,  # boba drinks ~$6-$8, snacks ~$4-$6
        "hours": {
            "Monday": "11:00 AM - 11:00 PM",
            "Tuesday": "11:00 AM - 11:00 PM",
            "Wednesday": "11:00 AM - 11:00 PM",
            "Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 11:00 PM",
            "Saturday": "12:00 PM - 11:00 PM",
            "Sunday": "12:00 PM - 11:00 PM"
        }
    },
    {
        "name": "Wings Over Boston",
        "address": "325 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Chicken Wings",
        "rating": 3.6,
        "avg_price": 18.00,  # 8-wing meal ~$16-$20, tenders ~$14-$18
        "hours": {
            "Monday": "11:00 AM - 12:00 AM",
            "Tuesday": "11:00 AM - 12:00 AM",
            "Wednesday": "11:00 AM - 12:00 AM",
            "Thursday": "11:00 AM - 2:00 AM",
            "Friday": "11:00 AM - 2:00 AM",
            "Saturday": "11:00 AM - 2:00 AM",
            "Sunday": "11:00 AM - 12:00 AM"
        }
    },
    {
        "name": "Gyroscope",
        "address": "305 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Greek / Mediterranean",
        "rating": 4.2,
        "avg_price": 12.00,  # gyros/wraps ~$10-$14
        "hours": {
            "Monday": "11:00 AM - 10:00 PM",
            "Tuesday": "11:00 AM - 10:00 PM",
            "Wednesday": "11:00 AM - 10:00 PM",
            "Thursday": "11:00 AM - 10:00 PM",
            "Friday": "11:00 AM - 10:00 PM",
            "Saturday": "11:00 AM - 10:00 PM",
            "Sunday": "11:00 AM - 10:00 PM"
        }
    },
    {
        "name": "Sprout",
        "address": "305 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Healthy / Salads",
        "rating": 4.3,
        "avg_price": 12.00,  # salads/bowls ~$10-$14
        "hours": {
            "Monday": "10:00 AM - 9:00 PM",
            "Tuesday": "10:00 AM - 9:00 PM",
            "Wednesday": "10:00 AM - 9:00 PM",
            "Thursday": "10:00 AM - 9:00 PM",
            "Friday": "10:00 AM - 9:00 PM",
            "Saturday": "10:00 AM - 9:00 PM",
            "Sunday": "10:00 AM - 9:00 PM"
        }
    },
    {
        "name": "University House of Pizza",
        "address": "452 Huntington Ave",
        "type": "Restaurant",
        "cuisine": "Pizza",
        "rating": 4.1,
        "avg_price": 10.00,  # slices ~$3-$5, calzones/subs ~$10-$14
        "hours": {
            "Monday": "11:00 AM - 11:00 PM",
            "Tuesday": "11:00 AM - 11:00 PM",
            "Wednesday": "11:00 AM - 11:00 PM",
            "Thursday": "11:00 AM - 11:00 PM",
            "Friday": "11:00 AM - 12:00 AM",
            "Saturday": "11:00 AM - 12:00 AM",
            "Sunday": "11:00 AM - 11:00 PM"
        }
    },
    {
        "name": "Star Market",
        "address": "53 Huntington Ave",
        "type": "Grocery Store",
        "cuisine": None,
        "rating": 4.1,
        "avg_price": None,
        "hours": {
            "Monday": "6:00 AM - 12:00 AM",
            "Tuesday": "6:00 AM - 12:00 AM",
            "Wednesday": "6:00 AM - 12:00 AM",
            "Thursday": "6:00 AM - 12:00 AM",
            "Friday": "6:00 AM - 12:00 AM",
            "Saturday": "6:00 AM - 12:00 AM",
            "Sunday": "6:00 AM - 12:00 AM"
        }
    },
    {
        "name": "H Mart",
        "address": "1028 Beacon St",
        "type": "Grocery Store",
        "cuisine": None,
        "rating": 4.4,
        "avg_price": None,
        "hours": {
            "Monday": "9:00 AM - 10:00 PM",
            "Tuesday": "9:00 AM - 10:00 PM",
            "Wednesday": "9:00 AM - 10:00 PM",
            "Thursday": "9:00 AM - 10:00 PM",
            "Friday": "9:00 AM - 10:00 PM",
            "Saturday": "9:00 AM - 10:00 PM",
            "Sunday": "9:00 AM - 10:00 PM"
        }
    },
    {
        "name": "CVS",
        "address": "231 Massachusetts Ave",
        "type": "Pharmacy / Convenience Store",
        "cuisine": None,
        "rating": 3.8,
        "avg_price": None,
        "hours": {
            "Monday": "7:00 AM - 10:00 PM",
            "Tuesday": "7:00 AM - 10:00 PM",
            "Wednesday": "7:00 AM - 10:00 PM",
            "Thursday": "7:00 AM - 10:00 PM",
            "Friday": "7:00 AM - 10:00 PM",
            "Saturday": "8:00 AM - 10:00 PM",
            "Sunday": "8:00 AM - 10:00 PM"
        }
    },
]


@router.get("/")
async def get_vendors():
    return VENDORS
"""Vendors Router for handling vendor-related API endpoints"""
from typing import Dict, List, Any, Optional
from fastapi import APIRouter
from app.services.vendor_service import get_vendors

router = APIRouter(prefix="/vendors", tags=["vendors"])

@router.get("/")
async def vendor(
    category: Optional[str] = None,
    location_type: Optional[str] = None
) -> List[Dict[str, Any]]:
    """Fetches the list of vendors using get_vendors service"""
    return get_vendors(category=category, location_type=location_type)
