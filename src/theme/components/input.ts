import { mode } from '@chakra-ui/theme-tools';
export const inputStyles = {
	components: {
		Input: {
			baseStyle: {
				field: {
					fontWeight: 400,
					borderRadius: '8px'
				}
			},

			variants: {
				main: (props: any) => ({
					field: {
						bg: mode('transparent', 'navy.800')(props),
						border: '1px solid',
						color: mode('secondaryGray.900', 'white')(props),
						borderColor: mode('secondaryGray.100', 'whiteAlpha.100')(props),
						borderRadius: '16px',
						fontSize: 'sm',
						p: '20px',
						_placeholder: { color: 'secondaryGray.400' }
					}
				}),
				auth: (props: any) => ({
					field: {
						fontWeight: '500',
						color: mode('navy.700', 'white')(props),
						bg: mode('transparent', 'transparent')(props),
						border: '1px solid',
						borderColor: mode('secondaryGray.100', 'rgba(135, 140, 189, 0.3)')(props),
						borderRadius: '16px',
						_placeholder: { color: 'secondaryGray.600', fontWeight: '400' }
					}
				}),
			}
		},
	}
};
