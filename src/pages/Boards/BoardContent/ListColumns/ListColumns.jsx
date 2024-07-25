import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns ({ columns }) {

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
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          bgcolor: '#ffffff3d',
          height: 'fit-content',
          mx: 2,
          borderRadius: '10px'
        }}>
          <Button startIcon={ <AddBoxIcon/> } sx={{
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
      </Box>
    </SortableContext>
  )
}

export default ListColumns