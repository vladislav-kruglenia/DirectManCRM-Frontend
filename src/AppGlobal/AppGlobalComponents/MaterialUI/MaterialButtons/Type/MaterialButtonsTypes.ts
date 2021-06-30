import {HandleClickType} from "../../../../AppGlobalTypes/AppGlobalTypes";

export interface IconButtonsSizeProps {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
}

export interface ButtonsSizeProps {
    size?: 'small' | 'medium' | 'large',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
}

export interface CommonIconButtonsTypes extends IconButtonsSizeProps{
    onClickFunc: HandleClickType | VoidFunction
}

export interface CommonButtonsTypes extends ButtonsSizeProps{
    onClickFunc: VoidFunction,
}

export interface DeleteButtonPropsType extends CommonIconButtonsTypes{
}

export interface AddButtonIconPropsType extends CommonIconButtonsTypes{
}

export interface ClearButtonPropsType extends CommonIconButtonsTypes{
}

export interface EditButtonPropsType extends CommonIconButtonsTypes{
}

export interface LinkButtonPropsType extends IconButtonsSizeProps{
    link: string,
}

export interface CopyButtonPropsType extends CommonIconButtonsTypes{
    copyText: string,
    onClickFunc: VoidFunction,
}

export interface CloneButtonPropsType extends CommonIconButtonsTypes{
}





export interface AddButtonPropsType extends CommonIconButtonsTypes{
    largeButton?: boolean,
    buttonText: string
}

export interface SaveButtonPropsType extends CommonButtonsTypes{
    disabled: boolean,
    buttonText: string
}

export interface OutlinedButtonPropsType extends CommonButtonsTypes{
    buttonText: string,
    color?: 'inherit' | 'primary' | 'secondary' | 'default'
}


