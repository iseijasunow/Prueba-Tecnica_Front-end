import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { schema } from '../helpers/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import styled, { useTheme, css } from 'styled-components'
import Button from './Button'
import Results from './Results'
import Wrapper from './Wrapper'
import Error from './Error'
import useFetch from '../hooks/useFetch'

const Search = () => {
  const { searchData, search } = useFetch()
  const [searchValue, setSearchValue] = useState()
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' })

  const onSubmit = (value) => {
    search(value.search)
    setSearchValue(value.search)
  }

  const errorStyles = {
    isError: errors.search ? theme.errorInput : theme.validInput,
  }

  return (
    <>
      <Wrapper flexDir="column" bgColor={theme.colors.dark}>
        <Title>search</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="search"
            placeholder="Insert a username"
            errorStyles={errorStyles.isError}
            {...register('search')}
          />
          <Button submit="submit" text="search" />
        </Form>
        <Error message={errors.search?.message} />
        {searchData.total_count && searchData.total_count !== 0 ? (
          <ResultMessage>
            {searchData.items?.length === 1
              ? `Found "${searchValue}".`
              : searchData.items.length <= 10
              ? `Found ${searchData.items.length} results for "${searchValue}".`
              : `Found ${searchData.total_count} results for "${searchValue}". Here are the first 10`}
          </ResultMessage>
        ) : (
          <></>
        )}
      </Wrapper>
      <Results data={searchData} />
    </>
  )
}

export default Search

const Title = styled.h1`
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
const Input = styled.input.attrs(({ errorStyles }) => ({
  backgroundColor: errorStyles.backgroundColor,
  color: errorStyles.color,
  borderColor: errorStyles.borderColor,
  outline: errorStyles.outline,
}))`
  min-width: 75%;
  padding-left: 0.5rem;
  height: 2rem;
  font-size: 1.2rem;
  border-radius: 0.4rem;
  border: 3px solid ${({ errorStyles }) => errorStyles.unfocused};
  background-color: ${({ errorStyles }) => errorStyles.backgroundColor};
  color: ${({ errorStyles }) => errorStyles.color};
  :focus {
    border: 3px solid ${({ errorStyles }) => errorStyles.borderColor};
    outline: 1.3px solid ${({ errorStyles }) => errorStyles.outline};
  }
`
const ResultMessage = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.orange};
`
