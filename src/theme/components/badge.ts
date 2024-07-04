
import { mode } from '@chakra-ui/theme-tools';
export const badgeStyles = {
  components: {
    Badge: {
      baseStyle: {
        borderRadius: '10px',
        lineHeight: '100%',
        padding: '7px',
        paddingLeft: '12px',
        paddingRight: '12px'
      },
      variants: {
        outline: () => ({
          borderRadius: '16px'
        }),
        brand: (props: any) => ({
          bg: mode('brand.500', 'brand.400')(props),
          color: 'white',
          _focus: {
            bg: mode('brand.500', 'brand.400')(props)
          },
          _active: {
            bg: mode('brand.500', 'brand.400')(props)
          },
          _hover: {
            bg: mode('brand.600', 'brand.400')(props)
          }
        }),
        success: (props: any) => ({
          bg: mode('green.500', 'green.400')(props),
          color: 'white',
          _focus: {
            bg: mode('green.500', 'green.400')(props)
          },
          _active: {
            bg: mode('green.500', 'green.400')(props)
          },
          _hover: {
            bg: mode('green.600', 'green.400')(props)
          }
        }),
        danger: (props: any) => ({
          bg: mode('red.500', 'red.400')(props),
          color: 'white',
          _focus: {
            bg: mode('red.500', 'red.400')(props)
          },
          _active: {
            bg: mode('red.500', 'red.400')(props)
          },
          _hover: {
            bg: mode('red.600', 'red.400')(props)
          }
        }),
        warning: (props: any) => ({
          bg: mode('yellow.500', 'yellow.400')(props),
          color: 'white',
          _focus: {
            bg: mode('yellow.500', 'yellow.400')(props)
          },
          _active: {
            bg: mode('yellow.500', 'yellow.400')(props)
          },
          _hover: {
            bg: mode('yellow.600', 'yellow.400')(props)
          }
        })
      }
    }
  }
};
