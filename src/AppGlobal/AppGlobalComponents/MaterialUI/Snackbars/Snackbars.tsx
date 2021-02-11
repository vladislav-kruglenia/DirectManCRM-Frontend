import {Snackbar} from "@material-ui/core";
import React, {FC} from "react";
import {SimpleSnackbarPropsType} from "./Types/SnackbarsTypes";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export let SnackbarContainer: FC<SimpleSnackbarPropsType> = (props) => {
  return <Snackbar
      anchorOrigin={{vertical: "top", horizontal: "right"}}
      open={props.isOpenSnackBar}
      onClose={() => props.onCloseSnackBar()}
      autoHideDuration={1500}
      key={`top right`}>
    <Alert onClose={() => props.onCloseSnackBar()} severity={props.snackbarType}>
      {props.textInfo}
    </Alert>
  </Snackbar>
};