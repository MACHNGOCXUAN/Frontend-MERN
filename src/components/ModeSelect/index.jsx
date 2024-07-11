import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'

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

export default ModeSelect