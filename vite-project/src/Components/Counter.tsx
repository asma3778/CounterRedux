import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset} from "./counterSlice";
import {RootState} from "../store";

const Counter = ()=>{
    const count = useSelector((state: RootState)=> state.counterR.count);
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(increment());
    };

    const handleDecrement = ()=>{
        dispatch(decrement());
    };

    const handlereset = ()=>{
        dispatch(reset());
    };

    return(
        <>
        <h3>Counter: {count} </h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handlereset}>0</button>
        </>
    );
};

export default Counter;
