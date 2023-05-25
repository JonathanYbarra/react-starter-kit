import { Dialog as DialogMUI, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { SxProps, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { DialogProps } from './dialog.types';

export const Dialog = (props: DialogProps): JSX.Element => {
    const { id, open, handleClose, children } = props;

    const theme = useTheme();
    const responSivefullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const closeIconSX: SxProps<Theme> = {
        position: 'absolute',
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
    }

    return (
        <DialogMUI
            open={open}
            onClose={handleClose}
            aria-labelledby={id}
            aria-describedby={id}
            fullScreen={responSivefullScreen}
        >
            {children}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={closeIconSX}
            >
                <CloseIcon />
            </IconButton>
        </DialogMUI>
    )
}
