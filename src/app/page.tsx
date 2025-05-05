'use client'
import { useInput } from '@/store/inputStore'
import { Header } from './components/header'
import { Nav } from './components/nav'
import { TextBox } from './components/textBox'
export default function Home() {
  const { input } = useInput()
  return (
    <div>
      <div className=" w-fit m-auto flex justify-center items-center flex-col ">
        <div className=" w-fit m-auto">
          <Nav />
        </div>
        <div className=" w-full -mt-5 m-auto">
          <Header />
        </div>
        <div>
          <TextBox />
        </div>
      </div>
    </div>
  )
}
