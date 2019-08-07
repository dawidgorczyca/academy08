import { useState } from 'react'

const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: { target: { value: string } }) => {
        setValue(event.target.value)
      },
    },
  }
}

export default useTextInput
