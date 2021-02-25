import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount} from "./redux/counterSlice";

const Counter = () => {

    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
      <div style={{
          textAlign: "center"
      }}>
          <h3>Counter</h3>
          <h4>The count is: { count }</h4>
          <button onClick={() => dispatch(increment())}> Increment</button>
          <button onClick={() => dispatch(decrement())}> Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(33))}> Increment by 33 </button>
      </div>
    );
};

export default Counter
