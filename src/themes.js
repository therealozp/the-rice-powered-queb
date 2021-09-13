import { createTheme } from '@material-ui/core/styles';

const quebTheme = createTheme({
	typography: {
		// fontFamily: ["Josefin Sans", "cursive"].join(","),
		fontFamily: [
			'Noto Sans JP',
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
			main: '#FCAA44',
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
