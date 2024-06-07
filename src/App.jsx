import './App.css';
import { CTAComponent } from './components/CTAComponent.jsx';
import { CardComponent } from './components/CardComponent.jsx';
import { FooterComponent } from './components/FooterComponent';
import ImageComponent from './components/ImageComponent';
import { NavbarComponent } from './components/NavbarComponent';

function App() {

  return (
    <>
      <div>
        <NavbarComponent/>
      </div>
      <div className='flex justify-center gap-5 mt-8'>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </div>
      <div className='flex justify-center gap-5 mt-8'>
        <CTAComponent/>
        <CTAComponent/>
        <CTAComponent/>
        <CTAComponent/>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </>
  );
}

export default App;
