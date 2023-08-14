import { useEffect } from "react";
import { useLoginMutation } from "../../app/services/rickAndMortyExample";
import { Typography } from '@mui/material';

export const HomePage = (): JSX.Element => {
    const [login, loginResponse] = useLoginMutation();
    console.log("🚀 ~ file: HomePage.tsx:7 ~ HomePage ~ loginResponse:", loginResponse.data)

    useEffect(() => {
        login({
            username: "algo",
            password: "algo"
        })
    }, [])

    return (
        <div>
            <Typography variant="h2">HomePage</Typography>
        </div>
    )
}
