import { UPDATE_CALCULATOR_SUM } from "./actions";
import { SUM_STORE_KEY } from "./selectors";
import { AnyAction } from "redux";

export type CalculatorStateType = {
    sum: number
}

const initialState: CalculatorStateType = {
    sum: 0
}
export function calculatorReducer(state: CalculatorStateType = initialState, action: AnyAction): CalculatorStateType {
    switch (action.type) {
        case UPDATE_CALCULATOR_SUM:
            return {
                ...state,
                [SUM_STORE_KEY]: action.sum
            }
    }
    return state
}