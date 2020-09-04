import React,{ useState,useRef, useEffect } from 'react';
import './question.css';

const Question = props => {

    //props.correctAnswerHandler function to play next question needs 
    //modifying to handle correct and wrong answers
    const [checkedAnswer,setCheckedAnswer] = useState("");
    const [questionPassed,setQuestionPassed] = useState(false);
    const [questionBackground,setQuestionBackground] = useState('transparent');
    const aRef = useRef(null);
    const bRef = useRef(null);
    const cRef = useRef(null);
    const dRef = useRef(null);

    const getCheckedAnswer = () => {
        if(aRef.current.checked) { setCheckedAnswer('a'); }

        if(bRef.current.checked) { setCheckedAnswer('b'); }

        if(cRef.current.checked) { setCheckedAnswer('c'); }

        if(dRef.current.checked) { setCheckedAnswer('d'); }
    }

    const checkCorrectAnswer = () => {
        if(checkedAnswer===props.question.correct){
            setQuestionPassed(true);
            setQuestionBackground('green');
            setTimeout(()=>{props.correctAnswerHandler()},2000);
        }
        else{
            setQuestionPassed(false);
            setTimeout(()=>{
                setQuestionBackground('red');
            },0);
            setTimeout(()=>{
                setQuestionBackground('transparent');
            },500);
        }
    }

    const { index } = props;
    useEffect(()=>{
            
            setQuestionBackground('transparent');
            setQuestionPassed(false);
            if(aRef.current!==null && bRef.current!==null && cRef.current!==null && dRef.current!==null){
                aRef.current.checked = false;
                bRef.current.checked = false;
                cRef.current.checked = false;
                dRef.current.checked = false;
            }
            
        
    },[index]);

    let correctAnimationText = null;

    if(questionPassed){
        correctAnimationText = (
            <span className="correct_text" >CORRECT ! ! !</span>
        );
    }


    let element = (
        <div style={{backgroundColor:questionBackground}}  className="Question_Container">
        {   props.question ?
            <React.Fragment>
                <div>Question : {props.question.question}</div>
                <div>
                    <label onClick={getCheckedAnswer}>
                        <input ref={aRef} type="radio" value="a" name="answers" />
                        {props.question.answers.a}
                    </label>
                    <label onClick={getCheckedAnswer}>
                        <input ref={bRef} type="radio" value="b" name="answers" />
                        {props.question.answers.b}
                    </label>
                    <label onClick={getCheckedAnswer}>
                        <input ref={cRef} type="radio" value="c" name="answers" />
                        {props.question.answers.c}
                    </label>
                    <label onClick={getCheckedAnswer}>
                        <input ref={dRef} type="radio" value="d" name="answers" />
                        {props.question.answers.d}
                    </label>
                </div>
                <div>
                    <button onClick={checkCorrectAnswer} >Check Correct Answer</button>
                    {correctAnimationText}
                </div>
            </React.Fragment>
            :
            null 
        
        }    
        </div>
    );

    return (element);
}

export default Question;