export const getUsers = async (value) => {
  if (value === '') {
    return {
      error: { id: 422, message: 'Please enter a value' },
    }
  }
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/search/users?q=${value}`
  )
  const result = await response.json()
  if (result.total_count === 0) {
    return {
      ...result,
      error: {
        id: 404,
        message: `No results found for: ${value}`,
      },
    }
  }
  return result
}

export const getInfo = async (login) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/users/${login}`
  )
  const result = await response.json()
  return result
}
