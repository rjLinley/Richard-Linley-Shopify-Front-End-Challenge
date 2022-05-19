import React, { useState, useEffect, useContext } from 'react';
import Form from '../components/Form';
import List from '../components/List';

import { AppContext } from './context';

const AppProvider = (props) => {
  const [answerList, setAnswerList] = useState([]);

  return (
    <AppContext.Provider value={{
      answerList, setAnswerList
    }}>
      {props.children}
    </AppContext.Provider>
  )
}


const App = () => {
  return (
    <AppProvider>
      <div className='main'>


        <Form />
        <List />
      </div>
    </AppProvider>

  )
}

export default App;