import store from './store';

export const nextQuestion = (respuesta, index) => {
    store.setState({
        selectedTriviaIndex: index+1
    })

    const cloneList = [...store.getState().trivia];
    cloneList[index].tuRespuesta = respuesta;

    store.setState({
        trivia: cloneList
    })
};
