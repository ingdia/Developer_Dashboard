# Developer Dashboard(Diane's Dashboard)

A modern, responsive React dashboard that displays real-time GitHub profile statistics and current weather information. This project demonstrates API integration, state management, and theme switching capabilities.

##  Description

The Developer Dashboard is a web application built with React that fetches and displays data from external APIs. It features two interactive cards:
- **GitHub Profile Card**: Shows user profile information, repository count, followers, and following stats
- **Weather Card**: Displays current weather conditions including temperature, weather condition, wind speed, and a live-updating clock

The dashboard includes a fully functional Light/Dark mode theme switcher with persistent theme storage using localStorage, ensuring a seamless user experience.

##  Features

-  **GitHub Profile Integration**: Fetches real-time data from GitHub API
-  **Weather Information**: Displays current weather from Open-Meteo API
-  **Live Clock**: Real-time updating local time display
-  **Theme Switching**: Toggle between Light and Dark modes
-  **Persistent Theme**: Theme preference saved in localStorage
-  **Responsive Design**: Mobile, tablet, and desktop compatible
-  **Loading States**: Elegant loading indicators during API calls
-  **Error Handling**: Graceful error messages for API failures
-  **Modern UI**: Beautiful card-based layout with Tailwind CSS

##  Technologies Used

- **React** (v19.1.1) - UI library
- **React Router DOM** (v7.4) - Routing
- **Tailwind CSS** (v4.1.16) - Styling framework
- **Vite** (v7.7) - Build tool and development server
- **Lucide React** (v0.548.0) - Icon library
- **Fetch API** - Data fetching (native browser API)

##  APIs Used

### 1. GitHub API
- **Endpoint**: `https://api.github.com/users/[username]`
- **Documentation**: [GitHub REST API](https://docs.github.com/en/rest)
- **Data Retrieved**:
  - Profile avatar
  - Number of public repositories
  - Followers count
  - Following count
  - User profile information

### 2. Open-Meteo Weather API
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Documentation**: [Open-Meteo API](https://open-meteo.com/en/docs)
- **Data Retrieved**:
  - Current temperature (°C)
  - Weather condition (weather code)
  - Wind speed (km/h)
  - Real-time weather updates

##  Screenshots

> **Note**: screenshots of my dashboard (coming soon)
> 
> - Light mode screenshot
> - Dark mode screenshot
> - Mobile view screenshot

##  Deployment

**Live Demo**: [[ deployment link ](https://developer-dashboard-wheat.vercel.app/)]
- Deployed on: Vercel

## Project Structure

```
Developer_Dashboard/
│
├── dev-dashboard/                 # Main project directory
│   ├── public/                    # Static assets
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/                # Images and static files
│   │   │   ├── image.png
│   │   │   └── react.svg
│   │   │
│   │   ├── components/            # Reusable React components
│   │   │   ├── GitHubCard.jsx     # GitHub profile card component
│   │   │   ├── Navbar.jsx         # Navigation bar with theme toggle
│   │   │   ├── ThemeSwitcher.jsx  # Theme switching component
│   │   │   └── WeatherCard.jsx    # Weather information card
│   │   │
│   │   ├── context/              # React Context for state management
│   │   │   └── ThemeContext.jsx  # Theme context provider
│   │   │
│   │   ├── dashboard/            # Dashboard pages
│   │   │   └── Home.jsx          # Main dashboard page
│   │   │
│   │   ├── hooks/                # Custom React hooks
│   │   │   └── useFetch.js       # Custom hook for API fetching
│   │   │
│   │   ├── App.jsx               # Main App component
│   │   ├── App.css               # App-specific styles
│   │   ├── index.css             # Global styles and Tailwind imports
│   │   └── main.jsx              # Application entry point
│   │
│   ├── .gitignore                # Git ignore rules
│   ├── eslint.config.js          # ESLint configuration
│   ├── index.html                # HTML entry point
│   ├── package.json              # Project dependencies
│   ├── package-lock.json         # Dependency lock file
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── vite.config.js            # Vite configuration
│   └── README.md                 # Project documentation
│
└── README.md                     # Main project README (this file)
```

##  Component Architecture

### Main Components

1. **App.jsx**
   - Root component
   - Manages theme state and context
   - Handles theme persistence with localStorage
   - Provides theme context to child components

2. **Home.jsx**
   - Main dashboard page
   - Layout container for all cards
   - Responsive flexbox layout

3. **GitHubCard.jsx**
   - Fetches and displays GitHub user data
   - Shows avatar, repositories, followers, following
   - Includes loading and error states
   - Links to GitHub profile

4. **WeatherCard.jsx**
   - Fetches weather data from Open-Meteo API
   - Displays temperature, weather condition, wind speed
   - Real-time clock that updates every second
   - Dynamic weather icons based on weather code

5. **Navbar.jsx**
   - Navigation bar component
   - Contains theme toggle button
   - Dashboard title/logo

6. **ThemeSwitcher.jsx**
   - Theme toggle button component
   - Switches between light and dark modes

### Custom Hooks

- **useFetch.js**
  - Custom hook for fetching API data
  - Manages loading, error, and data states
  - Reusable across all components

### Context

- **ThemeContext.jsx**
  - Provides theme state to all components
  - Manages theme toggle functionality

##  Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Developer_Dashboard.git
   cd Developer_Dashboard/dev-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoints** (if needed)
   - Open `src/components/GitHubCard.jsx`
   - Update the GitHub username in the API endpoint:
     ```javascript
     useFetch("https://api.github.com/users/your-username")
     ```
   - For weather, update coordinates in `src/components/WeatherCard.jsx`:
     ```javascript
     useFetch(`https://api.open-meteo.com/v1/forecast?latitude=X&longitude=Y&current_weather=true`)
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

##  Customization

### Changing Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      }
    }
  }
}
```

### Updating GitHub Username

Edit `src/components/GitHubCard.jsx`:
```javascript
const { mydata, err, isloading } = useFetch("https://api.github.com/users/YOUR_USERNAME");
```

### Changing Weather Location

Edit `src/components/WeatherCard.jsx` and update the latitude/longitude:
```javascript
useFetch(`https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LONG&current_weather=true`)
```

##  Key Features Explained

### State Management
- Uses React's `useState` and `useEffect` hooks
- Theme state managed globally via Context API
- Theme preference persisted in localStorage

### API Integration
- Custom `useFetch` hook for reusable data fetching
- Proper error handling for network failures
- Loading states for better UX

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Flexbox and Grid layouts
- Breakpoints for different screen sizes

### Theme Switching
- Toggles between light and dark modes
- Applies theme to entire application
- Persists user preference across sessions

## 🐛 Troubleshooting

### API Errors
- **GitHub API**: Ensure the username exists and is public
- **Weather API**: Check if coordinates are valid
- **Network Issues**: Verify internet connection

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Theme Not Persisting
- Check browser localStorage permissions
- Clear browser cache and try again


**Note**: This project was created as part of React Assignment focusing on API integration, state management, and theme switching.

