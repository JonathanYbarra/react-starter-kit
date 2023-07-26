import { FormGroup, FormControlLabel } from '@mui/material';
import { MaterialUISwitch, type SwtichProps } from '.';

export const SwtichTheme = ({ checked, label, onChange }: SwtichProps) => {
    return (
        <FormGroup>
            <FormControlLabel
                label={label}
                control={
                    <MaterialUISwitch
                        checked={checked}
                        onChange={onChange}
                    />
                }
            />
        </FormGroup>
    )
}
