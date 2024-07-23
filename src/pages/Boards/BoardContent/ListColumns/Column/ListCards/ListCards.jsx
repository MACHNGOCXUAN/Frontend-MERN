import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards () {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)} - ${theme.trelloCustom.columnHeaderHeight} - ${theme.trelloCustom.columnFooterHeight})`,
      '@media (max-width: 1000px)': {
        maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeightrResponsive} - ${theme.spacing(5)} - ${theme.trelloCustom.columnHeaderHeight} - ${theme.trelloCustom.columnFooterHeight})`
      },
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <Card/>
      <Card cardDefault/>
      <Card cardDefault/>
      <Card cardDefault/>
      <Card cardDefault/>
      <Card cardDefault/>
      <Card cardDefault/>
    </Box>
  )
}

export default ListCards