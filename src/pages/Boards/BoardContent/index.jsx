import Box from '@mui/material/Box'

function BoardContent () {
  return (
    <Box sx={{
      width:'100%',
      height: (them) => `calc(100vh - ${them.trelloCustom.headerHeight} - ${them.trelloCustom.navHeight})`,
      display:'flex',
      alignItems:'center',
      background: ( theme ) => theme.palette.mode === 'dark' ? '#2980b9' : '#2c3e50',
      '@media (max-width: 1000px)': {
        height: (them) => `calc(100vh - ${them.trelloCustom.headerHeight} - ${them.trelloCustom.navHeightColunm})`
      }
    }}>
      Broad cart
    </Box>
  )
}

export default BoardContent