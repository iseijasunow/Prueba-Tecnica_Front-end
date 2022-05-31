import styled, { useTheme } from 'styled-components'

const Wrapper = ({ flexDir = 'row', bgColor, children }) => {
  const theme = useTheme()
  return (
    <Div flexDir={flexDir} bgColor={bgColor || theme.colors.dark}>
      {children}
    </Div>
  )
}

export default Wrapper

const Div = styled.div`
  display: flex;
  min-height: 185px;
  flex-direction: ${({ flexDir }) => flexDir};
  align-items: center;
  margin: 4rem 0;
  width: 50vw;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1rem;
  box-shadow: 0px 4px 25px gray;
  padding: 3rem 2rem;
`
