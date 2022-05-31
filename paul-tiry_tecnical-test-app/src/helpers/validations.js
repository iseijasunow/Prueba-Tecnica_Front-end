import * as yup from 'yup'

export const schema = yup.object().shape({
  search: yup
    .string()
    .min(4, 'Please enter a minimum of 4 characters.')
    .test(
      'iseijasunow',
      `"iseijasunow" is not a valid search value. Try again.`,
      (val) => val !== 'iseijasunow'
    ),
})
