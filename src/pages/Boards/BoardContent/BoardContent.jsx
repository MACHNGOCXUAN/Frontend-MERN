import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'
import { useState, useEffect } from 'react'
import { FE_CardNoColumn } from '~/utils/formats'

import { arrayMove } from '@dnd-kit/sortable'
import { DndContext,
  useSensor,
  useSensors,
  // MouseSensor,
  // TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners } from '@dnd-kit/core'
import { MouseSensor, TouchSensor } from '~/customLibs/dndKit'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  column: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  card: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent ({ board, createColumn, createCard }) {
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
  const [oldActiveDrap, setOldActiveDrap] = useState(null)

  // Ham tim column bang cardid
  const findColumnByCardId = ( cardId ) => {
    return orderedColumns.find( column => column?.cards?.map( card => card?._id )?.includes(cardId) )
  }

  const KeoThaCardKhacColumn = (
    overColumn, overCardId, over, active, activeColumn, activeCardId, activeCardData
  ) => {
    setOrderedColumns(column => {
      // tim vi tri sap keo tha
      const overCardIndex = overColumn?.cards?.findIndex(card => card?._id === overCardId)

      let newCardIndex

      const isBelowOverItem = over && active.rect.current.translated &&
                              active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : column?.cards?.length + 1

      const nextcolumns = [...column]
      const nextActiveColumn = nextcolumns.find(column => column?._id === activeColumn?._id)
      const nextOverColumn = nextcolumns.find(column => column?._id === overColumn?._id)

      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card?._id !== activeCardId)
        // them card ao vao column
        if (nextActiveColumn.cards.length ===0 ) {
          nextActiveColumn.cards = [FE_CardNoColumn(nextActiveColumn)]
        }
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
      }

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card?._id !== activeCardId)
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeCardData)
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card?._id)
        // xoa card ao trong column
        nextOverColumn.cards = nextOverColumn.cards?.filter(card => !card?.FE_CardNoColumn)
      }

      return nextcolumns
    })
  }

  // bat dau keo
  function handleDragStart(event) {
    // console.log(event)
    setActiveDragItemId(event?.active?.id)
    // kiem tra xem keo tha o column hay card
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.card : ACTIVE_DRAG_ITEM_TYPE.column)
    setActiveDragItemData(event?.active?.data?.current)

    if (event?.active?.data?.current?.columnId) {
      setOldActiveDrap(findColumnByCardId(event?.active?.id))
    }
  }

  const handleDragOver = (event) => {
    // console.log(event)
    const { active, over } = event

    if (!active || !over) return
    const { id: activeCardId, data: { current: activeCardData } } = active
    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      KeoThaCardKhacColumn(overColumn, overCardId, over, active, activeColumn, activeCardId, activeCardData)
    }
  }

  // sau khi tha
  const handleDragEnd = (event) => {
    // console.log(event)
    const { active, over } = event
    // Neu keo ra vi tri khong co column thi return
    if ( !over ) return

    // Keo tha card trong column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.card) {
      const { id : activeCardId, data: { current: activeCardData } } = active
      const { id: overCardId } = over

      const activeColumn = findColumnByCardId(activeCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      // keo tha card khac column
      if (oldActiveDrap?._id !== overColumn?._id) {
        KeoThaCardKhacColumn(overColumn, overCardId, over, active, activeColumn, activeCardId, activeCardData)
      } else {
        // Keo tha card cung column
        const oldCardIndex = oldActiveDrap?.cards?.findIndex(card => card._id === activeDragItemId)
        const newCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
        const dndOrderedCard = arrayMove(oldActiveDrap?.cards, oldCardIndex, newCardIndex)

        setOrderedColumns(column => {
          const nextcolumns = [...column]

          const targetColumn = nextcolumns.find(column => column?._id == overColumn?._id)
          targetColumn.cards = dndOrderedCard
          targetColumn.cardOrderIds = dndOrderedCard.map(card => card?._id)
          return nextcolumns
        })
      }
    }

    // Keo tha column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.column) {
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
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldActiveDrap(null)
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
    <DndContext collisionDetection={closestCorners} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} sensors={sensor}>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        background: ( theme ) => theme.palette.mode === 'dark' ? '#2980b9' : '#2c3e50',
        '@media (max-width: 1000px)': {
          height: (theme) => theme.trelloCustom.boardContentHeightrResponsive
        },
        p: '10px 0'
      }}>
        <ListColumns createCard={createCard} columns={orderedColumns} createColumn={createColumn}/>
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