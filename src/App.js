import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { nextQuestion} from "./actions";
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

const App = ({trivia, selectedPlayerIndex}) =>{
  return(
    <div id="container">
        <div className="row">
            <button className="circle-button"><span className="icon icon-list glyphicon glyphicon-info-sign" aria-hidden="true"></span></button>
            <header>
                <h1 id="imagen-arriba"><img src="assets/img/plane.png" id="image"/></h1>
            </header>
            <div className="container">
                <h4><input id="contador-progresivo" type="button" value="0 de 5"/></h4>
                <div className="progress">
                    <div id="porcentaje" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div id="question">
                <div id="intro" className="oculto-intro">
                    <h1>QUIZ</h1>
                    <p>Al final veras los resultados</p>
                    <button className="text-center" onClick="">COMENZAR</button>
                </div>
                <div id="one"><h3>{trivia[0].pregunta}</h3>
                  <button id="Avianca" onClick="clickme(event);">Avianca</button>
                  <button id="KLM" onClick="clickme(event);">KLM</button>
                  <button id="Qantas" onClick="clickme(event);">Qantas</button>
                </div>
            </div>
          <Social/>
        </div>
    </div>
  );
}

const mapToProps = ({trivia, selectedPlayerIndex}) => ({trivia, selectedPlayerIndex});

export default connect(mapToProps)(App);

//export default App;
