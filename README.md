# StravaWars 🏃‍♂️🗺️

Conquer the map. Upgrade your territory. Outrun your rivals.

StravaWars is a gamified web app built with **Next.js** that connects to your **Strava** account. Every time you run, you claim hexagons on the map. The more you run, the more you expand and defend your turf — like a real-world Clash of Clans on running routes.

## 🚀 Features

- 🔗 Strava OAuth login and activity syncing  
- 🗺️ Hex-based map claiming  
- 🛡️ Territory upgrade mechanics  
- ⚔️ Competitive map control between users  

## 🧱 Tech Stack

- Framework: Next.js  
- API: Strava API  
- Map: Leaflet or Mapbox (optional)  
- Styling: Tailwind CSS  
- Database: TBD (PostgreSQL/Supabase/etc.)  

## 🔧 Setup Instructions

1. Clone the repo

        git clone https://github.com/yourusername/stravawars.git
        cd stravawars

2. Install dependencies

        npm install

3. Create a `.env.local` file in the project root with the following content:

        STRAVA_CLIENT_ID=your_client_id
        STRAVA_CLIENT_SECRET=your_client_secret
        NEXT_PUBLIC_BASE_URL=http://localhost:3000

4. Run the development server

        npm run dev

5. Open your browser and visit: http://localhost:3000

## 🔐 OAuth Flow (Strava)

1. User clicks **Connect with Strava**  
2. Redirects to Strava for OAuth authentication  
3. App receives access token  
4. Activities are fetched and parsed into hex tiles  
