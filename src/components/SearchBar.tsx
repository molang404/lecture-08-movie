import { type ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import * as React from "react";


const Box = styled.form`
    display: flex;
    justify-content: left;
    gap: 10px;
    width: 100%;
    max-width: 500px;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    background-color: ivory;
    outline: none;
    border-radius: 5px;
    border: 1px solid #4f3131;
`;

const Button = styled.button`
    padding: 13px 16px;
    border-radius: 5px;
    background-color: #7a4b4b;
    color: white;
    border: 1px solid #4f3131;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        background-color: ivory;
        border: 1px solid #7a4b4b;
        color: #7a4b4b;
    }
`;


function SearchBer() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const k = keyword.trim();
        if (!k) return;

        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    return (
        <Box onSubmit={onSubmit}>
            <Input onChange={onChange} />
            <Button type={"submit"}>
                검색
            </Button>
        </Box>
    );
}

export default SearchBer;