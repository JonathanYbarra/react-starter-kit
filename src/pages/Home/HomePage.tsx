import { useEffect } from "react";
import { useLoginMutation } from "../../app/services/rickAndMortyExample";
import { Typography, Button } from '@mui/material';

export const HomePage = (): JSX.Element => {
    const [login, loginResponse] = useLoginMutation();
    console.log("🚀 ~ file: HomePage.tsx:7 ~ HomePage ~ loginResponse:", loginResponse.data)

    useEffect(() => {
        login({
            username: "jhon",
            password: "1234"
        })
    }, [])

    return (
        <div>
            <Typography variant="h1">HomePage</Typography>

            <Button
                variant="contained"
                color="primary"
            >
                Button Test
            </Button>
        </div>
    )
}

