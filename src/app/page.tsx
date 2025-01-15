import { Header } from './components/header'
import { Nav } from './components/nav'
import { TextBox } from './components/textBox'
export default function Home() {
  return (
    <div>
      <div className="w-fit m-auto">
        <Nav />
      </div>
      <div className="w-fit relative left-80 -mt-5">
        <Header />
      </div>
      <div>
        <TextBox />
      </div>
    </div>
  )
}
