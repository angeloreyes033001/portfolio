/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        "main-color": "#0f172a",
        "color-blue": "#34b0e7",
        "font-color-blue-dead": "#094777",
        "font-color-black": "#111827"
      }
  	}
  },
  plugins: [],
}

