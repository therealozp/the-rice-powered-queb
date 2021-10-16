import { createTheme } from '@mui/material';

const quebTheme = createTheme({
	typography: {
		fontFamily: ['"IBM Plex Sans"', '"Poppins"', '"PT Sans"'].join(','),
	},
	palette: {
		primary: {
			main: '#455a64',
			dark: '#212b30',
		},
		secondary: {
			main: '#FACC5C',
		},
		themeGreen: {
			main: '#6B9589',
		},
		themeBrown: {
			main: '#33150B',
		},
		chipYellow: {
			main: '#D1941A',
		},
		chipGreen: {
			main: '#37833B',
		},
		chipRed: {
			main: '#C8372D',
		},
		themeYellow: {
			main: '#FCAA44',
		},
	},
});

export { quebTheme };
