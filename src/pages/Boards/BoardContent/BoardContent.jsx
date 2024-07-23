import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'


function BoardContent () {

  return (
    <Box sx={{
      width:'100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      background: ( theme ) => theme.palette.mode === 'dark' ? '#2980b9' : '#2c3e50',
      '@media (max-width: 1000px)': {
        height: (theme) => theme.trelloCustom.boardContentHeightrResponsive
      },
      p: '10px 0'
    }}>
      <ListColumns/>
    </Box>
  )
}

export default BoardContent