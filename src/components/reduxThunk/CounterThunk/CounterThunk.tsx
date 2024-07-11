import { useSelector } from 'react-redux'
import { incrementAsync, decrementAsync } from '../redux/counterSlice.ts'
import { RootState, useAppDispatch } from '../redux/store.ts'

const CounterThunk = () => {
  const count = useSelector((state: RootState) => state.counterStorage.count)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>Count: {count}</h1>
          <button onClick={() => dispatch(incrementAsync())}>Increment</button>
          <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
        </div>
      </div>


    </>
  )
}

export default CounterThunk