import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#1e90ff"
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});