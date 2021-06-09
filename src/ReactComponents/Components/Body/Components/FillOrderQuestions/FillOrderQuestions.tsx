import React, {FC, ReactNode} from 'react';
import style from "./FillOrderQuestions.module.scss"
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getNoDataStatusSelector, getQuestionsSelector} from "./FillOrderQuestionsSelectors";
import {Question} from "./Question/Question";
import {QuestionAndResponse} from "../../../../../Redux/Reducers/FillOrderQuestions/Types/FillOrderQuestions.types";
import {SaveButton} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {QuestionsProps} from "./Types/FillOrderQuestionsTypes";

export let FillOrderQuestions = () => {
    return <div className={style.FillOrderQuestions}>
        <div className={style.questionsContainer}>
            <Typography variant={'h3'}>Заполнение брифа</Typography>
            <Questions/>
        </div>
    </div>
};

export const Questions: FC<QuestionsProps> = (props) => {
    const questions = useSelector(getQuestionsSelector);
    const isNoData = useSelector(getNoDataStatusSelector);

    const saveButton = !props.displayOnly
        ? <div className={style.SaveButton}>
            <SaveButton buttonText={'Отправить бриф'} size={"large"} disabled={isNoData} onClickFunc={() => {
            }}/>
        </div>
        : null;

    const questionsComponents = questions.length > 0
        ? questions.map<ReactNode>((questionElement: QuestionAndResponse, index: number) => {
            const {idQuestion, response, question} = questionElement;
            return <Question
                key={idQuestion}
                response={response}
                question={question}
                indexQuestion={index}
                displayOnly={props.displayOnly || false}
            />
        })
        : "Упс.. Кажется брифе отсутствуют вопросы. Напишите нам в лс";

    return <div className={style.questions}>
        {questionsComponents}
        {saveButton}
    </div>
};


