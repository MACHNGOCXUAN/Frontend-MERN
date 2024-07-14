// Mode theo kieu menu

// import { useColorScheme } from '@mui/material/styles'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import SettingBrightnessIcon from '@mui/icons-material/SettingsBrightness'
// import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
// import Box from '@mui/material/Box'

// function ModeSelect() {
//   const { mode, setMode } = useColorScheme()

//   const handleChange = (event) => {
//     const selectMode=event.target.value
//     setMode(selectMode)
//   }

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="mode-light-dark">Age</InputLabel>
//       <Select
//         labelId="select-mode-light-dark"
//         id="mode-light-dark"
//         value={mode}
//         label="mode"
//         onChange={handleChange}
//       >
//         <MenuItem value='light'>
//           <div style={{
//             display:'flex',
//             alignItems:'center',
//             gap:'8px'
//           }}>
//             <LightModeIcon fontSize='small'/> Light
//           </div>
//         </MenuItem>
//         <MenuItem value='dark'>
//           <Box
//             sx={{
//               display:'flex',
//               alignItems:'center',
//               gap:1
//             }}>
//             <DarkModeOutlineIcon fontSize='small'/> Dark
//           </Box>
//         </MenuItem>
//         <MenuItem value='system'>
//           <Box
//             sx={{
//               display:'flex',
//               alignItems:'center',
//               gap:1
//             }}>
//             <SettingBrightnessIcon fontSize='small'/> System
//           </Box>
//         </MenuItem>
//       </Select>
//     </FormControl>
//   )
// }

// export default ModeSelect

// mode theo kieu button
import IconButton from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import Tooltip from '@mui/material/Tooltip'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  return (
    <IconButton
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }} sx={{
        border: '1px solid',
        width: '30px',
        height: '30px',
        borderRadius: '20px',
        color: 'primary.main'
      }}
    >
      {mode === 'light' ? <Tooltip title='Turn off the light'><DarkModeOutlined/></Tooltip> : <Tooltip title='Turn on the light'><LightModeOutlined /></Tooltip>}
    </IconButton>
  )
}

export default ModeSelect