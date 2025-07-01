// components/ConfirmDialog.tsx
import React from "react";
import Dialog from "react-native-dialog";

type ConfirmDialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmDialog = ({
  visible,
  title = "Confirm",
  description = "Are you sure you want to proceed?",
  cancelLabel = "Cancel",
  confirmLabel = "OK",
  onCancel,
  onConfirm,
}: ConfirmDialogProps) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
      <Dialog.Button label={cancelLabel} onPress={onCancel} bold />
      <Dialog.Button label={confirmLabel} onPress={onConfirm} bold />
    </Dialog.Container>
  );
};

export default ConfirmDialog;
