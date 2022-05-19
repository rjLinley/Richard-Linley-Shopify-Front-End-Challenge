import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '../src/context.js';

const List = () => {

  const { answerList, setAnswerList } = useContext(AppContext);
  console.log(answerList)



  return (

    <div className='list-area'> <span className='responses'>Responses</span>
      <br></br>
      {answerList?.reverse().map((answer, index) => (
        <div className='answer-item' key={index}> Prompt: {answer[0]}
          <br></br>
          <br></br>
          Response: {answer[1][0].text}</div>
      ))}
    </div>

  )
}

export default List;