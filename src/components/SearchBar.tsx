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
    background-color: #fffff9;
    outline: none;
    border-radius: 5px;
    border: 1px solid #4f3131;
    transition: all 0.4s;

    &:hover {
        background-color: #f3f3eb;
        border: 1px solid #3b2525;
    }
`;

const Button = styled.button`
    padding: 13px 16px;
    border-radius: 5px;
    background-color: #fffff9;
    color: #7a4b4b;
    border: 1px solid #7a4b4b;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
        background-color: #7a4b4b;
        border: 1px solid #4f3131;
        color: #fffff9;
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
                <i className="fa-solid fa-magnifying-glass" />
            </Button>
        </Box>
    );
}

export default SearchBer;