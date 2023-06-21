import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        console.log('Пост успешно создан:', response.data);
        setTitle('');
        setBody('');
        navigate('/posts');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Содержание:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}

export default CreatePost;