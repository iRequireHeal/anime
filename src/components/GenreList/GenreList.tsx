import {GenreListItem, GenreListWrapper} from "./GenreList.styles";
import {genres} from "../../pages/GenresPage";
import {useDispatch} from "react-redux";
import {setPage} from "../../store/modules/Pages/PageSlice";

export const GenreList = () => {
    const dispatch = useDispatch()
    const changeGenre = () => {
        dispatch(setPage(0))
    }

    return (
        <GenreListWrapper>
            {genres.map(genre => {
                return (
                    <div>
                        <GenreListItem to={`${genre}`} onClick={changeGenre}>{genre}</GenreListItem>
                    </div>
                )
            })}
        </GenreListWrapper>
    )
}