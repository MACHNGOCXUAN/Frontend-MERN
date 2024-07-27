
// Ham tao ra card ao
export const FE_CardNoColumn = (column) => {
  return {
    _id: `${column?._id}-placeholder-card`,
    boardId: 'board-id-01',
    columnId: `${column?._id}`,
    FE_CardNoColumn: true
  }
}