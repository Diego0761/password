import { useState } from 'react'

export type Props = {
  text: string
  defaultValue?: boolean
  onValueChange: (value: boolean) => void
}

export function Option(props: Props) {
  if (!props.defaultValue) props.defaultValue = true

  const [value, setValue] = useState<boolean>(props.defaultValue)

  const handleClick = (option: boolean) => {
    setValue(option)
    props.onValueChange(option)
  }

  return (
    <span className="select-none">
      {props.text}

      <span
        className={`mx-2 font-bold p-4 cursor-pointer select-none text-xl ${
          value ? 'opacity-100' : 'opacity-50'
        }`}
        onClick={() => handleClick(true)}
      >
        yes
      </span>

      <span className="opacity-65 select-none">/</span>

      <span
        className={`mx-2 font-bold p-4 cursor-pointer select-none text-xl ${
          value ? 'opacity-50' : 'opacity-100'
        }`}
        onClick={() => handleClick(false)}
      >
        no
      </span>
    </span>
  )
}
