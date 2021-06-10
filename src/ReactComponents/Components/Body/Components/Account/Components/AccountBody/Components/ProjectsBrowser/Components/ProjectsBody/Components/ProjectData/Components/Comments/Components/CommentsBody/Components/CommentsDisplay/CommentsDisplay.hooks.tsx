import React, {useMemo} from "react";
import {Comment} from "../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";
import {CommentDisplay} from "./Components/CommentDisplay/CommentDisplay";
import {CommentContainer} from "../CommentContainer/CommentContainer";

export const useCommentsComponents = (comments: Comment[]) => {
    return useMemo(() => {
        return comments.map((comment: Comment) => {
            const {commentText, commentDate, authorLogin, authorId, commentId} = comment;
            return <CommentContainer
                key={commentId}
                DisplayComponent={<CommentDisplay
                    text={commentText}
                    date={commentDate}
                    authorName={authorLogin}
                />}
            />
        })
    }, [comments]);
};