🏡 Real Estate Projects Scraper with Interactive Map
This Next.js 14+ project scrapes real estate listings from MagicBricks and displays them on an interactive Leaflet map with project details, geocoding support, and global state management using React Context.

📦 Features
🔍 Scrape property projects by city from MagicBricks

📍 Geocode project locations using Google Maps API

🗺️ Show markers on an interactive Leaflet map via react-leaflet

📸 Display project name, builder, price, image, and coordinates

⚙️ Built-in API rate limiting and error handling

♻️ Global state with React Context API

🚀 App Router with dynamic routes (/city/[city])

🧱 Tech Stack
Next.js 14 (App Router)

TypeScript

React Context API

Leaflet / React-Leaflet

Cheerio & Axios (for web scraping)

Google Maps Geocoding API

Tailwind CSS (optional styling)

🛠️ Setup Instructions
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/RealEstate.git
cd real-estate
2. Install dependencies
bash
Copy
Edit
npm install
3. Add environment variables
Create a .env.local file:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
POSITIONSTACK_API_KEY=your_position_stack_api_key
4. Run the development server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000/project/Hyderabad

📁 Key Files
Path	Description
app/api/scrape/route.ts	Scrapes projects from MagicBricks by city
app/api/geocode/route.ts	Calls Google Maps API to get coordinates
components/MapContainer.tsx	Interactive map with markers and popups
context/ProjectContext.tsx	Global state for scraped projects
app/project/[city]/page.tsx	Renders city-specific project data on map

📌 Sample Usage
tsx
Copy
Edit
const { projects } = useProjectContext();
ts
Copy
Edit
GET /api/scrape?city=Mumbai
GET /api/geocode?location=Bandra%20East
🧠 Notes
Be mindful of API rate limits.

Caching geocode results is recommended (currently cached in-memory).

Ensure all client-only components (e.g., Leaflet map) use 'use client'.

📜 License
MIT © 2025 Your Name

