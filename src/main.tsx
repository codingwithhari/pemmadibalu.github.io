import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Capacitor initialization for mobile devices
import { Capacitor } from '@capacitor/core'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'

// Initialize Capacitor plugins when running on mobile
if (Capacitor.isNativePlatform()) {
  // Hide splash screen after app loads
  SplashScreen.hide()
  
  // Configure status bar for dark theme
  StatusBar.setBackgroundColor({ color: '#0f0f23' })
  StatusBar.setStyle({ style: Style.Dark })
}

createRoot(document.getElementById("root")!).render(<App />);
