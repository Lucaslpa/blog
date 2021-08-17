import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'
import { post } from '../../pages/api/Posts'
// eslint-disable-next-line import/no-cycle
import { actiont, reducer } from './reducer'



export interface initialState {
  posts: typeof post[]
}

export interface InitialContext {
  state: initialState
  dispatch: Dispatch<actiont>
}

const initialState: initialState = {
  posts: [],
}
const Context = createContext([] as any)

export const PostsContext = ({ children }: { children: ReactNode }) => (
  <Context.Provider value={[...useReducer(reducer, initialState)]}>
    {children}
  </Context.Provider>
)

export const usePostsContext = () => {
  const context = useContext(Context)
  return { state: context[0], dispatch: context[1] }
}
