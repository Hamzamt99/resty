import React from 'react';
import './style.scss';

function Results(props) {
  // console.log(props.state.response);
  // console.log(props.state);
  return (
    <section className="results">
      {props.state.loading ? (
        props.state.response.item.data ? (
          <div>
            <pre className="header">{JSON.stringify({ Headers: props.state.header }, undefined, 2)}</pre>
            <pre className="data">{JSON.stringify(props.state.response.item.data, undefined, 2)}</pre>

            <div className="button-container">
              {props.state.response.item.data.previous && (
                <button
                  onClick={() => {
                    props.handleApiCall({ url: props.state.response.item.data.previous });
                  }}
                >
                  Previous
                </button>
              )}
              {props.state.response.item.data.next && (
                <button
                  onClick={() => {
                    props.handleApiCall({ url: props.state.response.item.data.next });
                  }}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>Data still fetching...</div>
        )
      ) : (
        <div className="loading">loading...</div>
      )}
    </section>
  );
}

export default Results;
