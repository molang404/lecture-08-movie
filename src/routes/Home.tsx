import styled from "styled-components";
import SearchBer from "../components/SearchBar.tsx";

function Home() {
    const Wrap = styled.div`
        width: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    `;

    const Header = styled.h2`
        color: #330c0c;
        background-color: #fff;
        padding: 12px 24px;
        box-shadow: 3px 4px 4px -1px #d0d0d0;
    `;

    return (
        <Wrap>
            <Header>Search Movie</Header>
            <SearchBer />
        </Wrap>
    );
}

export default Home;