export const dispatchCall = (typeConstant, value, dispatch) => {
    dispatch ({
        type: typeConstant,
        payload: value
    });
}