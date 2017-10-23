import store from './store';

export const nextQuestion = (index, respuesta) => {
    const cloneList = [...store.getState().trivia];
    cloneList[index].tuRespuesta = respuesta;

    store.setState({
        trivia: cloneList
    })
};