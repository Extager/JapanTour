import Header from "./components/header/header";
import About from './components/main/about/about';
import DS from './components/main/details_short/details_short';
import Reasons from "./components/main/reasons/reasons";
import Reason_1 from "./components/main/reason_1/reason1";

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

      <div>
        <Reasons />
      </div>

      <div>
        <Reason_1 />
      </div>
      
    </div>
  )
}