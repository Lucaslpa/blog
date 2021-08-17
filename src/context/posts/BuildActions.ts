import { post } from '../../pages/api/Posts'
import * as actionTypes from './actionTypes'

type Dispatch = (action: { type: string; payload?: any }) => any


export const buildActions = (dispatch: Dispatch) => ({
  setPosts: (posts: typeof post[]) => dispatch({ type: actionTypes.SET_POSTS, payload: posts }),
})
