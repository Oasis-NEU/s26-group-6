# SwipeWise

**A web app for Northeastern University students to track dining swipes, manage Dining Dollars, and browse real-time dining hall menus.**

---

## Overview

Northeastern's meal plan system can be opaque. Students rarely know how many swipes they have left in the week, whether they're on pace with their Dining Dollars, or what's actually being served at a given dining hall right now. SwipeWise addresses all three problems in one place.

The app pulls live menu data from DineOnCampus, lets students log their swipe and Dining Dollar usage, and provides a pace analysis so they can see at a glance whether they're on track, under budget, or burning through their plan too fast. A searchable vendor database covers every on-campus and off-campus location that accepts Dining Dollars, with category and location-type filtering.

SwipeWise is built for Northeastern students, by Northeastern students, as part of the **Oasis** development club.

---

## Features

- **Real-time dining hall menus** — fetched from DineOnCampus for Stetson East and International Village, with full nutrition info (calories, protein, carbs, fat, sodium), dietary tags (Vegetarian, Vegan, Gluten Free, Halal, etc.), and allergen warnings
- **Personalized menu highlighting** — items are flagged green for dishes matching your dietary preferences and red for dishes containing your allergens
- **Meal plan onboarding** — enter your plan type, starting swipe/Dining Dollar balances, semester dates, and weekly allowances
- **Swipe tracker** — log swipes per venue by date; supports all swipe-eligible dining halls and flex-capped locations (Outtakes, Market @ 60)
- **Dining Dollar tracker** — log spending across on-campus restaurants, cafes, and grocery vendors with category filtering
- **Pace analysis dashboard** — see whether you're on track, under budget, or overspending relative to your remaining active days (break days excluded)
- **Vendor database** — searchable and filterable list of all locations that accept Dining Dollars, sourced from Supabase
- **Interactive campus map** — on-campus dining locations displayed on a Leaflet map with geolocation support
- **User authentication** — email/password sign-up and login via Supabase Auth, with password reset flow

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework and build tool |
| React Router v7 | Client-side routing |
| react-leaflet | Interactive campus map |
| @supabase/supabase-js | Auth and client-side Supabase queries |

### Backend
| Technology | Purpose |
|---|---|
| Python + FastAPI | REST API framework |
| Uvicorn | ASGI server |
| httpx / curl_cffi | HTTP client (curl_cffi used for Chrome impersonation to fetch menus) |
| slowapi | Rate limiting |
| cachetools (TTLCache) | Two-layer caching for menu and period data |
| psycopg2-binary | PostgreSQL driver |

### Infrastructure
| Service | Role |
|---|---|
| Supabase (PostgreSQL) | Database and authentication |
| Vercel | Frontend hosting |
| Render (free tier) | Backend hosting — chosen because slowapi requires a persistent server process, not serverless |

---

## Project Structure

```
s26-group-6/
├── src/                        # React frontend (Vite entry point at root)
│   ├── App.jsx                 # Route definitions
│   ├── main.jsx                # React entry point
│   ├── assets/
│   │   ├── Pages/              # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Onboarding.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Swipes.jsx
│   │   │   ├── DiningDollars.jsx
│   │   │   ├── FoodGood.jsx    # Menu browsing page
│   │   │   └── ResetPassword.jsx
│   │   └── Components/
│   │       ├── APICalls.jsx    # API client helper functions
│   │       ├── Nav.jsx
│   │       ├── Footer.jsx
│   │       └── UI.jsx
├── public/                     # Static assets
├── backend/
│   └── app/
│       ├── main.py             # FastAPI app, CORS config, router registration
│       ├── routers/
│       │   ├── auth.py         # Authentication endpoints
│       │   ├── menu.py         # Dining hall menu endpoints
│       │   ├── vendors.py      # Vendor database endpoints
│       │   ├── user.py         # User data and meal plan management
│       │   └── analysis.py     # Meal plan pace analysis
│       ├── services/
│       │   ├── dineoncampus_service.py  # Menu fetching, parsing, and caching
│       │   ├── location_service.py      # Location ID mapping and period fetching
│       │   └── vendor_service.py        # Vendor queries against Supabase
│       ├── db/
│       │   └── supabase_client.py       # Supabase client initialization
│       └── utils/
│           └── config.py               # Environment variable loading
├── oasis_vite.config.js
├── vercel.json                 # SPA rewrite rules for Vercel
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Python >= 3.9
- A [Supabase](https://supabase.com) project with `users`, `meal_plans`, and `vendors` tables
- Git

---

### Frontend Setup

```bash
# 1. Clone the repository
git clone https://github.com/Oasis-NEU/s26-group-6.git
cd s26-group-6

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local
# Fill in VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, and VITE_API_URL

