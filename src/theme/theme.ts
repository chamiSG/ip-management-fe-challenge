import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { CardComponent } from '@/theme/components/card';
import { buttonStyles } from '@/theme/components/button';
// import { badgeStyles } from './components/badge';
import { inputStyles } from '@/theme/components/input';
import "@fontsource/poppins";
// import { progressStyles } from './components/progress';
// import { sliderStyles } from './components/slider';
// import { textareaStyles } from './components/textarea';
// import { switchStyles } from './components/switch';
// import { linkStyles } from './components/link';
import { breakpoints } from './breakpoints';
import { globalStyles } from './styles';

export default extendTheme(
	{ breakpoints }, // Breakpoints
	globalStyles,
	CardComponent, // card component
	buttonStyles, // button styles
	inputStyles, // input styles
	// badgeStyles, // badge styles
	// linkStyles, // link styles
	// progressStyles, // progress styles
	// sliderStyles, // slider styles
	// textareaStyles, // textarea styles
	// switchStyles, // switch styles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
