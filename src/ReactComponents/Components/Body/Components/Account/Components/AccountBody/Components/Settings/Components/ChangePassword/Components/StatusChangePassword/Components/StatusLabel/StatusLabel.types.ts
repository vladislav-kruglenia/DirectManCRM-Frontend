export type StatusLabelProps = {
    status: StatusChangePasswordEnum,
}

export enum StatusChangePasswordEnum {
    successful = 'successful',
    error = 'error',
    none = "none",
}