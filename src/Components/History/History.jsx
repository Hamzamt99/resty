'use strict'

import React, { useReducer } from 'react';
import { INITIAL_STATES, reducerHandler } from '../Reducer/Reducer'
import './style.css'

export default function History(props) {

    const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATES)

    const historyHandler = (url) => {
        const historyData = props.state.history.filter(item => item.requestParams.url === url)
        dispatch({ type: 'data', payload: historyData });
    }
    return (
        <div>
            <h1>History</h1>
            {
                props.state.history && props.state.history.map(item => (
                    <div key={item.requestParams.url}>
                        <button onClick={() => historyHandler(item.requestParams.url)}>
                            {item.requestParams.method} {item.requestParams.url}
                        </button>
                    </div>
                ))
            }
            <pre>{JSON.stringify(state.historyData, undefined, 2)}</pre>
        </div>
    )
}
