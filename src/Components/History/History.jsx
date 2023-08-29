'use strict'

import React from "react"

export default function History({ state, setState }) {
    const historyHandler = (url) => {
        const historyData = state.history.filter(item => item.requestParams.url === url)
        setState({ ...state, selectedHistory: historyData })
    }

    return (
        <div>
            {
                state.history && state.history.map(item => (
                    <div key={item.requestParams.url}>
                        <button onClick={() => historyHandler(item.requestParams.url)}>
                            {item.requestParams.method} {item.requestParams.url}
                        </button>
                    </div>
                ))
            }
            <pre>{JSON.stringify(state.selectedHistory, undefined, 2)}</pre>
        </div>
    )
}
