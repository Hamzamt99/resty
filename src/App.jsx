import React, { useEffect, useReducer } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History/History';
import axios from 'axios';
import { TYPES } from './Components/Reducer/reducerTypes'
import { INITIAL_STATES, reducerHandler } from './Components/Reducer/Reducer'
function App() {

  const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATES)

  // re render the page everytime the response update

  const callApi = (requestParams) => {
    dispatch({ type: TYPES.requestParams, payload: requestParams })
    if (requestParams.method === 'post') {
      axios.post(requestParams.url, requestParams.data).then(item => {
        dispatch({ type: TYPES.method, payload: { item, requestParams } })

      })

    }
    else if (requestParams.method === 'put') {
      axios.put(`${requestParams.url}/update/${id}`, data).then(item => {
        dispatch({ type: TYPES.method, payload: { item, requestParams } })
      })
    }
    else if (requestParams.method === 'delete') {
      axios.delete(`${requestParams.url}/delete/${id}`).then(item => {
        dispatch({ type: TYPES.method, payload: { item, requestParams } })

      })
    } else {
      dispatch({ type: TYPES.loading })
      dispatch({ type: 'show' })
      setTimeout(() => {
        axios.get(requestParams.url).then(item => {
          const contentType = item.headers;
          dispatch({ type: TYPES.header, payload: contentType })
          dispatch({ type: TYPES.notLoading })
          dispatch({ type: TYPES.method, payload: { item, requestParams } })

        })
      }, 1000)
    }
  }

  useEffect(() => {
    if (state.method && state.url) {
      callApi(state);
    }
  }, [state]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {
        state.show &&
        <Results state={state} handleApiCall={callApi} />
      }
      <History state={state} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
