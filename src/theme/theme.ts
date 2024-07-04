import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { CardComponent } from '@/theme/components/card';
import { buttonStyles } from '@/theme/components/button';
import { badgeStyles } from '@/theme/components/badge';
import { inputStyles } from '@/theme/components/input';
import "@fontsource/poppins";
import { breakpoints } from './breakpoints';
import { globalStyles } from './styles';

export default extendTheme(
	{ breakpoints }, // Breakpoints
	globalStyles,
	CardComponent, // card component
	buttonStyles, // button styles
	inputStyles, // input styles
	badgeStyles, // badge styles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
