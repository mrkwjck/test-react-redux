import { CalculatorStateType } from "./reducer";

export const CALCULATOR_STORE_KEY = "calculator"
export const SUM_STORE_KEY = "sum"

export function selectSum(state: CalculatorStateType) {
    return state.sum
}