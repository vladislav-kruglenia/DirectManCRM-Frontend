export type LoginFormData = {
    email: string,
    password: string
}

export type LoginFormOwnProps = {}

export type MapStateProps = {
    isAuth: boolean
}

export type MapDispatchProps = {
    login: ({email, password}: LoginFormData) => void
}

export type LoginPageProps = MapStateProps & MapDispatchProps

