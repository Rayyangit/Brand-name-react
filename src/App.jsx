import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';

const App = () => {
  console.log(import.meta.env.VITE_SECRET_KEY);
  return <div>
    <Navigation />
    <Hero />
  </div>;
};
export default App;