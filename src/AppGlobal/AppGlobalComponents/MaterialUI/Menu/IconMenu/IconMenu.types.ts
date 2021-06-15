import {ReactNode} from "react";

export type IconMenuProps = {
    menuItemsArr: MenuItem[]
}

export type MenuItem = {
    icon: ReactNode,
    text: string,
    onClickFunc: () => void,
}
