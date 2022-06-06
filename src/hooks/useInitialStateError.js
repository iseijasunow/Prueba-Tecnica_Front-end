import { useState } from 'react'

const INITIAL_STATE = {
  show: false,
  message: null,
  variant: null
}

const useInitialStateError = () => {
  const [stateError, setStateError] = useState(INITIAL_STATE)

  const openAlert = (status, payload) => {
    if (status === 'error') {
      setStateError({
        show: true,
        message: payload.message,
        variant: payload.variant
      })
    }
  }

  const hideAlert = () => setStateError(INITIAL_STATE)

  return {
    stateError,
    openAlert,
    hideAlert
  }
}

export default useInitialStateError
