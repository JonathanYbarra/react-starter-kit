import { SelectChangeEvent } from '@mui/material/Select';

export interface SelectOption {
    id: string | number;
    label: string;
}

export interface SelectProps {
    id?: string;
    label: string;
    value?: string | undefined;
    handleChange: (event: SelectChangeEvent) => void;
    selectOptions: SelectOption[];
    emptyLabel?: string;
    md?: number;
}