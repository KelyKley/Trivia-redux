import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { nextQuestion, selectTrivia} from "./actions";
import './view.css';

const Social = () => {
  return(
    <div className="col-md-12 text-center">
    <ul className="social-network social-circle">
        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
    </ul>
</div>
  );
}

const Options =({option, selectedTriviaIndex, nextQuestion})=>{
  console.log("option:"+option)
  let list = option.map((element, index)=>{
    return (
      <button key={index} onClick={nextQuestion}>{element}</button>
    )
  })
  return (
    <div>
        {list}
    </div>
  )
}

const App = ({trivia, selectedTriviaIndex}) =>{
  console.log(trivia);
  return(
    <div id="container">
        <div className="row">
          <button className="circle-button"><span className="icon icon-list glyphicon glyphicon-info-sign" aria-hidden="true"></span></button>
            <header>
                <h1 id="imagen-arriba"><img src={trivia[selectedTriviaIndex].srcImg} id="image"/></h1>
            </header>
            <div className="container">
                <h4><input id="contador-progresivo" type="button" value="0 de 5"/></h4>
                <div className="progress">
                    <div id="porcentaje" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div id="question">
                <div id="one"><h3>{trivia[selectedTriviaIndex].pregunta}</h3>
                    <Options
                       option={trivia[selectedTriviaIndex].opciones}
                       selectedTriviaIndex={selectedTriviaIndex}
                       nextQuestion={(e) => nextQuestion (e, selectedTriviaIndex) } />
                </div>
            </div>
          <Social/>
        </div>
    </div>
  );
}

const mapToProps = ({trivia, selectedTriviaIndex}) => ({trivia, selectedTriviaIndex});

export default connect(mapToProps)(App);

//export default App;
