import React, {FC} from "react";
import {MainCommentsFormProps} from "./MainCommentsForm.types";
import {Comment} from "../Comment/Comment";

export const MainCommentsForm:FC<MainCommentsFormProps> = () => {
   return <Comment
       isEditMode={true}
       formProps={{
           editText: text => {},
           startText: "",
           isMainForm: true,
       }}
       displayProps={{
           isReadOnly: true,
           text: "",
           authorName: 'vlad',
           date: "01/01"
       }}
   />
};


