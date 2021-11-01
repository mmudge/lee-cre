import { green, amber, grey, indigo, blueGrey, teal, cyan, orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: teal[500],
      main: teal[600],
      dark: teal[700]
    },
    secondary: {
      light: orange[400],
      main: orange[500],
      dark: orange[600]
    },
    text: {
      primary: grey[800],
      secondary: grey[700]
    }
  }
})

export default theme
