export type SimpleSnackbarPropsType = {
    isOpenSnackBar: boolean,
    snackbarType: 'success' | 'info' | 'warning' | 'error',
    textInfo: string,
    onCloseSnackBar: () => void,
}