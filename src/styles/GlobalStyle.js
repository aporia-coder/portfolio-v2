import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        /* 1rem = 10px */
        font-size: 10px;
    }

    html {
        cursor: none;
    } 
`
export default GlobalStyle
