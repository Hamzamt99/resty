export const INITIAL_STATES = {
    response: {},
    header: {},
    loading: false,
    show: false,
    state: {}
}

export const reducerHandler = (state, action) => {
    switch (action.type) {
        case 'method':
            return {
                ...state,
                response: action.payload
            }
        case 'notLoading':
            return {
                ...state,
                loading: true
            }
        case 'loading':
            return {
                ...state,
                loading: false
            }
        case 'header':
            return {
                ...state,
                header: action.payload
            }
        case 'show':
            return {
                ...state,
                show: true
            }
    }
}