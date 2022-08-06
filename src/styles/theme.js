import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bgGradient: 'linear(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        color: 'gray.800',
      },
    }),
  },
  shadows: {
    'dark-blue':
      '6px 6px 1px 2px rgba(11,35,107, 0.8), -1px -1px 1px rgba(11,35,107, 0.1)',
  },
  colors: {
    sgxgreen: {
      50: '#effde0',
      100: '#daf5b9',
      200: '#c7ed8f',
      300: '#b5e565',
      400: '#a6de3b',
      500: '#82c421',
      600: '#5b9918',
      700: '#3a6d0e',
      800: '#1d4105',
      900: '#061700',
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          _autofill: {
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Open Sans',
      },
    },
  },
});
