// Board details

import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailAPI, createNewCard, createNewColumn, updateOrderedColumnIds, updateOrderedCard, updateOrderedCardOtherColumn, deleteColumnApi } from '~/apis/index'
import { FE_CardNoColumn } from '~/utils/formats'
import { mapOrder } from '~/utils/sort'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { toast } from 'react-toastify'

function BoardDetails () {
  const [board, setBoard] = useState(null)

  useEffect(() => {

    const boardId = '66ac7f0e8399fcd8dfc4caec'
    fetchBoardDetailAPI(boardId).then(board => {

      board.columns = mapOrder( board.columns, board.columnOrderIds, '_id')

      board.columns.forEach(column => {
        if ( column.cards.length===0 ) {
          column.cards = [FE_CardNoColumn(column)]
          column.cardOrderIds = [FE_CardNoColumn(column)._id]
        } else {
          column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        }
      })
      setBoard(board)
    })
  }, [])

  const createColumn = async (dataNewColumn) => {
    const createdColumn = await createNewColumn({ ...dataNewColumn, boardId: board._id })

    createdColumn.cards = [FE_CardNoColumn(createdColumn)]
    createdColumn.cardOrderIds = [FE_CardNoColumn(createdColumn)._id]

    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createCard._id)
    setBoard(newBoard)
  }

  const createCard = async (dataNewCard) => {
    const createdCard = await createNewCard({ ...dataNewCard, boardId: board._id })

    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      if (columnToUpdate.cards.some(card => card.FE_CardNoColumn)) {
        columnToUpdate.cards = [createdCard]
        columnToUpdate.cardOrderIds = [createCard._id]
      } else {
        columnToUpdate.cards.push(createdCard)
        columnToUpdate.cardOrderIds.push(createCard._id)
      }
    }
    setBoard(newBoard)
  }
  const moveColumns = async (dndOrderedColumn) => {
    const dndOrderedColumnIds = dndOrderedColumn.map(column => column._id)

    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumn
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)

    await updateOrderedColumnIds(newBoard._id, { columnOrderIds: newBoard.columnOrderIds })
  }

  const moveCardsInColumn = async (dndOrderedCard, dndOrderedCardIds, columnId) => {

    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCard
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    setBoard(newBoard)

    await updateOrderedCard(columnId, { cardOrderIds: columnToUpdate.cardOrderIds })
  }

  const moveCardsOtherColumn = async ( currentCardId, prevColumnId, nextColumnId, dndOrderedColumn ) => {
    // console.log('currentCardId', currentCardId)
    // console.log('prevColumnId', prevColumnId)
    // console.log('nextColumnId', nextColumnId)
    // console.log('dndOrderedColumn', dndOrderedColumn)

    const dndOrderedColumnIds = dndOrderedColumn.map(column => column._id)

    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumn
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)

    let prevCardOrderIds = dndOrderedColumn.find(column => column._id === prevColumnId)?.cardOrderIds
    if (prevCardOrderIds[0].includes('placeholder-card')) prevCardOrderIds = []

    let nextCardOrderIds = dndOrderedColumn.find(column => column._id === nextColumnId)?.cardOrderIds
    nextCardOrderIds = nextCardOrderIds.filter( _id => !_id.includes('placeholder-card'))

    await updateOrderedCardOtherColumn({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds
    })
  }

  const deleteColumn = (columnId) => {
    let newBoad = { ...board }
    newBoad.columns = newBoad.columns.filter(column => column._id !== columnId)
    newBoad.columnOrderIds = newBoad.columnOrderIds.filter( _id => _id !== columnId)
    setBoard(newBoad)

    deleteColumnApi(columnId).then(res => {
      toast.success(res.deleteRerult)
    })
  }

  if (!board) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent deleteColumn={deleteColumn} createCard={createCard} createColumn={createColumn} board={board} moveColumns={moveColumns} moveCards={moveCardsInColumn} moveCardsOtherColumn={moveCardsOtherColumn}/>
    </Container>
  )
}

export default BoardDetails