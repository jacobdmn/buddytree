import axios from 'axios'
import { UPCOMING_HANGOUTS_API } from '../secret'

export const fetchApi = async () => {
  const { data } = await axios(UPCOMING_HANGOUTS_API)
  return data
}
