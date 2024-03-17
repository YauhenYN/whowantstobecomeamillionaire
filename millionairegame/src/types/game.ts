import Question from "./question";

export default interface Game {
    questions: Question[];
    answers: number[];
    causeOfGameEnd?: string;
}