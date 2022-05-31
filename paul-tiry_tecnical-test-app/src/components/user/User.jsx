import styled from 'styled-components'
import { useParams } from 'react-router'
import { FaGithubSquare } from 'react-icons/fa'
import { BsPersonBadge, BsPersonPlusFill } from 'react-icons/bs'
import Wrapper from '../Wrapper'
import useFetch from '../../hooks/useFetch'

const User = () => {
  const user = useParams()
  const { userData, fetchUser } = useFetch()
  fetchUser(user.login)

  return (
    <Wrapper flexDir="row">
      <Img
        src={userData.avatar_url}
        alt={userData.login}
        title={userData.login}
      />
      <Info>
        <Title>{userData.login}</Title>
        <ul>
          <ListElement>
            <FaGithubSquare size={'2rem'} />
            <li>Number of public repos: {userData.public_repos}</li>
          </ListElement>
          <ListElement>
            <BsPersonBadge size={'2rem'} />
            <li>Following: {userData.following} users.</li>
          </ListElement>
          <ListElement>
            <BsPersonPlusFill size={'2rem'} />
            <li>Number of followers: {userData.followers}</li>
          </ListElement>
        </ul>
      </Info>
    </Wrapper>
  )
}

export default User

const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.orange};
`
const Img = styled.img`
  margin: 3rem 0;
  border-radius: 50px;
  max-width: 200px;
  overflow: hidden;
`
const Info = styled.div`
  margin: 3rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  ul {
    list-style: none;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`
const ListElement = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  li {
    margin-left: 0.5rem;
  }
`
