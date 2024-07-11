import CounterThunk from '../reduxThunk/CounterThunk/CounterThunk'
import PostsThunk from '../reduxThunk/PostsThunk/PostsThunk'
import storeThunk from '../reduxThunk/redux/store'
import storeSaga from '../reduxSaga/redux/store'
import './App.css'
import { Provider } from 'react-redux'
import CounterSaga from '../reduxSaga/CounterSaga/CounterSaga'
import PostsSaga from '../reduxSaga/PostsSaga/PostsSaga'

const App = () => {
  return (
    <>
      <h1 className="text-center">Redux Thunk</h1>
      <Provider store={storeThunk}>
        <CounterThunk />
        <PostsThunk />
      </Provider>

      <h1 className="text-center">Redux Saga</h1>
      <Provider store={storeSaga}>
        <CounterSaga />
        <PostsSaga />
      </Provider>
    </>
  )
}

export default App