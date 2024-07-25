import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import { useState, useEffect } from 'react'

import { arrayMove } from '@dnd-kit/sortable'
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'

function BoardContent ({ board }) {
  // Yeu cau chuot di chuyen 10px thi kich hoat event , fix truong hop click goi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint : { distance: 10 } })
  // Nhan du chuot trong 250ms va di chuyen 5px de kich hoat even
  const touchSensor = useSensor(TouchSensor, { activationConstraint : { delay: 250, tolerance: 5 } })
  // Uu tien dung mouse and touch de co trai nhieu tot nhat tren mobile
  const sensor = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    setOrderedColumns(mapOrder( board?.columns, board?.columnOrderIds, '_id' ))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log(event)
    const { active, over } = event
    // Neu keo ra vi tri khong co column thi return
    if ( !over ) return
    if (active.id !== over.id) {
      setOrderedColumns((orderedColumns) => {
        // Vi tri cu cua column
        const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
        // Vi tri cu cua column
        const newIndex = orderedColumns.findIndex(c => c._id === over.id)
        // Cap nhan vi tri cua column sau khi keo
        return arrayMove(orderedColumns, oldIndex, newIndex)
      })
    }
    // cach 2
    // if (active.id !== over.id) {
    //   const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
    //   const newIndex = orderedColumns.findIndex(c => c._id === over.id)

    //   const dndOrderedColumn = arrayMove(orderedColumns, oldIndex, newIndex)

    //   setOrderedColumns(dndOrderedColumn)
    // }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensor}>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        background: ( theme ) => theme.palette.mode === 'dark' ? '#2980b9' : '#2c3e50',
        '@media (max-width: 1000px)': {
          height: (theme) => theme.trelloCustom.boardContentHeightrResponsive
        },
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent