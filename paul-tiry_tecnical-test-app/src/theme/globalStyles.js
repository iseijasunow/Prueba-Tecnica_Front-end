import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    
    body{
        display: flex;
        justify-content: center;
        background: ${({ theme }) => theme.colors.lightGray};
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`
export default GlobalStyle
