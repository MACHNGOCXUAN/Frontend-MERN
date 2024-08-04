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

export const updateOrderedColumnIds = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)

  return response.data
}

export const updateOrderedCard = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)

  return response.data
}