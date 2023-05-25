import { Card, Typography, Grid, CardContent, CardActions, Button } from '@mui/material';
import { CharaterItemProps } from './home.types';
import { useDialog } from '../../../components/dialog';
import { DialogLearnMore } from './DialogLearnMore';

export const CharacterItem = ({ character }: CharaterItemProps) => {
    const { isDialogOpen, closeDialog, openDialog } = useDialog(false);

    return (
        <Grid item md={2} sm={12}>
            <Card>
                <CardContent>
                    <Typography>{character.name}</Typography>
                    <Typography color="text.secondary" gutterBottom>{character.status}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={openDialog}>Learn More</Button>
                </CardActions>
            </Card>

            <DialogLearnMore
                id={character.id}
                closeDialog={closeDialog}
                isDialogOpen={isDialogOpen}
            />
        </Grid>
    )
}
