import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSum } from "./state/selectors";
import { updateSum } from "./state/actions";
import { RootStateType } from "../../infrastructure/state/RootStateType";

export function CalculatorForm() {

    const [addend1, setAddend1] = useState(0)
    const [addend2, setAddend2] = useState(0)

    const sum = useSelector<RootStateType, number>(state => selectSum(state.calculator))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateSum(addend1 + addend2))
    }, [addend1, addend2])

    return(
        <div className="form">
            <form>
                <label>
                    <span>Addend 1</span>
                    <input type="text" onChange={event => setAddend1(parseInt(event.target.value))}/>
                </label>
                <label>
                    <span>Addend 2</span>
                    <input type="text" onChange={event => setAddend2(parseInt(event.target.value))}/>
                </label>
                <p>Sum: {sum}</p>
            </form>
        </div>
    )
}