# 4. Start the dev server
npm run dev
```

The frontend runs on `http://localhost:5173` by default.

---

### Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Create and activate a virtual environment
python -m venv .venv
source venv/bin/activate       # macOS/Linux
venv\Scripts\activate          # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the API server
uvicorn app.main:app --reload
```

The API runs on `http://localhost:8000` by default. Set `VITE_API_URL=http://localhost:8000` in your `.env.local` to point at it until you have deploy on Render.

---

## Environment Variables

### Frontend and Backend (`.env.local`)

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

VITE_API_URL=https://<your_service_name>.onrender.com
```

---

## API Documentation

Base URL (production): `https://<your_service_name>.onrender.com`

### Health Check

```
GET /
```
```json
{ "message": "Oasis API running" }
```

---

### Menu

#### Get menu for a dining hall
```
GET /menu/?location={location}&period_name={period}
```

| Parameter | Example values |
|---|---|
| `location` | `stetson east`, `international village` |
| `period_name` | `Breakfast`, `Lunch`, `Dinner` |

**Example response:**
```json
{
  "stations": [
    {
      "name": "Grill",
      "items": [
        {
          "name": "Grilled Chicken Breast",
          "calories": 180,
          "nutrients": {
            "Protein": "34g",
            "Total Carbohydrate": "0g",
            "Total Fat": "4g",
            "Sodium": "390mg"
          },
          "tags": ["Gluten Free", "Halal"],
          "allergens": [],
          "ingredients": "Chicken breast, olive oil, salt, pepper"
        }
      ]
    }
  ]
}
```

#### List supported dining halls
```
GET /menu/locations
```
```json
{ "known_locations": ["stetson east", "international village"] }
```

#### Get available meal periods for a location
```
GET /menu/periods?location=stetson+east
```
```json
[
  { "id": "abc123", "name": "Breakfast", "slug": "breakfast" },
  { "id": "def456", "name": "Lunch", "slug": "lunch" },
  { "id": "ghi789", "name": "Dinner", "slug": "dinner" }
]
```

---

### Vendors

#### Get vendor list (with optional filters)
```
GET /vendors/?category={category}&location_type={location_type}
```

| Parameter | Example values |
|---|---|
| `category` | `Restaurants`, `Cafes & Coffee`, `Grocery` |
| `location_type` | `on-campus`, `off-campus` |

Both parameters are optional; omitting them returns all vendors.

---

### Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/register` | Create a new account |
| `POST` | `/auth/login` | Sign in, returns bearer token |
| `POST` | `/auth/logout` | Sign out |
| `GET` | `/auth/me` | Get current user (requires `Authorization: Bearer <token>`) |
| `POST` | `/auth/forgot_password` | Send password reset email |
| `POST` | `/auth/reset_password` | Reset password with token |

---

### User & Meal Plan

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/user/update_meal_plan` | Save or update meal plan settings |
| `GET` | `/user/get/` | Get full user profile and meal plan |
| `PUT` | `/user/update_user_info` | Update username or email |
| `DELETE` | `/user/delete` | Delete account |

---

### Analysis

```
POST /analysis/meal_plan
```
Returns pace metrics for both swipes and Dining Dollars:

```json
{
  "dd_overspending": false,
  "dd_spent_per_day": 12.40,
  "dd_end_expected": "2026-04-15",
  "sw_overspending": true,
  "sw_spent_per_day": 2.1,
  "sw_end_expected": "2026-03-28"
}
```

---

## Architecture Notes

- **Menu caching** — DineOnCampus menu responses are cached for 1 hour; meal period lookups are cached for 24 hours. This reduces load on the external API.
- **Chrome impersonation** — `curl_cffi` is used to impersonate a Chrome browser when fetching menus, bypassing the bot detection on DineOnCampus.
- **Persistent backend** — The backend is deployed on Render's free tier (not serverless) because `slowapi` rate limiting requires in-memory state that lives across requests.
- **Single vendors table** — Vendor data is stored in a single Supabase table. Since the data is read-only and already geocoded, no relational split was needed.
- **Leaflet over Google Maps** — `react-leaflet` (OpenStreetMap) was chosen to avoid Google Maps billing exposure.

---

## Team

SwipeWise was built by students from [Oasis](https://oasisneu.com), Northeastern University's student-led software development club.

**Frontend**
- Naman Patel
- Aarav Gandbhir

**Backend**
- Emanuel Galindo
- Callum Johnson
- Tan Matalon

---

## Acknowledgments

- [Oasis @ Northeastern](https://oasisneu.com) — for organizing and supporting student-built projects
- [DineOnCampus](https://www.dineoncampus.com) — source of real-time dining hall menu data
- [Supabase](https://supabase.com) — database and authentication infrastructure
- [Leaflet / OpenStreetMap](https://leafletjs.com) — open-source mapping

---
