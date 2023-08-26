import React from 'react';
import './style.scss';

function Results(props) {
  function next() {
    props.handleApiCall({ url: props.response.data.next });
  }
  function previous() {
    props.handleApiCall({ url: props.response.data.previous });
  }
  return (
    <section className="results">
      {props.loading ? (
        <div>
          <pre className="header">{JSON.stringify({ Headers: props.header }, undefined, 2)}</pre>
          <pre className="data">{JSON.stringify(props.response.data, undefined, 2)}</pre>

          <div className="button-container">
            {props.response.data.previous && <button onClick={previous}>Previous</button>}
            {props.response.data.next && <button onClick={next}>Next</button>}
          </div>
        </div>
      ) : (
        <div className="loading">loading...</div>
      )}
    </section>
  );
}

export default Results;
