import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px 20px;
`;

const Result = styled.h2`
    padding: 5px;
    border-bottom: 2px solid #f3f3f3;
    margin-bottom: 20px;
    color: #331d1d;
`;

const Main = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

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
            <Result>Search Result: {k}</Result>
            <Main>
                {list.map((value, index) => (
                    <Box to={`/detail/${value.imdbID}`} key={index}>
                        <Poster src={value.Poster} alt={value.Title} />
                        <Desc>
                            <Title>{value.Title}</Title>
                            <Year>{value.Year}</Year>
                        </Desc>
                    </Box>
                ))}
            </Main>
        </Wrap>
    );
}

export default Search;