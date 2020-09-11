export function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length;
}
