import { createTheme } from '@mui/material';

const quebTheme = createTheme({
	typography: {
		// fontFamily: ["Josefin Sans", "cursive"].join(","),
		fontFamily: [
			'"Ubuntu"',
			'"Helvetica Neue"',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
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
	},
});

export { quebTheme };
