import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';


export const THEME = createMuiTheme({
  palette: {
    primary: {main: grey[900], light: grey[100], contrastText: grey[400], },
    secondary: {main: red[900]},
  },
});
