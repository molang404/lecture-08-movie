import { Link } from "react-router";
import styled from "styled-components";
import type { MovieItem } from "../routes/Search.tsx";

type Props = {
    movie: MovieItem;
}

const Box = styled(Link)`
    width: 200px;
    height: 380px;
    background-color: #fffef8;
    box-shadow: 0 2px 5px 1px #dcd4c6;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const Poster = styled.img`
    height: 250px;
    object-fit: cover;
`;

const Desc = styled.div`
    padding: 3px 5px;
`;

const Title = styled.div`
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #3f3626;
`;

const Year = styled.div`
    font-size: 16px;
    color: #938665;
`;

function MovieCard({movie} : Props) {
    return (
        <Box to={`/detail/${movie.imdbID}`}>
            <Poster src={movie.Poster} alt={movie.Title} />
            <Desc>
                <Title>{movie.Title}</Title>
                <Year>{movie.Year}</Year>
            </Desc>
        </Box>
    );
}

export default MovieCard;