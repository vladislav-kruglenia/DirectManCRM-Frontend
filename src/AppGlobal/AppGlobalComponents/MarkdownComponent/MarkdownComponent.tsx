import React, {FC} from "react";
import style from "./MarkdownComponent.module.scss"
import {MarkdownComponentProps} from "./MarkdownComponent.types";
import Markdown from "markdown-to-jsx";

export const MarkdownComponent:FC<MarkdownComponentProps> = (props) => {
    const {text} = props;

    return <Markdown className={style.MarkdownComponent}>{text}</Markdown>
};