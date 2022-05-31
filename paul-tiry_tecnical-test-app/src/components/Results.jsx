import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import Chart from './user/Chart'
import Wrapper from './Wrapper'

const Results = ({ data }) => {
  const theme = useTheme()
  const slicedList = data.items?.slice(0, 10)

  return (
    <>
      {(data.total_count ? data.total_count : 0) !== 0 && (
        <Wrapper flexDir="column" bgColor={theme.colors.medium}>
          <List>
            {slicedList.map((item) => (
              <Element key={item.id}>
                <CustomLink to={`user/${item.login}`}>
                  Username: {item.login} / ID: {item.id}
                </CustomLink>
                <Chart userName={item.login} />
              </Element>
            ))}
          </List>
        </Wrapper>
      )}
    </>
  )
}

export default Results

const List = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightGray};
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange};
  }
`
const Element = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.orange};
  text-align: center;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightGray};
`
const ErrorMessage = styled.h2`
  margin: auto;
  color: ${({ theme }) => theme.colors.orange};
`
