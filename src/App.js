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
                    <div id="porcentaje" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
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
const YourAnswer = () => {
  return (
    <div class="container text-center">
            <div class="row justify-content-xl-center ">
                <div id="imagen" class="col col-xl-12"><img src="assets/img/terminaste.gif" class="img-fluid"></div>
            </div>
            <div id="cuestionario">
                <div id="progresos"><div class="progress">            <div class="progress-bar" role="progressbar" style="width: 100%; height: 7px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>            </div></div>
                <div id="titulos"><h2>Tus Respuestas son: </h2></div>
                <div id="selecciona"><div class="div-pregunta-respuesta"><p class="parrafoPregunta">1. JQuery es: :</p><p class="parrafoRespuesta"><strong> Es una libreria de javascript</strong></p></div><div class="div-pregunta-respuesta"><p class="parrafoPregunta">2. Quien es Marissa Meyers:</p><p class="parrafoRespuesta"><strong> Es una atleta reconocida mundialmente</strong></p></div><div class="div-pregunta-respuesta"><p class="parrafoPregunta">3. ¿Cual fue el primer lenguaje de Programación?:</p><p class="parrafoRespuesta"><strong> FORTRAN </strong></p></div><div class="div-pregunta-respuesta"><p class="parrafoPregunta">4. ¿Quienes son Larry Page y Sergey Brin?:</p><p class="parrafoRespuesta"><strong> Compañeros Mark Zuckerberg</strong></p></div><div class="div-pregunta-respuesta"><p class="parrafoPregunta">5. ¿Qué año se creo facebook?:</p><p class="parrafoRespuesta"><strong> 10 marzo 2001</strong></p></div></div>
                <div id="botoncito"><div><button id="resolver">Resolver</button></div></div>
            </div>
        </div>
    </div>
  )
}

const mapToProps = ({trivia, selectedTriviaIndex}) => ({trivia, selectedTriviaIndex});

export default connect(mapToProps)(App);

//export default App;
