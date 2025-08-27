import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2ce2113670544fbeb62de98dd6e3259e',
  appName: 'vibrant-web-project',
  webDir: 'dist',
  server: {
    url: 'https://2ce21136-7054-4fbe-b62d-e98dd6e3259e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f0f23',
      showSpinner: true,
      spinnerColor: '#00ffff'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0f0f23'
    }
  }
};

export default config;