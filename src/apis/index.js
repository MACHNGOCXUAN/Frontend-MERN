import axios from 'axios'
import { API_ROOT } from '~/utils/constants'


export const fetchBoardDetailAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)

  return response.data
}

export const createNewColumn = async ( dataNewColumn ) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, dataNewColumn)

  return response.data
}

export const createNewCard = async ( dataNewCard ) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, dataNewCard)

  return response.data
}