export interface DialogProps {
    id: string;
    open: boolean;
    handleClose: () => void;
    children: JSX.Element | JSX.Element[];
}

export interface DialogHookReturnType {
    isDialogOpen: boolean;
    openDialog: () => void;
    closeDialog: () => void;
}
