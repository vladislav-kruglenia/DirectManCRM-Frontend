import React, {FC} from "react";
import {CommentContainer} from "../Comment/Components/CommentContainer/CommentContainer";
import {MainCommentsFormProps} from "./MainCommentsForm.types";
import {CommentForm} from "../Comment/Components/CommentForm/CommentForm";

export const MainCommentsForm:FC<MainCommentsFormProps> = (props) => {
    const {startText} = props;

    return <CommentContainer
        DisplayComponent={
            <CommentForm
                startText={startText}
                editText={text => {}}
                exitEditMode={() => {}}
            />
        }
    />
};

