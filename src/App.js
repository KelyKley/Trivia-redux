import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { nextQuestion} from "./actions";
import './view.css';

const App = () =>{
  return(
    <div id="contenedor">
      <div class="container-fluid">
        <div class="row">
            <button class="circle-button"><span class="icon icon-list glyphicon glyphicon-info-sign" aria-hidden="true"></span></button>
            <header>
                <h1 id="imagen-arriba"><img src="assets/img/plane.png" id="image"/></h1>
            </header>
            <div class="container">
                <h4><input id="contador-progresivo" type="button" value="0 de 5"/></h4>
                <div class="progress">
                    <div id="porcentaje" class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
            <div id="container">
                <div id="intro" class="oculto-intro">
                    <h1>QUIZ</h1>
                    <p>Al final veras los resultados</p>
                    <button class="text-center" onclick="comenzar();">COMENZAR</button>
                </div>
            <div id="one"><h3>¿Cuál es la aerolínea más antigua del mundo?</h3><button id="Avianca" onclick="clickme(event);">Avianca</button><button id="KLM" onclick="clickme(event);">KLM</button><button id="Qantas" onclick="clickme(event);">Qantas</button></div></div>
            <div class="col-md-12 text-center">
                <ul class="social-network social-circle">
                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
}

const mapToProps = ({trivia, selectedPlayerIndex}) => ({trivia, selectedPlayerIndex});

export default connect(mapToProps)(App);

//export default App;
