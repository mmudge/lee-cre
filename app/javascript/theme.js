import { green, amber, grey, indigo, blueGrey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: indigo[700],
      main: indigo[800],
      dark: indigo[900]
    },
    secondary: {
      light: amber[500],
      main: amber[600],
      dark: amber[700]
    },
    text: {
      primary: blueGrey[800],
      secondary: blueGrey[700]
    }
  }
})

export default theme
