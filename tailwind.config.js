/* @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{js,ts,jsx,tsx}', // For React or other JS frameworks
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5f6fff"
      }, 
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  
  },
  plugins:[ 
    flowbitePlugin
  ],
}
