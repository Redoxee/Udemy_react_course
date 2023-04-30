import { useReducer } from "react";
import Button from "./Button";
import Panel from "./Panel";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const UPDATE_VALUE_TO_ADD = 'update-value-to-add';
const ADD_VALUE = 'add-value';

function Counter({initialCount}) {

    const reducer = (state, {type, payload}) => {
        if (type === INCREMENT){
            return {
                ...state,
                count: state.count + 1
            }
        }

        if (type === DECREMENT){
            return {
                ...state,
                count: state.count - 1
            }
        }

        if (type === UPDATE_VALUE_TO_ADD) {
            return {
                ...state,
                valueToAdd: payload
            }
        }

        if (type === ADD_VALUE) {
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        }

        return state;
    }

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });
    
    const increment = ()=>dispatch({type: INCREMENT});
    const decrement = ()=>dispatch({type:DECREMENT});

    const handleAddValueChange = (event) => {
        const value = Number(event.target.value);
        if (!isNaN(value))
        {
            dispatch({type:UPDATE_VALUE_TO_ADD, payload: value});
        }
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        dispatch({type:ADD_VALUE});
    };

    return <Panel className="m-3">
        <h1 className="text-lg">Counter : {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment} primary rounded>Increment</Button>
            <Button onClick={decrement} secondary rounded>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add many</label>
            <input type="number" onChange={handleAddValueChange} className="p-1 m-3 bg-gray-50 border border-gray-300" value={state.valueToAdd || ""}/>
            <Button primary>Add</Button>
        </form>
    </Panel>;
}

export default Counter;