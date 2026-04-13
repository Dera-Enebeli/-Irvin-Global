import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B121E',
        charcoal: '#1A222F',
        electric: '#00AEEF',
        ice: '#FFFFFF',
        deepNavy: '#1E293B',
      },
    },
  },
  plugins: [],
}
export default config