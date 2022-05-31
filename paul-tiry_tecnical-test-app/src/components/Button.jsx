import styled from 'styled-components'

const Button = ({ text, submit }) => {
  return <CustomBtn type={submit}>{text}</CustomBtn>
}

export default Button

const CustomBtn = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.light};
  min-width: 15%;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.4rem;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.lightGray};
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
  :active {
    box-shadow: 0px 0px 3px black inset;
  }
`
