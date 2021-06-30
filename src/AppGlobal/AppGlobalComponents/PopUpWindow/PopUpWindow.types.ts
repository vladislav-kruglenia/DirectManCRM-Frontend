import {ReactNode} from "react";

export type PopUpWindowProps = {
    isOpen: boolean,
    title: string,
    PopUpComponent: ReactNode,
    setOpenMode: (value: boolean) => void,
}