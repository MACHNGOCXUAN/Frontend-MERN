import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
import { Box } from '@mui/material'

// eslint-disable-next-line react-refresh/only-export-components
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

//Dong bo he thong mode light va dark
// eslint-disable-next-line react-refresh/only-export-components
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectMode=event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="mode-light-dark">Age</InputLabel>
      <Select
        labelId="select-mode-light-dark"
        id="mode-light-dark"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'8px'
          }}>
            <LightModeIcon fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box
            sx={{
              display:'flex',
              alignItems:'center',
              gap:1
            }}>
            <DarkModeOutlineIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box
            sx={{
              display:'flex',
              alignItems:'center',
              gap:1
            }}>
            <SettingBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ModeSelect/>
      <hr />
      <ModeToggle />
      <hr />
      <CssBaseline/>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
)
