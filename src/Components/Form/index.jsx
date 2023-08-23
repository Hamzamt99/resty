import { useState } from 'react';
import './Form.scss';

function Form(props) {

  const [value, setvalue] = useState('get')

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: value,
      url: e.target.url.value,
      data: e.target.text.value
    };
    
    props.handleApiCall(formData);
  }
  const checkMethod = e => {
    return setvalue(e.target.id)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={checkMethod}>GET</span>
          <span id="post" onClick={checkMethod}>POST</span>
          <span id="put" onClick={checkMethod}>PUT</span>
          <span id="delete" onClick={checkMethod}>DELETE</span>
        </label>
        <textarea name='text'></textarea>
      </form>
    </>
  );

}


export default Form;