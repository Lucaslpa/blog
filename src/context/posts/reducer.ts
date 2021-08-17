import { initialState } from '.'
import * as actionTypes from './actionTypes'

export interface actiont {
  type: string
  payload: any
}

export const reducer = (state: initialState, action: actiont) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
