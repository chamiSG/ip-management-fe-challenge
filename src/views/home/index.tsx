// Chakra imports
import { Box } from '@chakra-ui/react';

// Custom Chakra theme
const Home = (props: { [x: string]: any }) => {
  const { children, ...rest } = props;
  return (
    <Box>
      Home Page
    </Box>
  );
}

export default Home;