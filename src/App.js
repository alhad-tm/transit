import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';
import About from './components/about/about';
import WhyUs from './components/why-us/why-us';
import Testimonial from './components/testimonial/testimonial';
import WhyChoose from './components/why-choose/why-choose';
import Team from './components/team/team';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
  
      {/* <Header/> */}
      <Banner/>
      <About/>
      <WhyUs/>
      <Testimonial/>
      <WhyChoose/>
      <Team/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
