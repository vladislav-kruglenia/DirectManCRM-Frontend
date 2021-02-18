import React, {FC} from "react";
import style from "../FillOrderQuestions.module.scss";
import {Typography} from "@material-ui/core";
import {
    QuestionPropsTypes,
    ResponseContactActionCreatorsType,
    ResponseLinkActionCreatorsType,
    TypesResponsesPropsType
} from "./Types/QuestionTypes";
import {ResponseText} from "./ResponseComponents/ResponseText/ResponseText";
import {ResponseAccesses} from "./ResponseComponents/ResponseAccesses/ResponseAccesses";
import {ResponseLinks} from "./ResponseComponents/ResponseLinks/ResponseLinks";
import {ResponseContacts} from "./ResponseComponents/ResponseContacts/ResponseContacts";
import {
    LinkData,
    ResponseAccessData,
    ResponseContactsData,
    ResponseLinksData,
    ResponseTextData
} from "../../../../redux/Types/FillOrderQuestions/FillOrderQuestionsReducerTypes";
import {useDispatch} from "react-redux";
import {actionCreators} from "../../../../redux/fillOrderQuestionsReducer";
import {ClientContactType} from "../../../../AppGlobal/AppGlobalComponents/ContactContainer/Types/ContactContainerTypes";
import {ErrorLoadingData} from "../Errors/ErrorsComponents";

export let Question: FC<QuestionPropsTypes> = (props) => {
    return <div className={style.questionContainer}>
        <Typography className={style.question} variant={'h5'}>
            {`${props.indexQuestion + 1}. ${props.question}`}
        </Typography>
        <TypesResponses indexQuestion={props.indexQuestion} response={props.response}/>
    </div>;
};

export let TypesResponses: FC<TypesResponsesPropsType> = (props) => {

    let dispatch = useDispatch();

    let responseContactActionCreators: ResponseContactActionCreatorsType = {
        editResponseContact: (indexQuestion: number, indexContact: number, contactData: ClientContactType) => {
            debugger
            dispatch(actionCreators.editResponseContact(indexQuestion, indexContact, contactData))
        },
        deleteResponseContact: (indexQuestion: number, indexContact: number) => {
            debugger
            dispatch(actionCreators.deleteResponseContact(indexQuestion, indexContact))
        },
        addResponseContact: (indexQuestion: number) => {
            dispatch(actionCreators.addResponseContact(indexQuestion))
        }
    };

    let responseLinkActionCreators: ResponseLinkActionCreatorsType = {
        editResponseLink: (indexQuestion: number, indexLink: number, linkData: LinkData) => {
            dispatch(actionCreators.editResponseLink(indexQuestion, indexLink, linkData))
        },
        deleteResponseLink: (indexQuestion: number, indexLink: number) => {
            dispatch(actionCreators.deleteResponseLink(indexQuestion, indexLink))
        },
        addResponseLink: (indexQuestion: number) => {
            dispatch(actionCreators.addResponseLink(indexQuestion))
        },
    };

    let editResponseText = (indexQuestion: number, textResponse: string) => {
        dispatch(actionCreators.editResponseText(indexQuestion, textResponse))
    };
    let editResponseAccess = (indexQuestion: number, indexAccess: number, accessData: ResponseAccessData) => {
        dispatch(actionCreators.editResponseAccess(indexQuestion, indexAccess, accessData))

    };


    switch (props.response.responseType) {
        case "Text":
            let responseData = props.response.data as ResponseTextData;
            return <ResponseText
                indexQuestion={props.indexQuestion}
                responseData={responseData.textData}
                isChanged={responseData.isChanged}
                editResponseText={editResponseText}
            />;
        case "Accesses":
            return <ResponseAccesses responseData={props.response.data as Array<ResponseAccessData>}
                                     editResponseAccess={editResponseAccess}
                                     indexQuestion={props.indexQuestion}
            />;
        case "Links":
            return <ResponseLinks responseData={props.response.data as ResponseLinksData}
                                  responseLinksObj={responseLinkActionCreators}
                                  indexQuestion={props.indexQuestion}
            />;
        case "Contacts":
            return <ResponseContacts
                responseData={props.response.data as ResponseContactsData}
                indexQuestion={props.indexQuestion}
                actionCreators={responseContactActionCreators}
            />;

        default:
            return <ErrorLoadingData/>;
    }
};

