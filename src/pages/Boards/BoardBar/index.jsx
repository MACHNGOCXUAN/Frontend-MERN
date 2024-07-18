import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Tooltip from '@mui/material/Tooltip'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import Button from '@mui/material/Button'
import TableChartIcon from '@mui/icons-material/TableChart'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconPower from '~/assets/power.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import IconAutomation from '~/assets/automation.svg?react'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'


function BoardBar () {
  const [value, setValue] = useState('MACHNGOCXUAN')

  return (
    <Box px={4} sx={{
      backgroundColor:'primary.dark',
      width:'100%',
      height: (theme) => theme.trelloCustom.navHeight,
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between'
    }} >
      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap: 1
      }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
          sx={{
            '& .MuiInputBase-input': {
              textAlign: 'center', // Căn giữa nội dung
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: 'white',
              width: `${value.length + 3}ch`, // Chiều rộng thay đổi theo độ dài của text
              transition: 'width 0.3s'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none'
              }
            },
            '&:hover':{
              backgroundColor: '#764865',
              borderRadius: 3
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input': {
              backgroundColor: '#764865',
              borderRadius: 3
            }
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title='Star'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: '#764865' } }}>
              <StarOutlineIcon />
            </Box>
          </Tooltip>
          <Tooltip title='Change visibility'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: '#764865' } }}>
              <PeopleAltIcon />
            </Box>
          </Tooltip>
          <Tooltip title='Board'>
            <Button variant="outlined" sx={{ backgroundColor: 'white', '&:hover':{ color:'white' } }} startIcon={<LeaderboardIcon />}>Board</Button>
          </Tooltip>
          <Tooltip title='Table'>
            <Button variant="text" sx={{ color: 'white', '&:hover':{ color:'white', backgroundColor: '#764865' } }} startIcon={<TableChartIcon />}>Table</Button>
          </Tooltip>
          <Tooltip title='Customize views'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: '#764865' } }}>
              <ExpandMoreIcon/>
            </Box>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: 'white'
      }}>
        <Tooltip title='Power Usp'>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: '#764865', borderRadius: 2 } }}>
            <SvgIcon component={IconPower} inheritViewBox/>
          </Box>
        </Tooltip>
        <Tooltip title='Automation'>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: '#764865', borderRadius: 2 } }}>
            <SvgIcon component={IconAutomation} inheritViewBox/>
          </Box>
        </Tooltip>
        <Tooltip title='Filter cards'>
          <Button sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'white',
            '&:hover':{ color:'white', backgroundColor: '#764865' }
          }}> <FilterListIcon /> Filters </Button>
        </Tooltip>
        <Box sx={{ border: '1px solid', height: 20, color: 'primary.main' }}></Box>
        <AvatarGroup sx={{
          '& .MuiAvatar-root': {
            width: 25,
            height: 25,
            fontSize: 'small',
            borderColor: 'white'
          }
        }} max={4}>
          <Tooltip title='Remy Sharp'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title='Travis Howard'>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title='Cindy Baker'>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Tooltip>
          <Tooltip title='Agnes Walker'>
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </Tooltip>
          <Tooltip title='Trevor Henderson'>
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Tooltip>
        </AvatarGroup>
        <Tooltip title='Share board'>
          <Button sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'black',
            backgroundColor: 'white',
            '&:hover':{ color:'white', backgroundColor: '#764865' }
          }}> <PersonAddIcon fontSize='small' /> Share </Button>
        </Tooltip>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: '#764865', borderRadius: 2 } }}>
          <MoreHorizIcon/>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar