import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import { useState, useEffect } from 'react'

import { arrayMove } from '@dnd-kit/sortable'
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  column: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  card: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

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

  const [activeDragItemId, setActiveDragItemId]= useState(null)
  const [activeDragItemType, setActiveDragItemType]= useState(null)
  const [activeDragItemData, setActiveDragItemData]= useState(null)

  // bat dau keo
  function handleDragStart(event) {
    // console.log(event)
    setActiveDragItemId(event?.active?.id)
    // kiem tra xem keo tha o column hay card
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.card : ACTIVE_DRAG_ITEM_TYPE.column)
    setActiveDragItemData(event?.active?.data?.current)
  }

  // sau khi tha
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

  // khi tha thi hieu ung em hoi de nhin hon (fix dat dat)
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensor}>
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
        <DragOverlay dropAnimation={dropAnimation}>
          {(!activeDragItemId || !activeDragItemType) && null}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.column) && <Column column={activeDragItemData}/>}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.card) && <Card card={activeDragItemData}/>}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent