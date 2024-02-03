import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';
import About from './components/about/about';
import WhyUs from './components/why-us/why-us';
import Testimonial from './components/testimonial/testimonial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    
      </header>
      <Banner/>
      <About/>
      <WhyUs/>
      <Testimonial/>
    </div>
  );
}

export default App;
