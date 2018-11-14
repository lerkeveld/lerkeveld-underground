import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ff5131',
        main: '#d50000',
        dark: '#9b0000',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ffff52',
        main: '#ffd600',
        dark: '#c7a500',
        contrastText: '#000000',
      },
    }
});

export default theme;
