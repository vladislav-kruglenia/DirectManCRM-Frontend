import React, {FC} from "react";
import style from "./EditingOrderQuestions.module.scss"
import {AddButton, SaveButton} from "../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {QuestionText} from "./Components/QuestionText/QuestionText";
import {ResponseContainer} from "./Components/ResponseContainer/ResponseContainer";
import {Typography} from "@material-ui/core";
import {QuestionProps} from "./Types/EditingOrderQuestionsTypes";

export let EditingOrderQuestions = () => {
    return <div className={style.EditingOrderQuestions}>
        <div className={style.EditingOrderQuestionsContainer}>
            <Typography variant={'h4'}>Редактирование брифа</Typography>
            <Questions/>
            <div className={style.SaveButton}>
                <SaveButton
                    disabled={false}
                    onClickFunc={() => {}}
                    buttonText={"Сохранить изменения"}
                    size={"large"}
                />
            </div>
        </div>
    </div>
};

export let Questions = () => {
    return <div className={style.Questions}>
        <div className={style.questionContainer}>
            <Question typeResponse={"Accesses"}/>
            <Question typeResponse={"Links"}/>
            <Question typeResponse={"Contacts"}/>
            <Question typeResponse={"Text"}/>
            <AddButton
                buttonText={'Добавить вопрос'}
                size={"medium"}
                onClickFunc={() => {}}
                largeButton={true}
            />
        </div>
    </div>
};


export let Question: FC<QuestionProps> = (props) => {
    return <div className={style.Question}>
        <QuestionText/>
        <ResponseContainer typeResponse={props.typeResponse}/>
    </div>
};







