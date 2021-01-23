import React from 'react';
import style from "./FillOrderQuestions.module.scss"
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getQuestionsSelector} from "./FillOrderQuestionsSelectors";
import {Question} from "./Question/Question";

export let FillOrderQuestions = () => {
    return <div className={style.FillOrderQuestions}>
        <div className={style.questionsContainer}>
            <Typography variant={'h3'}>Заполнение брифа</Typography>
            <Questions/>
        </div>
    </div>
};

export let Questions = () => {
    let questions = useSelector(getQuestionsSelector);

    let questionsComponents = questions.map((question, index: number) => <Question
            key={question.idQuestion}
            response={question.response}
            question={question.question}
            indexQuestion={index}
        />
    );

    return <div className={style.questions}>
        {questions.length > 0
            ? questionsComponents
            : "Упс.. Кажется брифе отсутствуют вопросы. Напишите нам в лс"}
    </div>
};


