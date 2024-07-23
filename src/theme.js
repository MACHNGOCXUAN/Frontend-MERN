// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.

const APP_BAR_HEIGHT = '58px'
const NAV_BAR_HEIGHT = '60px'
const NAV_BAR_HEIGHT_RESPONSIVE = '95px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${NAV_BAR_HEIGHT})`
const BOARD_CONTENT_HEIGHT_RESPONSIVE = `calc(100vh - ${APP_BAR_HEIGHT} - ${NAV_BAR_HEIGHT_RESPONSIVE})`

const theme = extendTheme({
  trelloCustom: {
    headerHeight: APP_BAR_HEIGHT,
    navHeight: NAV_BAR_HEIGHT,
    navHeightColunm: '95px',
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    boardContentHeightrResponsive: BOARD_CONTENT_HEIGHT_RESPONSIVE
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary:cyan,
  //       secondary:orange
  //     }
  //   }
  // },
  components: {
    // CssBaseline
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width: '5px',
            height: '5px'
          },
          '*::-webkit-scrollbar-thumb':{
            background: '#bdc3c7',
            borderRadius: '5px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#00b894'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color : theme.palette.primary.main,
          fontSize: '0.875rem',
          // borderRadius: '10px',
          // '.MuiOutlinedInput-notchedOutline':{
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline':{
          //     borderColor: theme.palette.primary.light
          //   }
          // },
          // Forcus khong bi an border
          '& fieldset':{
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme