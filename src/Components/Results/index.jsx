import './style.scss'
function Results(props) {
  return (
    <section>
      {
        props.loading ?
          (props.data ? <pre>{JSON.stringify(props.data, undefined, 2)}</pre> : 'loading...') :
          null
      }
    </section>
  );
}

export default Results;