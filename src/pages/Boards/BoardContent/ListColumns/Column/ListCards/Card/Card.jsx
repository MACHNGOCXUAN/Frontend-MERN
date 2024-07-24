import Typography from '@mui/material/Typography'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import Button from '@mui/material/Button'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card ({ card }) {

  const showCardAction= () => {
    return (
      !!card?.memberIds.length || !!card?.comments.length || !!card?.attachments.length
    )
  }

  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardActionArea>
        {card?.cover &&
          <CardMedia
            component="img"
            height="140"
            image={card?.cover}
            alt="green iguana"
          />}
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography> {card?.title} </Typography>
        </CardContent>
      </CardActionArea>
      {showCardAction() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds.length && <Button size="small" startIcon={<GroupIcon/>}>{card?.memberIds.length}</Button>}
          {!!card?.comments.length && <Button size="small" startIcon={<CommentIcon/>}>{card?.comments.length}</Button>}
          {!!card?.attachments.length && <Button size="small" startIcon={<AttachmentIcon/>}>{card?.attachments.length}</Button>}
        </CardActions>
      }
    </MuiCard>
  )
}

export default Card