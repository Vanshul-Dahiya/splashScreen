import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'splash-screen',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
