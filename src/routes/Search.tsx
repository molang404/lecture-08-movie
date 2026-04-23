import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard.tsx";
import SearchBer from "../components/SearchBar.tsx";

const Wrap = styled.div`
    padding: 10px 20px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    gap: 20px;

    h2 {
        padding: 5px;
        border-bottom: 2px solid #f3f3f3;
        margin-bottom: 20px;
        color: #331d1d;
    }
`;

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
`;



export type MovieItem = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
};

type MovieType = { Search: MovieItem[] };

function Search() {
    // 쿼리에 있는 키워드 가져오고, 검색 API로 연결, 타입 가져와서 화면에 검색 결과 출력

    const [params] = useSearchParams();
    const k = params.get("keyword");

    const [list, setList] = useState<MovieItem[]>([]);

    useEffect(() => {
        if(!k) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${k}`)
            .then(res => res.json())
            .then((json: MovieType) => {setList(json.Search);})
            .catch(err => console.log(err))
    },[k])

    return (
        <Wrap>
            <h2>Search Result: {k}</h2>
            <SearchBer />
            <Main>
                {list.map((value, index) => (
                    <MovieCard key={index} movie={value}/>
                ))}
            </Main>
        </Wrap>
    );
}

export default Search;