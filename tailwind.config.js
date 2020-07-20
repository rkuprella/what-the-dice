module.exports = {
  theme: {
    colors: {
      'shadow': 'var(--shadow)',
      'transparent': 'var(--transparent)',
      'success': 'var(--success)',
      'danger': 'var(--danger)',
      'info': 'var(--info)',
      'primary-1': 'var(--primary-1)',
      'primary-2': 'var(--primary-2)',
      'primary-3': 'var(--primary-3)',
      'accent-1': 'var(--accent-1)',
      'accent-2': 'var(--accent-2)',
      'accent-3': 'var(--accent-3)',
      'highlight': 'var(--highlight)',
      'label': 'var(--label)',
      'basic': 'var(--basic)',
      'red': 'var(--red)',
      'green': 'var(--green)',
      'blue': 'var(--blue)',
      'yellow': 'var(--yellow)',
    },
    screens: {
      'sm': '420px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '96': '24rem'
      },
      translate: {
        '2px': '2px'
      },
      borderRadius: {
        'xl': '2rem'
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 1.650, 0.545, 1.190)'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-focus'],
  },
  plugins: [],
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
  ]
}
