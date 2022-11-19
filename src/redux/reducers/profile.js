import { ActionType } from "redux-promise-middleware";
import { ACTION_STRING } from "../actions/actionStrings";

const initialState = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    profile: [],
};

const profileReducer = (prevState = initialState, { type, payload }) => {
    const { Pending, Rejected, Fulfilled } = ActionType;
    const { dataProfile, editProfile } = ACTION_STRING;
    switch (type) {
        case dataProfile.concat("_", Pending):
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case dataProfile.concat("_", Rejected):
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isFulfilled: false,
                error: payload.error.message,
            };
        case dataProfile.concat("_", Fulfilled):
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                profile: payload.data.data
            };
        case editProfile.concat("_", Pending):
            return {
                ...prevState,
                isLoading: true,
                isError: false,
                isFulfilled: false,
            };
        case editProfile.concat("_", Rejected):
            return {
                ...prevState,
                isLoading: false,
                isError: true,
                isFulfilled: false,
                error: payload.error.message,
            };
        case editProfile.concat("_", Fulfilled):
            return {
                ...prevState,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                profile: payload.data.data
            };
        default:
            return prevState;
    }
};

export default profileReducer;