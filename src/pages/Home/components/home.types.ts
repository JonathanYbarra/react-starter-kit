import { CharaterResult } from "../../../app/services/rickAndMortyExample";

export interface CharaterItemProps {
    character: CharaterResult;
}

export interface DialogLearnMoreProps {
    isDialogOpen: boolean;
    closeDialog: () => void;
    id: number
}