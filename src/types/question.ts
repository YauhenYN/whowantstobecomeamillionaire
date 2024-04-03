export default interface Question {
    question: string;
    options: [string, string, string, string];
    correctOption: 0 | 1 | 2 | 3;
    complexity: number;
}