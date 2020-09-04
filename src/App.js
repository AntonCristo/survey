import React,{ useState } from 'react';
import './App.css';
import StartButton from './components/StartButton/StartButton';
import Survey from './components/Survey/Survey';

function App() {

  const [showSurvey,setShowSurvey] = useState(false);

  const onShowSurveyClickedHandler = () => {
    setShowSurvey(!showSurvey);
  }

  return (
    <div className="App">
      <h1>The Big Animal Survey, Help Me Solve The Mystery</h1>
      { showSurvey ? null : <StartButton clicked={onShowSurveyClickedHandler}>START SURVEY</StartButton>}
      { showSurvey ? <Survey/> : null}
    </div>
  );
}

export default App;
