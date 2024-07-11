import { configureStore, Middleware } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import postsReducer from './postsSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './slicesSagas'

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

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counterStorage: counterReducer,
    postsStorage: postsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware, logger),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store