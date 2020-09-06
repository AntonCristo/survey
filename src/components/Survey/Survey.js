import React,{ useState,useEffect } from 'react';
import './survey.css';
import Question from './Question/Question';
import Axios from 'axios';
import done from '../../assets/done.svg';

// const Q1 = {
//     question: 'Is it possible to be friends with a Sheep?',
//     answers: {
//         a: 'Yes, they can play catch together',
//         b: 'No, Sheep are not so friendly',
//         c: 'It depends on their culture, not all sheep are what they seem',
//         d: 'Yes, I have a friend who is a sheep'
//     },
//     correct: 'd'
// }

// const Q2 = {
//     question: 'Who is better? a cat or a dog?',
//     answers: {
//         a: 'Dog, totally, cats are evil',
//         b: 'Cat, because I dont worry it will eat my house on a bad day',
//         c: 'Dog, pure goodness and love',
//         d: 'Cat, They are more independent then me!'
//     },
//     correct: 'c'
// }

// const Q3 = {
//     question: 'Where do Zebraz live?',
//     answers: {
//         a: 'Behind bars',
//         b: 'On trees',
//         c: 'African savannas',
//         d: 'Kiryat-Gat'
//     },
//     correct: 'c'
// }



const Survey = props => {

    const [currentQuestionIndex,setCurrentAnswerIndex] = useState(0);
    const [finished,setFinished] = useState(false);
    const [questions,setQuestions] = useState([]);

    const fetchQuestionsOnLoad = () => {
        Axios.get('https://antoncristo-35c8e.firebaseio.com/questions.json')
        .then(res => {
            let temparr = [];
            for(let q in res.data){
                
                //console.log(res.data[q]);
                temparr.push(res.data[q])
            }

            setQuestions(temparr);
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    

    const nextQuestion = () => {
        if(currentQuestionIndex===questions.length-1){
            setFinished(true);
        }
        else{
            setCurrentAnswerIndex(currentQuestionIndex+1);
        }
        
    }

    let surveyStatus = (
        <div className="Survey_container">
            <Question 
                index={currentQuestionIndex} 
                question={questions[currentQuestionIndex]} 
                correctAnswerHandler={nextQuestion}/>
        </div>
    );

    if(finished){
        surveyStatus = (
            <div className="finished">
                <img alt="done" src={done} />
                <h1 style={{border:'1px solid #e1e1e1',backgroundColor:'#fff',padding:'15px 20px',borderRadius:'10px'}} >
                    FINISHED THE SURVEY, THANKS!
                </h1>
            </div>
        )
    }


    
    useEffect(()=>{
        fetchQuestionsOnLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        surveyStatus
    );
}

export default Survey;