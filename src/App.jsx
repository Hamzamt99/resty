import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState('')
  const [header, setHeader] = useState()
  const [loading, isLoading] = useState(false)
  const [state, setState] = useState({
    data: null,
    requestParams: {},
  }
  )
  const callApi = (requestParams) => {
    if (requestParams.method === 'get') {
      axios.get(requestParams.url).then(item => {
        setState(requestParams)
        setResponse(item)
        const contentType = item.headers;
  
        setHeader(contentType)
      })
    }
    if (requestParams.method === 'post') {
      axios.post(requestParams.url, requestParams.data).then(item => {
        setResponse(item)
      })

    }
    else if (requestParams.method === 'put') {
      axios.put(`${requestParams.url}/update/${id}`, data).then(item => {
        setResponse((`${item.id} has been updated`))
      })
    }
    else if (requestParams.method === 'delete') {
      axios.delete(`${requestParams.url}/delete/${id}`).then(item => {
        setResponse(`${item.id} has been deleted`)
      })
    }

    // mock output
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.method}</div>
      <div>URL: {state.url}</div>
      <Form handleApiCall={callApi} loading={isLoading} />
      <Results data={response} header={header} loading={isLoading} />
      <Footer />
    </React.Fragment>
  );

}

export default App;