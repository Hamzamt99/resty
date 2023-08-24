import React, { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [value, setvalue] = useState('get');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: value,
      url: e.target.url.value,
      data: e.target.text.value,
    };

    props.handleApiCall(formData);
  };

  const checkMethod = (e) => {
    setvalue(e.target.id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            id="get"
            onClick={checkMethod}
            className={value === 'get' ? 'active' : ''}
          >
            GET
          </span>
          <span
            id="post"
            onClick={checkMethod}
            className={value === 'post' ? 'active' : ''}
          >
            POST
          </span>
          <span
            id="put"
            onClick={checkMethod}
            className={value === 'put' ? 'active' : ''}
          >
            PUT
          </span>
          <span
            id="delete"
            onClick={checkMethod}
            className={value === 'delete' ? 'active' : ''}
          >
            DELETE
          </span>
        </label>
        <textarea name="text"></textarea>
      </form>
    </>
  );
}

export default Form;
