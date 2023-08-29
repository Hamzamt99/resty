'use strict'

import React, { useState } from "react"
import './style.css'
export default function History({ state }) {
    const [selectedHistory, setSelectedHistory] = useState([]); // Local state for selectedHistory

    const historyHandler = (url) => {
        const historyData = state.history.filter(item => item.requestParams.url === url)
        setSelectedHistory(historyData); // Update local state
    }

    return (
        <div>
            <h1>History</h1>
            {
                state.history && state.history.map(item => (
                    <div key={item.requestParams.url}>
                        <button onClick={() => historyHandler(item.requestParams.url)}>
                            {item.requestParams.method} {item.requestParams.url}
                        </button>
                    </div>
                ))
            }
            <pre>{JSON.stringify(selectedHistory, undefined, 2)}</pre>
        </div>
    )
}
