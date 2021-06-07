import React, {FC} from "react";
import style from "./EditingOrderQuestions.module.scss"
import {AddButtonText, SaveButton} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {QuestionText} from "./Components/QuestionText/QuestionText";
import {ResponseContainer} from "./Components/ResponseContainer/ResponseContainer";
import {EditResponseTypeAction, QuestionActions, QuestionProps} from "./Types/EditingOrderQuestionsTypes";
import {useDispatch, useSelector} from "react-redux";
import {getBriefNameSelector, getIsErrorsSelector, getQuestionsSelector} from "./EditingOrderQuestionsSelectors";
import {QuestionType} from "../../../../../Redux/Reducers/EditingOrderQuestions/Types/EditingOrderQuestions.types";
import {
    addQuestion,
    deleteQuestion,
    editQuestionText,
    editResponseType
} from "../../../../../Redux/Reducers/EditingOrderQuestions/EditingOrderQuestions.reducer"
import {
    DeleteQuestionPayload,
    EditQuestionTextPayload,
    EditResponseTypePayload
} from "../../../../../Redux/Reducers/EditingOrderQuestions/Types/Actions.types";
import {NoQuestionsError} from "./Components/Errors/Errors";
import {BriefName} from "./Components/BriefName/BriefName";

export let EditingOrderQuestions = () => {
    let briefName = useSelector(getBriefNameSelector);
    let isErrors = useSelector(getIsErrorsSelector);

    return <div className={style.EditingOrderQuestions}>
        <div className={style.EditingOrderQuestionsContainer}>
            <BriefName briefName={briefName}/>
            <Questions/>
            <div className={style.SaveButton}>
                <SaveButton
                    disabled={isErrors}
                    onClickFunc={() => {}}
                    buttonText={"Сохранить изменения"}
                    size={"large"}
                />
            </div>
        </div>
    </div>
};

export let Questions = () => {
    let dispatch = useDispatch();

    let addQuestionAction = () => {
        dispatch(addQuestion())
    };

    let editResponseTypeAction: EditResponseTypeAction = (responseType, indexQuestion) => {
        let action: EditResponseTypePayload = {responseType, indexQuestion};
        dispatch(editResponseType(action))
    };

    let questionActions: QuestionActions = {
        editQuestionTextAction(indexQuestion, questionText){
            let action: EditQuestionTextPayload = {indexQuestion, questionTextData:{questionText, isChangedQuestionText: true}};
            dispatch(editQuestionText(action))
        },
        deleteQuestionAction(indexQuestion){
            let action: DeleteQuestionPayload = {indexQuestion};
            dispatch(deleteQuestion(action))
        },

    };
    let questionsData = useSelector(getQuestionsSelector);

    let questionsArrayComponents = questionsData.length > 0
        ? questionsData.map((question: QuestionType, index: number) => <Question
            key={question.idQuestion}
            questionTextData={question.questionTextData}
            indexQuestion={index}
            responseParams={question.response}
            questionActions={questionActions}
            editResponseType={responseType => editResponseTypeAction(responseType, index)}
        />)
        : <NoQuestionsError/>;

    return <div className={style.Questions}>
        <div className={style.questionContainer}>
            {questionsArrayComponents}
            <AddButtonText
                buttonText={'Добавить вопрос'}
                size={"medium"}
                onClickFunc={() => {addQuestionAction()}}
                largeButton={true}
            />
        </div>
    </div>
};


export let Question: FC<QuestionProps> = (props) => {
    return <div className={style.Question}>
        <QuestionText

            questionTextData={props.questionTextData}
            questionActions={props.questionActions}
            indexQuestion={props.indexQuestion}
        />
        <ResponseContainer
            indexQuestion={props.indexQuestion}
            editResponseType={responseType => props.editResponseType(responseType, props.indexQuestion)}
            responseParams={props.responseParams}
        />
    </div>
};







