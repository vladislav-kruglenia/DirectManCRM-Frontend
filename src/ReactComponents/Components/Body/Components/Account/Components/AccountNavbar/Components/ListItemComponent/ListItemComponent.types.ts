import {ReactNode} from "react";

export type ListItemComponentProps = {
    index: number,
    link: string,
    linkText: string,
    indexMainLink: number,
    itemIcon: ReactNode,
    editIndexMainLink: (index: number) => void,
}