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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, CardActions } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function BoardContent () {
  const COLUMN_HEADER_HEIGHT= '50px'
  const COLUMN_FOOTER_HEIGHT= '56px'

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
      <Box sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
        {/* Box column 01*/}
        <Box sx={{
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
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}>
            <Typography sx={{
              fontWeight: 'bold'
            }}>To do</Typography>
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
                <MenuItem>
                  <ListItemIcon><DeleteForeverIcon fontSize='small'/></ListItemIcon>
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
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '@media (max-width: 1000px)': {
              maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeightrResponsive} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
            },
            overflowX: 'hidden',
            overflowY: 'auto'
          }}>
            <Card sx={{
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
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan deverloper </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>25</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>30</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3
          }}>
            <Button sx={{ display: 'flex', justifyContent: 'flex-start' }} fullWidth startIcon={<AddCardIcon/>}> Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon/>
            </Tooltip>
          </Box>
        </Box>

        {/* Box column 02*/}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          ml: 2,
          borderRadius: '10px',
          background: ( theme ) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)})`,
          '@media (max-width: 1000px)': {
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeightrResponsive} - ${theme.spacing(4)})`
          }
        }}>
          {/* Box column header */}
          <Box sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}>
            <Typography sx={{
              fontWeight: 'bold'
            }}>To do</Typography>
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
                <MenuItem>
                  <ListItemIcon><DeleteForeverIcon fontSize='small'/></ListItemIcon>
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
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
            '@media (max-width: 1000px)': {
              maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeightrResponsive} - ${theme.spacing(4)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
            },
            overflowX: 'hidden',
            overflowY: 'auto'
          }}>
            <Card sx={{
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
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan deverloper </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                <Button size="small" startIcon={<CommentIcon/>}>25</Button>
                <Button size="small" startIcon={<AttachmentIcon/>}>30</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardActionArea>
                <CardContent sx={{ p: 1.5 }}>
                  <Typography> MachNgocXuan 01 </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* Box column footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3
          }}>
            <Button sx={{ display: 'flex', justifyContent: 'flex-start' }} fullWidth startIcon={<AddCardIcon/>}> Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon/>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent