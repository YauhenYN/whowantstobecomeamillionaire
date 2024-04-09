'use client';

import questions from "@/data/questions";
import { GamesContext } from "@/providers/gamesprovider";
import type Game from "@/types/game";
import { getRandomInt } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const maxQuestionsCount = 15;
export default function Play() {
    const [game, setGame] = useState<Game>((() => {
        let sortedQuestions = [...questions.sort(a => a.complexity)];
        return {
            questions: Array(maxQuestionsCount).fill(0).map((e, i) => {
                const selectedNumber = i + getRandomInt(4) - 2;
                const ind = selectedNumber > 0 ? selectedNumber <= sortedQuestions.length - 1 ? selectedNumber : sortedQuestions.length - 1 : 0
                const returnedQuestion = sortedQuestions[ind];
                sortedQuestions.splice(ind, 1);
                return returnedQuestion;
            }),
            answers: [],
        }
    })());
    const [isClient, setIsClient] = useState(false);
    const { addGame } = useContext(GamesContext)!;

    useEffect(() => {
        setIsClient(true);
    }, [])

    const currentQuestionInd = game.answers.length;
    const currentQuestion = game.questions[currentQuestionInd];

    function checkResult(ind: 0 | 1 | 2 | 3) {
        const newGame = { ...game };
        newGame.answers = [...newGame.answers, ind];
        if (ind != currentQuestion.correctOption) {

            newGame.causeOfGameEnd = "Неверный ответ, конец игры";
            addGame(newGame);
        }
        else if (ind == currentQuestion.correctOption && currentQuestionInd >= maxQuestionsCount - 1) {
            newGame.causeOfGameEnd = "Вы победили"
            addGame(newGame);
        }
        setGame(newGame);
    }
    return (
        <>
            <div className="bg-blue-200 rounded-md overflow-hidden relative h-[750px] w-[400px] flex flex-col items-center justify-center">
                <div className="absolute left-0 top-0 w-full h-full ">
                    <Image src="/whowantstobecomeamillionaire/galaxy.jpg" alt="Galaxy" fill className="object-center object-cover"></Image>
                </div>
                <div className="z-[1] flex flex-col items-center py-[50px] px-[20px]">
                    {!game.causeOfGameEnd ?
                        <>
                            {isClient &&
                                <>
                                    <h1 className="text-[22px] font-bold tracking-[3px]">Вопрос {currentQuestionInd + 1}</h1>
                                    <div className="text-[18px] font-semibold text-center mt-[20px]">{currentQuestion.question}</div>
                                    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px] mt-[20px]">
                                        <div onClick={() => checkResult(0)} className="break-words text-center cursor-pointer bg-blue-950 hover:bg-blue-900 px-[18px] py-[10px] rounded-md uppercase text-[14px] font-bold flex justify-center items-center">{currentQuestion.options[0]}</div>
                                        <div onClick={() => checkResult(1)} className="break-words text-center cursor-pointer bg-blue-950 hover:bg-blue-900 px-[18px] py-[10px] rounded-md uppercase text-[14px] font-bold flex justify-center items-center">{currentQuestion.options[1]}</div>
                                        <div onClick={() => checkResult(2)} className="break-words text-center cursor-pointer bg-blue-950 hover:bg-blue-900 px-[18px] py-[10px] rounded-md uppercase text-[14px] font-bold flex justify-center items-center">{currentQuestion.options[2]}</div>
                                        <div onClick={() => checkResult(3)} className="break-words text-center cursor-pointer bg-blue-950 hover:bg-blue-900 px-[18px] py-[10px] rounded-md uppercase text-[14px] font-bold flex justify-center items-center">{currentQuestion.options[3]}</div>
                                    </div>
                                </>
                            }
                        </> :
                        <div className="h-full w-full flex flex-col items-center justify-center absolute top-0">
                            <div className="text-[24px] font-bold">{game.causeOfGameEnd}</div>
                            <Link href="/" className="bg-blue-950 hover:bg-blue-900 px-[20px] py-[12px] rounded-md uppercase text-[16px] font-bold flex justify-center items-center mt-[20px]">На главную</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
