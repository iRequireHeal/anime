import {Header} from "../components/Header/Header";
import {GenreList} from "../components/GenreList/GenreList";
import {Outlet} from "react-router-dom";

export const genressssssssssss = {
    Action: 'Action',
    Drama: 'Drama',
    Comedy: 'Comedy',
    SciFi: 'Sci-Fi',
    Space: 'Space',
    Mystery: 'Mystery',
    Magic: 'Magic',
    Supernatural: 'Supernatural',
    Police: 'Police',
    Fantasy: 'Fantasy',
    Sports: 'Sports',
    Romance: 'Romance',
    SliceofLife: 'Slice of Life',
    Cars: 'Cars',
    Racing: 'Racing',
    Horror: 'Horror',
    Psychological: 'Psychological',
    Thriller: 'Thriller',
    SuperPower: 'Super Power',
    Friendship: 'Friendship',
    School: 'School',
    Ecchi: 'Ecchi',
    Vampire: 'Vampire',
    Food: 'Food',
    Military: 'Military',
    Historical: 'Historical',
    Dementia: 'Dementia',
    Mecha: 'Mecha',
    Samurai: 'Samurai',
    Youth: 'Youth',
    Game: 'Game',
    Harem: 'Harem',
}

export const genres = ['Action',
    'Drama',
    'Comedy',
    'Sci-Fi',
    'Space',
    'Mystery',
    'Magic',
    'Supernatural',
    'Police',
    'Fantasy',
    'Sports',
    'Romance',
    'Slice of Life',
    'Cars',
    'Racing',
    'Horror',
    'Psychological',
    'Thriller',
    'Super Power',
    'Friendship',
    'School',
    'Ecchi',
    'Vampire',
    'Food',
    'Military',
    'Historical',
    'Dementia',
    'Mecha',
    'Samurai',
    'Youth',
    'Game',
    'Harem',
]

export const GenresPage = () => {
    return (
        <>
            <Header isSearch={false}/>
            <GenreList/>
            <Outlet/>
        </>
    )
}