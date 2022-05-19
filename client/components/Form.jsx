import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../src/context.js';


const Form = () => {

  const [formText, setFormText] = useState('');
  const { answerList, setAnswerList } = useContext(AppContext);


  const handleSubmit = () => {
    let temp = formText;
    axios.post('/sendQuestion', { formText })
      .then((data) => {
        console.log(data.data.choices)
        setAnswerList([...answerList, [temp, data.data.choices]])
      })
      .catch((err) => console.error('failed in front end', err))
    // setAnswerList([...answerList, formText]);
    setFormText('');
  }

  return (
    <div className='form'>
      <span className='title'>ShopifAI</span>
      <br></br>
      <div className='input-area' >Enter Prompt
        <textarea rows='10' cols='70' value={formText} type='text' height='50px' width='50px' onChange={() => setFormText(event.target.value)}></textarea></div>
      <button className='submit-button' onClick={() => handleSubmit()}>Submit</button>



    </div>

  )
}

export default Form;