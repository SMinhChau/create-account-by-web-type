/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue_border: '#273231',
      blue_border_dark: '#134e4a',
      title: '#406561',
      title_hover: '#6bb0a8',
      primary_color: '#a5f3fc ',
      bg_card: '#111827',
      bg_card_hover: '#4b5563',
      border_card: '#27272a',
      bg_main: '#0a0909',
      text_main: '#4b5563',
      border_input: '#0f766e',
      bg_normal: '#222937',
      success_color: '#1d2c23',
      error_color: '#683535',
      warning_color: '#6f7034',
      color_white: '#ffffff',
      color_black: '#000000',
      // input
      border_gray: '#d4d4d4',
      border_gray_focus: '#737373',
      // title
      title_color: '#042f2e',
      mobile_border_gray: '#52525b',
      mobile_bg_gray: '#94a3b8',
      bg_content_mobile: '#f1f5f9',
      bg_content_mobile_dark: '#111827',
    },
    keyframes: {
      'slide-in': {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      'slide-down': {
        '0%': { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
        '100%': { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      },
    },
    animation: {
      'slide-in': 'slide-in 0.3s ease-out',
      'slide-down': 'slide-down 0.3s ease-out',
    },
  },

  plugins: [],
  darkMode: 'class',
};
