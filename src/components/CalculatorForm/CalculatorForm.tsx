import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSum } from "./state/selectors";
import { updateSum } from "./state/actions";
import { RootStateType } from "../../infrastructure/state/RootStateType";
import "./CalculatorForm.scss"

export function CalculatorForm() {

    const [addend1, setAddend1] = useState(0)
    const [addend2, setAddend2] = useState(0)

    const sum = useSelector<RootStateType, number>(state => selectSum(state.calculator))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateSum(addend1 + addend2))
    }, [addend1, addend2])

    return(
        <div className="form col-lg-3 col-md-6 col-sm-12">
            <form>
                <label>
                    <span className="label">Addend 1</span>
                    <input type="text" onChange={event => setAddend1(parseInt(event.target.value))}/>
                </label>
                <label>
                    <span className="label">Addend 2</span>
                    <input type="text" onChange={event => setAddend2(parseInt(event.target.value))}/>
                </label>
                <p className="outcome">
                    <span className="label">Sum</span>
                    <span className="result">{sum}</span>
                </p>
            </form>
        </div>
    )
}