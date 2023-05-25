import { DialogContent, DialogContentText, Avatar, Typography, Chip, DialogActions } from '@mui/material';
import { useGetCharacterByIDQuery } from '../../../app/services/rickAndMortyExample';
import { Dialog } from '../../../components/dialog';
import { DialogLearnMoreProps } from './home.types';

export const DialogLearnMore = ({ isDialogOpen, closeDialog, id }: DialogLearnMoreProps) => {
    const { data: characterById } = useGetCharacterByIDQuery({ id });

    return (
        <Dialog open={isDialogOpen} id="test" handleClose={closeDialog}>
            <>
                {characterById && (
                    <>
                        <DialogContent>
                            <Avatar alt="Remy Sharp" src={characterById.image as string} />
                            <Typography variant='h5'>{characterById.name}</Typography>
                            <DialogContentText>{characterById.species}</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Chip label={characterById.status} color="success" variant="outlined" />
                            {characterById.type && <Chip label={characterById.type} color="primary" variant="outlined" />}
                            <Chip label={characterById.location.name} color="secondary" variant="outlined" />
                        </DialogActions>
                    </>
                )}
            </>
        </Dialog>
    )
}
