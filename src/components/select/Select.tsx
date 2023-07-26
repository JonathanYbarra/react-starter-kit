import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';
import { Grid } from '@mui/material';
import { SelectProps } from './select.types';

export const Select = (props: SelectProps) => {
    const { id, label, value, handleChange, selectOptions, emptyLabel = "none", md = 6 } = props;

    return (
        <Grid item md={md}>
            <FormControl fullWidth>
                <InputLabel id={id}>{label}</InputLabel>
                <SelectMUI
                    labelId={id}
                    id={id}
                    name={id}
                    value={value || ''}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value="">{emptyLabel}</MenuItem>
                    {
                        selectOptions.map(option =>
                            <MenuItem value={option.id} key={option.id + option.label}>{option.label}</MenuItem>
                        )
                    }
                </SelectMUI>
            </FormControl>
        </Grid>
    );
}