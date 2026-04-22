import styled from "styled-components";
import SearchBer from "../components/SearchBar.tsx";

function Home() {
    const Wrap = styled.div`
        width: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 30px;
    `;

    return (
        <Wrap>
            <h2>Search Movie</h2>
            <SearchBer />
        </Wrap>
    );
}

export default Home;