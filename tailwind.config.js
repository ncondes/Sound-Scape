/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            lime: '#77db89'
         }
      }
   },
   plugins: [require('@tailwindcss/forms')]
}
