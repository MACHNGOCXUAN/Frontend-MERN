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
  const [seleteStyle, setSeleteStyle] = useState('Board')

  const handleClick = (style) => {
    setSeleteStyle(style)
  }

  return (
    <Box px={1} sx={{
      backgroundColor:'primary.dark',
      width:'100%',
      height: (theme) => theme.trelloCustom.navHeight,
      display:'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      gap: 1,
      '@media (max-width: 800px)': {
        height: (theme) => theme.trelloCustom.navHeightColunm,
        flexWrap: 'wrap',
        flexDirection: 'column'
      }
    }} >
      <Box sx={{
        display:'flex',
        alignItems:'center',
        gap: 0.1,
        '@media (max-width: 800px)': {
          marginBlockStart: '5px',
          width: '100%',
          justifyContent: 'flex-start'
        }
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
              fontSize: '1rem',
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
              backgroundColor: 'primary.main',
              borderRadius: 2
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input': {
              backgroundColor: 'primary.main',
              borderRadius: 2
            }
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip title='Star'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: 'primary.main' } }}>
              <StarOutlineIcon fontSize='small'/>
            </Box>
          </Tooltip>
          <Tooltip title='Change visibility'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: 'primary.main' } }}>
              <PeopleAltIcon fontSize='small'/>
            </Box>
          </Tooltip>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}>
            <Tooltip title='Board'>
              <Button
                sx={{
                  px: '15px',
                  backgroundColor: seleteStyle==='Board'?'white':'transparent',
                  color: seleteStyle==='Board'?'primary.main':'white',
                  '&:hover': seleteStyle === 'Board' ? { bgcolor: 'white' } : { bgcolor: 'primary.main' }
                }}
                onClick={() => handleClick('Board')}
                startIcon={<LeaderboardIcon fontSize='small'/>}>Board</Button>
            </Tooltip>
            <Tooltip title='Table'>
              <Button
                sx={{
                  px: '15px',
                  backgroundColor: seleteStyle==='Table'?'white':'transparent',
                  color: seleteStyle==='Table'?'primary.main':'white',
                  '&:hover': seleteStyle === 'Table' ? { bgcolor: 'white' } : { bgcolor: 'primary.main' }
                }}
                onClick={() => handleClick('Table')}
                startIcon={<TableChartIcon fontSize='small'/>}>Table</Button>
            </Tooltip>
          </Box>
          <Tooltip title='Customize views'>
            <Box sx={{ borderRadius: 1, color: 'white', padding: 1, display: 'flex', alignItems: 'center', '&:hover':{ backgroundColor: 'primary.main' } }}>
              <ExpandMoreIcon fontSize='small'/>
            </Box>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color: 'white',
        '@media (max-width: 800px)': {
          marginBlockEnd: '5px',
          width: '100%',
          justifyContent: 'flex-end'
        }
      }}>
        <Tooltip title='Power Usp'>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: 'primary.main', borderRadius: 2 } }}>
            <SvgIcon component={IconPower} inheritViewBox fontSize="small"/>
          </Box>
        </Tooltip>
        <Tooltip title='Automation'>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: 'primary.main', borderRadius: 2 } }}>
            <SvgIcon component={IconAutomation} inheritViewBox fontSize="small"/>
          </Box>
        </Tooltip>
        <Tooltip title='Filter cards'>
          <Button sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'white',
            '&:hover':{ color:'white', backgroundColor: 'primary.main' }
          }}> <FilterListIcon fontSize="small"/> Filters </Button>
        </Tooltip>
        <Box sx={{ mr:1, border: '1px solid', height: 20, color: 'primary.main' }}></Box>
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
            '&:hover':{ color:'white', backgroundColor: 'primary.main' }
          }}> <PersonAddIcon fontSize='small' /> Share </Button>
        </Tooltip>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, '&:hover':{ backgroundColor: 'primary.main', borderRadius: 2 } }}>
          <MoreHorizIcon fontSize="small"/>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar