import { Select } from "../../components/select";
import { Grid, Typography } from '@mui/material';
import { CharacterList } from "./components";

export const HomePage = (): JSX.Element => {
    const selectOptions = [{ id: '1', label: 'Option 1' }, { id: '2', label: 'Option 2' }];

    return (
        <div>
            <Typography variant="h2">HomePage</Typography>
            <CharacterList />

            <Grid container spacing={2} mt={2}>
                <Select
                    label="Test Label"
                    id="test"
                    selectOptions={selectOptions}
                    handleChange={(e) => console.log(e)}
                />
                <Select
                    label="Test2 Label"
                    id="test2"
                    selectOptions={selectOptions}
                    handleChange={(e) => console.log(e)}
                />
            </Grid>
        </div>
    )
}
