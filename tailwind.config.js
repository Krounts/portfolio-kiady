const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at top, rgba(99,102,241,0.35), transparent 35%), linear-gradient(135deg, rgba(59,130,246,0.18), rgba(168,85,247,0.18))',
      },
      boxShadow: {
        glass: '0 20px 80px rgba(15,23,42,0.22)',
      },
    },
  },
  plugins: [],
};
