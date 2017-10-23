import store from './store';

export const nextQuestion = (e, index) => {
    let respuesta = e.target.textContent;
    let next = index + 1;
    store.setState({
        selectedTriviaIndex: next
    })

    const cloneList = [...store.getState().trivia];
    cloneList[index].turespuesta = respuesta;

    store.setState({
        trivia: cloneList
    })

};
