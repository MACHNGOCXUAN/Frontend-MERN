import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/utils/sort'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { useConfirm } from 'material-ui-confirm'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { toast } from 'react-toastify'

function Column ({ column, createCard, deleteColumn }) {

  const [titleCard, setTitleCard] = useState('')
  const [oppenNewCard, setOppenNewCard] = useState(false)
  const toggleNewCard = () => setOppenNewCard(!oppenNewCard)
  const addCard =async () => {

    if (!titleCard) {
      toast.error('loi khong co title card', { position: 'bottom-left' })
      return
    }
    // console.log(titleCard)
    const dataNewCard = {
      title: titleCard,
      columnId: column._id
    }
    await createCard(dataNewCard)

    setTitleCard('')
    toggleNewCard()
  }

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: column._id, data: { ...column } })
  const dndKitColumnStyle = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const confirm = useConfirm()
  const handleDeleteColumn = () => {
    confirm({
      description: 'Xoa vinh vien Column va Card trong Column.',
      title: 'Ban co chac chan muon xoa ?',
      confirmationText: 'Xoa',
      allowClose: 'false',
      content: `Nhap ${column.title} de xac nhan xoa`,
      confirmationKeyword: `${column.title}`,
      dialogProps: { maxWidth: 'xs' }
    }).then(() => {
      deleteColumn(column._id)
    }).catch(() => {})
  }

  const orderedCarts = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  return (
    <div ref={setNodeRef} style={ dndKitColumnStyle } {...attributes}>
      <Box {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          ml: 2,
          borderRadius: '10px',
          background: ( theme ) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)})`,
          '@media (max-width: 1000px)': {
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeightrResponsive} - ${theme.spacing(5)})`
          }
        }}>
        {/* Box column header */}
        <Box sx={{
          height: (theme) => theme.trelloCustom.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
          <Typography sx={{
            fontWeight: 'bold'
          }}>{column?.title}</Typography>
          <Box>
            <Tooltip title='More options'>
              <MoreHorizIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleDeleteColumn} sx={{
                '&:hover': {
                  color: 'red'
                },
                '&:hover .hover-icon': {
                  color: 'red'
                }
              }}>
                <ListItemIcon className='hover-icon'><DeleteForeverIcon fontSize='small'/></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* Box list card */}
        <ListCards cards={orderedCarts}/>
        {/* Box column footer */}

        {!oppenNewCard
          ? <Box sx={{
            height: (theme) => theme.trelloCustom.columnFooterHeight,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3
          }}>
            <Button onClick={toggleNewCard} sx={{ display: 'flex', justifyContent: 'flex-start' }} fullWidth startIcon={<AddCardIcon/>}> Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon/>
            </Tooltip>
          </Box>
          : <Box sx={{
            bgcolor: ( theme ) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            height: 'fit-content',
            m: '0 5px',
            p: '0 5px',
            borderRadius: '10px'
          }}>
            <Box sx={{ display: 'flex', gap: 1, py: '10px' }}>
              <TextField data-no-dnd="true" sx={{ width: '100%' }} size='small' value={titleCard} onChange={(e) => setTitleCard(e.target.value)} autoFocus placeholder='Enter list title'/>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button onClick={addCard} sx={{ bgcolor: '#2980b9', color: 'white', px: 2 }}>Add</Button>
                <CloseIcon onClick={toggleNewCard} fontSize='small'/>
              </Box>
            </Box>
          </Box>
        }
      </Box>
    </div>
  )
}

export default Column