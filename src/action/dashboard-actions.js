import axios from "axios";
import { GET_MOBILE_LIST, SET_SELECTED_MOBILE } from "./constants";
import { dispatchCall } from "../helpers/action-helpers";

export const getAllMobileDetails = () => dispatch => {
    axios.get("http://localhost:8080/listAllMobiles")
        .then(resp => {
            dispatchCall(GET_MOBILE_LIST, resp.data, dispatch);
        })
};

export const setSelectedMobile = mobile => dispatch => {
    dispatchCall(SET_SELECTED_MOBILE, mobile, dispatch);
};