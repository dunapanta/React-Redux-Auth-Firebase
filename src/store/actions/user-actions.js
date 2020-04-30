export const setCurrentRegister = event => {
    return {
        type: "SET_CURRENT_REGISTER",
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    }
};

export const setCurrentLogin = event => {
    return {
        type: "SET_CURRENT_LOGIN",
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    }
};
