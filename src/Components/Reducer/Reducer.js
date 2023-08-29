export const INITIAL_STATES = {
    response: {},
    header: {},
    loading: false,
    show: false,
    state: {},
    requestParams: {},
    history: [],

}

export const reducerHandler = (state, action) => {
    switch (action.type) {
        case 'method':
            return {
                ...state,
                response: action.payload,
                history: [...state.history, action.payload]
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
        case 'requestParams':
            return {
                ...state,
                requestParams: action.payload,
                // history: [...state.history, action.payload]
            }
    }
}