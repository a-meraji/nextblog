module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        accent: 'var(--color-accent)',
        accentHover: 'var(--color-accent-hover)',
        transAccent: 'var(--color-trans-accent)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
        onAccent: 'var(--color-text-on-accent)',
        onAccentTr: 'var(--color-text-on-accent-trans)',
        txtAccent:'var(--color-text-accent)',
      },
      borderColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
        onAccent: 'var(--color-text-on-accent)',
        onAccentTr: 'var(--color-text-on-accent-trans)',
      },
      stroke:{
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
      },
      fill:{
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
      }
    },
  },
  plugins: [],
}
