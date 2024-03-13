import { Slider } from '@mui/material'
import { useState } from 'react'
import { Option } from './components/Option'

function App() {
  const [passwordLength, setPasswordLength] = useState<number>(16)

  const [useSpecialChar, setUseSpecialChar] = useState<boolean>(true)
  const [useNumbers, setUseNumbers] = useState<boolean>(true)
  const [useUppercase, setUseUppercase] = useState<boolean>(true)

  const handleSlider = (event: Event, newValue: number | number[]) => {
    setPasswordLength(newValue as number)
  }

  const handleSpecialChar = (value: boolean) => {
    setUseSpecialChar(value)
    console.log(value)
  }

  const handleOption = (event: Event, newValue: number) => {}

  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center text-white bg-slate-900">
        <div className="bg-bg-default flex flex-col text-center px-20 py-12 rounded-xl">
          {/* <h1 className="text-4xl">password</h1> */}
          <p className="text-xl mt-16">password</p>
          <div className="flex w-full">
            <div className="bg-[#202020] h-16 min-w-[40rem] rounded-xl mt-2 w-full"></div>
          </div>

          <div className="mt-12 text-left">
            <p>
              Password length: <span className="text-xl">{passwordLength}</span>
            </p>

            <Slider
              onChange={handleSlider}
              defaultValue={16}
              color="success"
              min={8}
              max={32}
            />
          </div>

          <div className="text-left mt-12">
            <Option onValueChange={handleSpecialChar} defaultValue={true} text="special characters?" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
