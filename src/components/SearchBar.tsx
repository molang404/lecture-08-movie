import { type ChangeEvent, useState, type SubmitEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Wrap = styled.form`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 12px;
    background-color: #ff5959;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

function SearchBar() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        // 사용자를 강제 이동
        event.preventDefault();

        if (!keyword.trim()) return;
        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);

        // 사용자를 이동시킬 때 (Link나 a태그나, navigate), 그 주소에 첫 글자가 / 로 시작하지 않으면
        // 지금 현재 주소 + search로 이동 시킴
        // 그 주소에 첫 글자가 / 로 시작하면
        // /search로 이동시킴
    };

    const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    return (
        <Wrap onSubmit={onSubmit}>
            <Input onChange={onChange} />
            <Button type={"submit"}>Search</Button>
        </Wrap>
    );
}

export default SearchBar;
