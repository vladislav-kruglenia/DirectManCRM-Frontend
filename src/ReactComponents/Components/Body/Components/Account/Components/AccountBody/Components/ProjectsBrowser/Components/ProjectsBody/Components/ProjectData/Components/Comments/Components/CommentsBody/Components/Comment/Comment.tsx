import React, {FC} from "react";
import {CommentProps} from "./Comment.types";
import {useTypeCommentDisplay} from "./Comment.hooks";
import {CommentContainer} from "./Components/CommentContainer/CommentContainer";

export const Comment:FC<CommentProps> = (props) => {
    const DisplayComponent = useTypeCommentDisplay(props);

    return <CommentContainer DisplayComponent={DisplayComponent}/>
};
