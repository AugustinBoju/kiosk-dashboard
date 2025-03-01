import type { Config } from 'tailwindcss';

const sizesList = {
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  7.5: '1.875rem',
  8: '2rem',
  8.5: '2.125rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  13: '3.125rem',
  14: '3.25rem',
  14.5: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  25: '6.25rem',
  26: '6.5rem',
  27: '6.75rem',
  28: '7rem',
  29: '7.25rem',
  30: '7.5rem',
  31: '7.75rem',
  32: '8rem',
  33: '8.25rem',
  34: '8.5rem',
  36: '9rem',
  37: '9.25rem',
  38: '9.5rem',
  38.5: '9.625rem',
  39: '9.75rem',
  40: '10rem',
  42: '10.5rem',
  44: '11rem',
  46: '11.5rem',
  50: '12.5rem',
  52: '13rem',
  54: '13.5rem',
  56: '14rem',
  58: '14.5rem',
  60: '15rem',
  62: '15.5rem',
  64: '16rem',
  65: '16.25rem',
  66: '16.5rem',
  70: '17.5rem',
  72: '18rem',
  74: '18.5rem',
  82: '20.5rem',
  80: '20rem',
  84: '21rem',
  86: '21.5rem',
  89: '22.25rem',
  90: '22.5rem',
  94: '23.5rem',
  96: '24rem',
  98: '24.5rem',
  100: '25rem',
  101: '25.25rem',
  102: '25.5rem',
  103: '25.75rem',
  104: '26rem',
  105: '26.25rem',
  106: '26.5rem',
  108: '27rem',
  110: '28rem',
  112: '28rem',
  114: '28.5rem',
  115: '28.75rem',
  116: '29rem',
  118: '29.5rem',
  120: '30rem',
  125: '31.25rem',
  128: '32rem',
  130: '32.5rem',
  132: '33rem',
  134: '33.5rem',
  136: '34rem',
  138: '34.5rem',
  140: '35rem',
  142: '35.5rem',
  144: '36rem',
  150: '37.5rem',
  152: '38rem',
  154: '38.5rem',
  156: '39rem',
  158: '39.5rem',
  160: '40rem',
  170: '42.5rem',
  176: '44rem',
  180: '45rem',
  192: '48rem',
  194: '48.5rem',
  196: '49rem',
  198: '49.5rem',
  200: '50rem',
  204: '51rem',
  216: '54rem',
  220: '55rem',
  236: '59rem',
  239: '59.75rem',
  240: '60rem',
  256: '64rem',
  260: '65rem',
  272: '68rem',
  280: '70rem',
  300: '75rem',
  320: '80rem',
  340: '85rem',
  360: '90rem',
  364: '91rem',
  380: '95rem',
  384: '96rem',
  400: '100rem',
  '10%': '10%',
  '20%': '20%',
  '30%': '30%',
  '40%': '40%',
  '50%': '50%',
  '60%': '60%',
  '70%': '70%',
  '80%': '80%',
  '90%': '90%',
};

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        charcoal: '#343534',
        yellow: {
          DEFAULT: '#FBBA00',
          '01': '#DB9600',
          '02': '#FFDE80',
          '03': '#FFF4D3',
          '04': '#FEFBF1',
        },
        violet: {
          '01': '#904FF9',
          '02': '#BA91FD',
          '03': '#E1DCFF',
        },
        orange: {
          '01': '#FB8A22',
          '02': '#E8B687',
          '03': '#FCF1E6',
        },
        green: {
          '01': '#239A3C',
          '02': '#97D59B',
          '03': '#D6F2D8',
        },
        grey: {
          bg: '#F9F9FB',
          contour: '#E7E7E7',
          blueWash: '#D2D9DB',
          '10': '#FBFBFB',
          '20': '#F3F3F3',
          '30': '#EAEAEA',
          '35': '#BEC8CB',
          '40': '#A5A5A5',
          '50': '#757575',
        },
        primary: {
          DEFAULT: '#fbba00',
          50: '#fffeea',
          100: '#fffbc5',
          200: '#fff785',
          300: '#ffec46',
          400: '#ffdd1b',
          500: '#fbba00',
          600: '#e29100',
          700: '#bb6702',
          800: '#984f08',
          900: '#7c410b',
          950: '#482100',
        },
        secondary: {
          50: '#FAF2DA',
          100: '#F0D79E',
          200: '#ECCA85',
          300: '#E4AB55',
          400: '#DE9232',
          500: '#DE9232',
          600: '#AB6122',
          700: '#894D23',
          800: '#6F411F',
          900: '#3B1F0F',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F7',
          200: '#EBECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475468',
          700: '#354055',
          800: '#1E2939',
          900: '#0F1828',
        },
        error: {
          DEFAULT: '#D82027',
          light: '#FFE6E6',
          50: '#FEF3F3',
          100: '#FEE4E2',
          200: '#FDCDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04339',
          600: '#D92C20',
          700: '#B42318',
          800: '#912019',
          900: '#7A271A',
        },
        warning: {
          50: '#FFD8C7',
          100: '#FFC0A4',
          200: '#FFAD89',
          300: '#FF9566',
          400: '#FF8048',
          500: '#FF6C2B',
          600: '#FF5A00',
          700: '#B84100',
          800: '#943400',
          900: '#7A2B00',
        },
        success: {
          50: '#EBFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6DE9A7',
          400: '#31D584',
          500: '#0EB869',
          600: '#009856',
          700: '#047A48',
          800: '#056039',
          900: '#054F31',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['PlusJakartaSans', 'Poppins', 'sans-serif'],
      },
      minWidth: { ...sizesList },
      minHeight: { ...sizesList },
      maxHeight: { ...sizesList },
      maxWidth: { ...sizesList },
      spacing: { ...sizesList },
      transitionDuration: {
        '2000': '2000ms',
      },
      screens: {
        sm: `${768 + 1}px`,
        md: `${1024 + 1}px`,
        lg: `${1280 + 1}px`,
        xl: `${1280 + 1}px`,
        '2xl': '1536px',
        '3xl': '1536px',
      },
      fontSize: {
        '2xs': [
          '0.625rem',
          {
            lineHeight: '1rem',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        base: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        lg: [
          '1.875rem',
          {
            lineHeight: '2.5rem',
          },
        ],
        xl: [
          '2.5rem',
          {
            lineHeight: '3.125rem',
          },
        ],
        '2xl': [
          '3.125rem',
          {
            lineHeight: '3.75rem',
          },
        ],
      },
    },
  },
  corePlugins: {
    // * Disable the aspectRatio core plugin to avoid conflicts with the native aspect-ratio utilities included in Tailwind CSS v3.0
    aspectRatio: false,
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('autoprefixer'),
    require('rippleui'),
  ],
};
export default config;
