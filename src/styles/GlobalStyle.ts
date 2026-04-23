import { createGlobalStyle } from "styled-components";

// GlobalStyle이라고 하는 변수는, "글로벌 CSS" 기능을 리액트에서 사용하기 위해 만든 변수
const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;