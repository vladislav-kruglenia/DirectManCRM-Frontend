import React, {FC} from "react";
import {CommentsDisplayProps} from "./CommentsArr.types";
import {useCommentsComponents} from "./CommentsArr.hooks";

export const CommentsArr:FC<CommentsDisplayProps> = (props) => {
    const {comments} = props;
    const CommentsComponents = useCommentsComponents(comments);

    return <div>
        {CommentsComponents}
    </div>
};

