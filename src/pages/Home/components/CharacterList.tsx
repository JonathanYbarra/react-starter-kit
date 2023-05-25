import { Grid } from '@mui/material';

import { useGetCharacterQuery, type CharaterResult } from '../../../app/services/rickAndMortyExample';
import { CharacterItem } from './CharacterItem';

export const CharacterList = () => {
    const { data: characterData } = useGetCharacterQuery();

    return (
        <Grid container spacing={3}>
            {
                characterData && characterData.results.map((character: CharaterResult) =>
                    <CharacterItem key={character.id} character={character} />
                )
            }
        </Grid>
    )
}
