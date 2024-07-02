// Chakra imports
import { Box } from '@chakra-ui/react';
// Layout components
import Header from '@/layouts/header';

// Custom Chakra theme
const RootLayout = (props: { [x: string]: any }) => {
  const { children, ...rest } = props;
  return (
    <Box {...rest}>
      <Header />
      <Box className='container mx-auto py-5'>
        {children}
      </Box>
    </Box>
  );
}

export default RootLayout;