import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { JSX } from "react";

export default function AlertDialog({
  title,
  description,
  buttonText,
  buttonColor,
  onAccept,
  onCancel,
}: {
  title: string;
  description: string | JSX.Element;
  buttonText: string | JSX.Element;
  buttonColor:
    | "inherit"
    | "error"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | undefined;
  onAccept: (handleCLose: () => void) => void;
  onCancel: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color={buttonColor} onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => {
              onCancel();
              handleClose();
            }}
            color="error"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              onAccept(handleClose);
            }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
