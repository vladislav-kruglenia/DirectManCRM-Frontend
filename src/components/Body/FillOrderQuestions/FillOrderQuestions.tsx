import React, {FC} from 'react';
import style from "./FillOrderQuestions.module.scss"
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getNoDataStatusSelector, getQuestionsSelector} from "./FillOrderQuestionsSelectors";
import {Question} from "./Question/Question";
import {QuestionAndResponse} from "../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";
import {SaveButton} from "../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {QuestionsProps} from "./Types/FillOrderQuestionsTypes";

export let FillOrderQuestions = () => {
    return <div className={style.FillOrderQuestions}>
        <div className={style.questionsContainer}>
            <Typography variant={'h3'}>Заполнение брифа</Typography>
            <Questions/>
        </div>
    </div>
};

export let Questions:FC<QuestionsProps> = (props) => {
    let questions = useSelector(getQuestionsSelector);
    let isNoData = useSelector(getNoDataStatusSelector);

    const saveButton = !props.displayOnly
        ? <div className={style.SaveButton}>
            <SaveButton buttonText={'Отправить бриф'} size={"large"} disabled={isNoData} onClickFunc={()=>{}}/>
        </div>
        : null;

    let questionsComponents = questions.length > 0
        ? questions.map((question: QuestionAndResponse, index: number) => <Question
                key={question.idQuestion}
                response={question.response}
                question={question.question}
                indexQuestion={index}
                displayOnly={props.displayOnly || false}
            />
        )
        : "Упс.. Кажется брифе отсутствуют вопросы. Напишите нам в лс";

    return <div className={style.questions}>
        {questionsComponents}
        {saveButton}
    </div>
};


