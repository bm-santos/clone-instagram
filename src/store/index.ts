import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerStories from './ducks/stories'
import reducerUser from './ducks/user'
import reducerPosts from './ducks/posts'

const createRootReducer = () => combineReducers({
  stories: reducerStories,
  user: reducerUser,
  posts: reducerPosts
})

const store = createStore(
  createRootReducer(),
  composeWithDevTools()
)

export { store }