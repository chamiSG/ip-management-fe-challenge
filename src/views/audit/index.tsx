// Chakra imports
import { Box } from '@chakra-ui/react';

// Custom Chakra theme
const Audit = (props: { [x: string]: any }) => {
  const { children, ...rest } = props;
  return (
    <Box>
      Audit Page
    </Box>
  );
}

export default Audit;