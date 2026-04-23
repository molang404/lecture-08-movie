import styled from "styled-components";
import SearchBar from "../components/SearchBar.tsx";

const Wrap = styled.div`
    padding: 30px;
`;

function App() {
    return (
        <Wrap>
            <h2>Movie Search</h2>
            <SearchBar />
        </Wrap>
    );
}

export default App;