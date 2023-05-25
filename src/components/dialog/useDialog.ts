import { useState } from 'react'
import { DialogHookReturnType } from './dialog.types';

export const useDialog = (initialOpen = false): DialogHookReturnType => {
    const [isDialogOpen, setIsDialogOpen] = useState(initialOpen);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return { isDialogOpen, openDialog, closeDialog };
}
