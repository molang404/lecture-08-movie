import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export type MovieItem = {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
};

type MovieType = { items: MovieItem[] };

function Search() {
    // 쿼리에 있는 키워드 가져오고, 검색 API로 연결, 타입 가져와서 화면에 검색 결과 출력

    const [params] = useSearchParams();
    const k = params.get("keyword");

    const [list, setList] = useState<MovieItem[]>(null);

    useEffect(() => {
        if(!k) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${k}`)
            .then(res => res.json())
            .then((json: MovieType) => {setList(json.items);})
            .catch(err => console.log(err))
    },[k])

    return (
        <div>
            <h2>Search Result: {k}</h2>
        </div>
    );
}

export default Search;