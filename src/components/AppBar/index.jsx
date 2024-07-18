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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'


import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


function AppBar () {

  const [focused, setFocused] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box px={3} sx={{
      width:'100%',
      height: (theme ) => theme.trelloCustom.headerHeight,
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      gap: 4,
      overflowX: 'auto'
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
        <Box sx={{ display: { xs:'none', md:'flex' } }}>
          <Workspace />
          <Recent/>
          <Starred/>
          <Templates/>
        </Box>
        <Box sx={{ display: { xs:'flex', md:'none' } }}>
          <Button
            id="basic-button-workspace"
            aria-controls={open ? 'basic-menu-workspace' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon/>}
          >
            More
          </Button>

          <Menu id="basic-menu-workspace"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-workspace'
            }} >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <Workspace/>
                </ListItem>
                <ListItem disablePadding>
                  <Recent/>
                </ListItem>
                <ListItem disablePadding>
                  <Starred/>
                </ListItem>
                <ListItem disablePadding>
                  <Templates/>
                </ListItem>
              </List>
            </nav>
          </Menu>

          {/* <Menu
            id="basic-menu-workspace"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-workspace'
            }}
          >
            <MenuItem>
              <Workspace/>
            </MenuItem>
            <MenuItem>
              <Recent/>
            </MenuItem>
            <MenuItem>
              <Starred/>
            </MenuItem>
            <MenuItem>
              <Templates/>
            </MenuItem>
          </Menu> */}
        </Box>
        <Button variant="outlined" sx={{ display: { xs:'none', md:'flex' } }}>Create</Button>
        <AddIcon color='error' fontSize='le' sx={{ display: { xs:'flex', md:'none' }, border: '2px solid', borderRadius: '5px', borderColor: 'primary.main', fontSize: 30 }}/>
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
            display: { sm: 'flex', xs: 'none' },
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
        <SearchIcon sx={{
          display: { sm: 'none', xs: 'flex' },
          color: 'primary.main'
        }}/>
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