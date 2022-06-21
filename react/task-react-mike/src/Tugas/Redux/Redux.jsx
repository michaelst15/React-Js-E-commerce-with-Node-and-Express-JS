import { useDispatch, useSelector } from "react-redux";
import { dicrement, increment } from "../app/Counter/action";

const Redux = () => {
let {count} = useSelector(state => state.counter) 
const dispatch = useDispatch();
    return (            
    <div>
        <button onClick={() => dispatch(dicrement(1))}>-</button> 
        {''} <span>{count}</span> {''}
        <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
    )
}

export default Redux;