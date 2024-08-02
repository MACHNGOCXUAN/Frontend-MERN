import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify'

function ListColumns ({ columns }) {
  const [titleColumn, setTitleColumn] = useState('')
  const [oppenNewColumn, setOppenNewColumn] = useState(false)
  const toggleOppenAddColumn = () => setOppenNewColumn(!oppenNewColumn)

  const addColumn = () => {
    if ( !titleColumn ) {
      toast.error('loi khong co title')
      return
    }

    // console.log(titleColumn)
    toggleOppenAddColumn()
    setTitleColumn('')
  }

  return (
    <SortableContext items={columns.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
        {/* Box column 01*/}
        {columns.map(column => <Column key={column._id} column={column}/>)}
        {/* Add new card */}
        {!oppenNewColumn
          ? <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            bgcolor: '#ffffff3d',
            height: 'fit-content',
            mx: 2,
            borderRadius: '10px'
          }}>
            <Button onClick={toggleOppenAddColumn} startIcon={ <AddBoxIcon/> } sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              borderRadius: '10px',
              px: 3,
              py: 1,
              color: 'white'
            }}>
              Add another list
            </Button>
          </Box>
          : <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            bgcolor: ( theme ) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            height: 'fit-content',
            mx: 2,
            borderRadius: '10px'
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1 }}>
              <TextField value={titleColumn} onChange={(e) => setTitleColumn(e.target.value)} autoFocus size='small' placeholder='Enter list title'/>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button onClick={addColumn} sx={{ bgcolor: '#2980b9', color: 'white' }}>Add column</Button>
                <CloseIcon onClick={toggleOppenAddColumn} fontSize='small'/>
              </Box>
            </Box>
          </Box>
        }
      </Box>
    </SortableContext>
  )
}

export default ListColumns