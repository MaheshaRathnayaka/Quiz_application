import React, { useEffect, useState } from 'react'
import Questions from './Questions.js';

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion.js';
import { PushAnswer } from '../hooks/SetResult.js';

//redux store import
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Quiz() {

  const [check, setChecked] =useState(undefined)

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions); //define trace and state
  const dispatch = useDispatch();

  //useEffect(() => {
    //console.log(result)
  //})
//event handler - Next btn
  function onNext(){
    //console.log("On Next click")
    if( trace < queue.length){ //Stop trace value updating when trace >10(can see in the console)
      //update the trace value by one using MoveNextAction
      dispatch(MoveNextQuestion());
      // insert a new result in the array
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
      }

    }

    //reset the value of the checked variable
    setChecked(undefined)
    
  }
//event handler - Prev btn
  function onPrev(){
    //console.log("On onPrev click")
    if (trace > 0 ){// when get trace value less than 0 it displays nothing. to avoid this use this if function
    //decreace the trace value by one using MovePrevAction
      dispatch(MovePrevQuestion());}
  }

  function onChecked(check){
    //console.log(check)
    setChecked(check)
  }

  //finished the exam after the last question
  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>

  }
  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz Application </h1>

      {/*display qusetions*/}
       <Questions onChecked={onChecked}> </Questions>
      <div className='grid'>
        { trace > 0 ? <button className='btn prev' onClick ={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>


      </div>
    </div>
  )
}
