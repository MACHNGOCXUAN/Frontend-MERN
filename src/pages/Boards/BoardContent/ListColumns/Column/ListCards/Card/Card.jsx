import Typography from '@mui/material/Typography'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import Button from '@mui/material/Button'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card ({ cardDefault }) {
  if ( cardDefault ) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography> Card 01 </Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/426701460_1560707824694436_8650737408764239067_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kxioREMbQ44Q7kNvgH3xvd2&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYDkN1eyD-7J_ouM0OCrYl0Sa5yGMf6czw1B_Wcm2AW4UA&oe=66A465F5"
          alt="green iguana"
        />
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography> MachNgocXuan deverloper </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon/>}>20</Button>
        <Button size="small" startIcon={<CommentIcon/>}>25</Button>
        <Button size="small" startIcon={<AttachmentIcon/>}>30</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card