import {GenreListItem, GenreListWrapper} from "./GenreList.styles";
import {genres} from "../../pages/GenresPage";

export const GenreList = () => {
    return (
        <GenreListWrapper>
            {genres.map(genre => {
                return (
                    <div>
                        <GenreListItem to={`${genre}`}>{genre}</GenreListItem>
                    </div>
                )
            })}
        </GenreListWrapper>
    )
}