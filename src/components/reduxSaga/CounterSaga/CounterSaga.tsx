import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reduxThunk/redux/store.ts'
import { decrement, decrementAsync, increment, incrementAsync } from '../redux/counterSlice.ts'


const Counter = () => {
  const count = useSelector((state: RootState) => state.counterStorage.count)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>Count: {count}</h1>
          <p>функції до генераторів, а звідти потім до redux slice (асинхронна)</p>
          <button onClick={() => dispatch(incrementAsync())}>Increment</button>
          <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
          <p>функції напряму до redux slice, без передачі даних до генераторів</p>
          <button onClick={() => dispatch(increment(1))}>Increment</button>
          <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        </div>
      </div>


    </>
  )
}

export default Counter