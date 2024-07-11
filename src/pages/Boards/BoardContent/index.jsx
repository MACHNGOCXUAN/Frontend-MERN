import Box from '@mui/material/Box'

function BoardContent () {
  return (
    <Box sx={{
      backgroundColor:'primary.main',
      width:'100%',
      height: (them) => `calc(100vh - ${them.trelloCustom.headerHeight} - ${them.trelloCustom.navHeight})`,
      display:'flex',
      alignItems:'center'
    }}>
      Broad cart
    </Box>
  )
}

export default BoardContent