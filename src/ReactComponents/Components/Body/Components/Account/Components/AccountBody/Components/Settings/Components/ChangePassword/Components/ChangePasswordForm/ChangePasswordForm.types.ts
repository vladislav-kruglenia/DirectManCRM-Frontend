export type ChangePasswordFormProps = {
    exitEditMode: () => void,
    // updatePassword: (options?: MutationFunctionOptions<UpdateUserPasswordRes, UpdateUserPasswordVar>) => Promise<FetchResult<UpdateUserPasswordRes>>
}

export type ChangePasswordValues = {
    oldPassword: string,
    newPassword1: string,
    newPassword2: string,
}