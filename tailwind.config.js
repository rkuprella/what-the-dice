module.exports = {
  theme: {
    colors: {
      'shadow': 'var(--shadow)',
      'transparent': 'var(--transparent)',
      'success': 'var(--success)',
      'danger': 'var(--danger)',
      'info': 'var(--info)',
      'warning': 'var(--warning)',
      'primary-1': 'var(--primary-1)',
      'primary-2': 'var(--primary-2)',
      'primary-3': 'var(--primary-3)',
      'primary-4': 'var(--primary-4)',
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
      'sm': '426px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      boxShadow: {
        outline: '0 0 0 3px rgba(116, 62, 233, 0.5)'
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '92': '24rem'
      },
      translate: {
        '2px': '2px'
      },
      borderRadius: {
        'xl': '2rem'
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 1.650, 0.545, 1.190)'
      },
      transitionDuration: {
        '0': '0ms'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.html',
      './src/**/*.vue',
    ],
    options: {
      whitelist: [
        'text-red', 'text-blue', 'text-yellow', 'text-green', 'text-basic', 'bg-red', 'bg-blue', 'bg-yellow', 'bg-green', 'bg-basic', 'text-primary-1', 'text-primary-2', 'text-primary-3', 'text-primary-4', 'text-accent-1', 'text-accent-2', 'text-accent-3', 'text-highlight', 'text-label', 'text-shadow', 'text-transparent', 'text-success', 'text-danger', 'text-warning', 'text-info', 'bg-primary-1', 'bg-primary-2', 'bg-primary-3', 'bg-primary-4', 'bg-accent-1', 'bg-accent-2', 'bg-accent-3', 'bg-highlight', 'bg-label', 'bg-shadow', 'bg-transparent', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'border-primary-1', 'border-primary-2', 'border-primary-3', 'border-primary-4', 'border-accent-1', 'border-accent-2', 'border-accent-3', 'border-highlight', 'border-label', 'border-shadow', 'border-transparent', 'border-success', 'border-danger', 'border-warning', 'border-info', 'border-red', 'border-blue', 'border-yellow', 'border-green', 'border-basic',
      ]
    }
  },
  
}
