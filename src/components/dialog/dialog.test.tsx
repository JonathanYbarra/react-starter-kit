import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
    const mockChildren = <div>Dialog Content</div>;

    test('renders_children_and_close_icon', () => {
        const handleClose = jest.fn();

        render(
            <Dialog id='test' open={true} handleClose={handleClose}>
                {mockChildren}
            </Dialog>
        );

        const dialogContent = screen.getByText('Dialog Content');
        expect(dialogContent).toBeInTheDocument();

        const closeIcon = screen.getByLabelText('close');
        expect(closeIcon).toBeInTheDocument();
    });

    test('calls_handleClose_when_close_icon_is_clicked', () => {
        const handleClose = jest.fn();

        render(
            <Dialog id='test' open={true} handleClose={handleClose}>
                {mockChildren}
            </Dialog>
        );

        const closeIcon = screen.getByLabelText('close');
        fireEvent.click(closeIcon);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
