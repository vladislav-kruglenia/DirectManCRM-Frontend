export type DeleteButtonPropsType = {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
    onClickFunc: () => void
}

export type EditButtonPropsType = {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
    onClickFunc: () => void
}
export type LinkButtonPropsType = {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
    link: string
}

export type CopyButtonPropsType = {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
    onClickFunc: () => void,
    copyText: string
}



export type AddButtonPropsType = {
    size?: 'small' | 'medium',
    iconSize?: 'inherit' | 'default' | 'small' | 'large',
    largeButton?: boolean,
    buttonText: string
    onClickFunc: () => void
}

export type SaveButtonPropsType = {
    size?: 'small' | 'medium' | 'large',
    disabled: boolean,
    buttonText: string
    onClickFunc: () => void
}


