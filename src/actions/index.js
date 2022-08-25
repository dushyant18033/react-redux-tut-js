export const increment = (value) => {
    return {
        type: 'INCREMENT',
        value: value
    }
};

export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        value: value
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
};

export const setValue = (value) => {
    return {
        type: 'SET_VALUE',
        value: value
    }
};

export const login = () => {
    return {
        type: 'LOGIN'
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};

// action creators