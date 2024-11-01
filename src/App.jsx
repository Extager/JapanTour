import Header from "./components/header/header";
import About from './components/main/about/about';
import DS from './components/main/details_short/details_short';

export default function App() {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <DS />
      </div>

    </div>
  )
}