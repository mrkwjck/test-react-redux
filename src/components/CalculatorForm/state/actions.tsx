export const UPDATE_CALCULATOR_SUM = "UPDATE_CALCULATOR_SUM"

export function updateSum(sum: number) {
    return {type: UPDATE_CALCULATOR_SUM, sum}
}