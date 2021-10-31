import { green, amber, grey, indigo, blueGrey, teal, cyan } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: teal[500],
      main: teal[600],
      dark: teal[700]
    },
    secondary: {
      light: cyan[400],
      main: cyan[500],
      dark: cyan[600]
    },
    text: {
      primary: grey[800],
      secondary: grey[700]
    }
  }
})

export default theme
