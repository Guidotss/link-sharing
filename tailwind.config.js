/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'stackoverflow':'#EC7100',
        'freecodecamp': '#302267',
        'light_purple': '#EFEBFF',
        'soft_purple':  '#BEADFF',
        'light_grey':   '#FAFAFA',
        'dark_grey':    '#333333',
        'linkedin':     '#2D68FF',
        'facebook':     '#2442AC',
        'codewars':     '#8A1A50',
        'hashnode':     '#0330D1',
        'twitter':      '#43B7E9',
        'borders':      '#D9D9D9',
        'purple':       '#633CFF',
        'twitch':       '#EE3FC8',
        'gitlab':       '#EB4925',
        'white':        '#FFFFFF',
        'grey':         '#737373',
        'red' :         '#FF3939',
      }
    },
  },
  plugins: [],
}
