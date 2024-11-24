/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto'],
      },
      colors: {
        dark: {
          50: '#f2f4f7',
          100: '#e5e9ef',
          200: '#c2cad6',
          300: '#9faabd',
          400: '#6b7a8c',
          500: '#1e2b3c',
          600: '#1b2735',
          700: '#151e29',
          800: '#101620',
          900: '#0b1018',
        },
        green: {
          50: '#f0fcf8',
          100: '#dff9f1',
          200: '#b6f0dc',
          300: '#8ce6c8',
          400: '#48d4a0',
          500: '#13C594',
          600: '#11b385',
          700: '#0e946f',
          800: '#0b7658',
          900: '#095f48',
        },
        red: {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffbdbd',
          300: '#ff9b9b',
          400: '#f86a6a',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#b9c0cd',
          600: '#9ca3af',
          700: '#6b7280',
          800: '#4b5563',
          900: '#374151',
        },
        grayBlue: {
          50: '#f9fafb',
          100: '#f4f6f9',
          200: '#eaeef7',
          300: '#d2d9ef',
          400: '#a5b4e1',
          500: '#7487c9',
          600: '#596dac',
          700: '#45568b',
          800: '#343f66',
          900: '#252c47',
        },
      },
    },
  },
  plugins: [],
}