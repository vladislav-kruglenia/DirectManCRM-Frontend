import React, {FC} from "react";
import {CommentsDisplayProps} from "./CommentsDisplay.types";
import {useCommentsComponents} from "./CommentsDisplay.hooks";

export const CommentsDisplay:FC<CommentsDisplayProps> = (props) => {
    const {comments} = props;
    const CommentsComponents = useCommentsComponents(comments);

    return <div>
        {CommentsComponents}
    </div>
};

