/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, configureStore, Middleware, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import postsReducer from './postsSlice'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

const logger: Middleware = (storeApi) => (next) => (action) => {
  const prevState = storeApi.getState()
  const result = next(action)
  const nextState = storeApi.getState()

  console.groupCollapsed(action)
  console.log('prev state', prevState)
  console.log('action', action)
  console.log('next state', nextState)
  console.groupEnd()
  return result
}

const store = configureStore({
  reducer: {
    counterStorage: counterReducer,
    postsStorage: postsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store