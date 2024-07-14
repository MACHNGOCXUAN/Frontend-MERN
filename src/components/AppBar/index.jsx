import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import IconMenu from '@mui/icons-material/AppsOutlined'
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '~/assets/trelloIcon.svg?react'
import Typography from '@mui/material/Typography'
import Workspace from './Menu/Workspace'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Accout from './Menu/Profiles'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import { useState } from 'react'


function AppBar () {

  const [focused, setFocused] = useState(false)

  return (
    <Box px={3} sx={{
      width:'100%',
      height: (theme ) => theme.trelloCustom.headerHeight,
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        gap: 1.5,
        color: 'primary.main'
      }}>
        <IconMenu fontSize='medium'/>
        <Box sx={{
          display: 'flex',
          alignItems:'center',
          gap: 1
        }}>
          <SvgIcon component={TrelloIcon} inheritViewBox/>
          <Typography sx={{
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>Trello</Typography>
        </Box>
        <Workspace/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'end',
        flex: 1,
        gap: 2
      }}>
        <TextField
          id="search"
          placeholder='Search'
          type="search"
          variant="outlined"
          size="small"
          sx={{
            width: focused ? '100%' : 'auto',
            transition: 'width 0.3s ease-in-out'
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{
                  color: 'primary.main'
                }}/>
              </InputAdornment>
            )
          }}
        />
        <ModeSelect/>
        <Tooltip title="Thong bao">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ cursor: 'pointer' }}>
          <HelpOutlineIcon sx={{ color: 'primary.main' }}/>
        </Tooltip>
        <Accout/>
      </Box>
    </Box>
  )
}

export default AppBar