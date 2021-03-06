import createStore from 'redux-zero';

let TRIVIA = [{
            pregunta: "¿Cual fue el primer lenguaje de Programación?",
            opciones: ['tarjetas Perforadas / ADA', 'dev c++', 'FORTRAN ', 'Cobol'],
            srcImg: './img/lenguajeProgramacion.jpg',
            rptaCorrecta: 'tarjetas Perforadas / ADA',
            turespuesta: undefined,
            progressBar: 20
        },
        {
            pregunta: "JQuery es: ",
            opciones: [
                'Es un framework de javaScript',
                'Es un IDE',
                'Es una libreria de javascript',
                'Es una API'
            ],
            srcImg: './img/jquery.gif',
            rptaCorrecta: 'Es una libreria de javascript',
            turespuesta: undefined,
            progressBar: 40
        },
        {
            pregunta: "¿Quienes son Larry Page y Sergey Brin?",
            opciones: [
                'Los creadores del motor de Google',
                'Ganadores del premio novel de la paz',
                'Compañeros Mark Zuckerberg',
                'Fundadores de Amazon'
            ],
            srcImg: './img/fundadoresGoogle.jpg',
            rptaCorrecta: 'Los creadores del motor de Google',
            turespuesta: undefined,
            progressBar: 60
        },
        {
            pregunta: "¿Qué año se creo facebook?",
            opciones: [
                'En febrero de 2004',
                'entre 2008 - 2010',
                '10 marzo 2001',
                '2005'
            ],
            srcImg: './img/facebook.png',
            rptaCorrecta: 'En febrero de 2004',
            turespuesta: undefined,
            progressBar: 80
        },
        {
            pregunta: "Quien es Marissa Meyers",
            opciones: [
                'CEO de Yahoo!, y quien logro triplicar su valor.',
                'No fue la primera ingeniera mujer del equipo de GOOGLE',
                'Es una atleta reconocida mundialmente',
                'Es una modelo de la revista'
            ],
            srcImg: './img/marissa.jpg',
            rptaCorrecta: 'CEO de Yahoo!, y quien logro triplicar su valor.',
            turespuesta: undefined,
            progressBar: 100
        }
    ];
const initialState = {
	trivia: TRIVIA,
	selectedTriviaIndex: 0
};

const store = createStore(initialState);

export default store;