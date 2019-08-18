import { GET_MOBILE_LIST, SET_SELECTED_MOBILE } from "../action/constants";

const initialState = {
    mobileList: [],
    selectedMobile: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MOBILE_LIST:
            return { ...state, mobileList: action.payload };
        case SET_SELECTED_MOBILE:
            return { ...state, selectedMobile: action.payload };
        default:
            return state;
    }
};