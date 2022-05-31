import styled from 'styled-components'

const Error = ({ message }) => {
  return <Message>{message}</Message>
}

export default Error

const Message = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.errorColors.red};
  font-size: 1.5rem;
`
