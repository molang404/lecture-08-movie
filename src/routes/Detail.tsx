import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const Wrap = styled.div`
    background-color: #fffff9;
    width: 100%;
    height: 100dvh;
    padding: 15px;
`;

const Button = styled.button`
    outline: none;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #603b3b;
    color: floralwhite;
    background-color: #a17979;

    &:hover {
        background-color: #603b3b;
        color: #fff;
        border-color: #a17979;
    }
`;

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 550px;
    display: flex;
    background-color: #f4f5f6;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 400px;
    object-fit: cover;
`;

const Left = styled.div`
    padding: 30px 10px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Title = styled.h2`
    display: inline;
    color: #22243b;
    font-size: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #585d65;
`;

const Desc = styled.p`
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
    font-weight: 400;
    color: #3a3e4d;
`;

const Genre = styled.div`
    padding-left: 10px;
    color: #121226;
`;

const Plot = styled.div`
    padding-left: 10px;
    color: #121226;
`;

export type MovieDetail = {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Genre: string;
    Director: string;
};

function Detail() {
    const [detail, setDetail] = useState<MovieDetail | null>(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
            .then(res => res.json())
            .then(json => {
                return setDetail(json);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <Wrap>
            <Button
                onClick={() => {
                    navigate(-1);
                }}>
                &larr; Back
            </Button>
            <Wrapper>
                {detail && (
                    <Container>
                        <Img src={detail.Poster} alt={detail.Title} />
                        <Left>
                            <Title>{detail.Title}</Title>
                            <Desc>
                                <p>{detail.Year}</p>
                                <p>|</p>
                                <p>{detail.Director}</p>
                            </Desc>
                            <Genre>{detail.Genre}</Genre>
                            <Plot>{detail.Plot}</Plot>
                        </Left>
                    </Container>
                )}
            </Wrapper>
        </Wrap>
    );
}

export default Detail;
