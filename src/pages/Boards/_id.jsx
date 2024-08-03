// Board details

import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailAPI, createNewCard, createNewColumn, updateOrderedColumnIds } from '~/apis'
import { FE_CardNoColumn } from '~/utils/formats'

function BoardDetails () {
  const [board, setBoard] = useState(null)

  useEffect(() => {

    const boardId = '66ac7f0e8399fcd8dfc4caec'
    fetchBoardDetailAPI(boardId).then(board => {
      board.columns.forEach(column => {
        if ( column.cards.length===0 ) {
          column.cards = [FE_CardNoColumn(column)]
          column.cardOrderIds = [FE_CardNoColumn(column)._id]
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
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createCard._id)
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

  return (
    <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
      <AppBar />
      <BoardBar board={board}/>
      <BoardContent createCard={createCard} createColumn={createColumn} board={board} moveColumns={moveColumns}/>
    </Container>
  )
}

export default BoardDetails