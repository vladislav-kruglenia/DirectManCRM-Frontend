import React, {useMemo} from "react";
import {Comment} from "../Comment/Comment";
import {CommentType} from "../../../../../../../../../../../../../../../../../../../Redux/Reducers/Account/Types/QueryTypes/ProjectInfoForClient.types";

export const useCommentsComponents = (comments: CommentType[]) => {
    return useMemo(() => {
        return comments.map((comment: CommentType) => {
            const {commentText, commentDate, authorLogin, commentId, authorId} = comment;
            return <Comment
                key={commentId}
                isEditMode={false}
                displayProps={{
                    authorName: authorLogin,
                    date: commentDate,
                    text: commentText,
                    isReadOnly: authorId === "1" //Todo: поменять на userId из state
                }}
                formProps={{startText: commentText, editText: text => {}}}
            />
        })
    }, [comments]);
};