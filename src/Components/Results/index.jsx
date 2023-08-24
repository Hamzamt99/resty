import './style.scss';

function Results(props) {
  return (
    <section>
      {props.loading ? (
        props.data ? (
          <div>
            <pre className='header'>{JSON.stringify({ Headers: props.header }, undefined, 2)}</pre>
            <pre  className='data'>{JSON.stringify(props.data, undefined, 2)}</pre>
          </div>
        ) : (
          'loading...'
        )
      ) : null}
    </section>
  );
}

export default Results;
