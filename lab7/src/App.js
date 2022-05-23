import img_winter from './img/winter.jpg';
import img_summer from './img/summer.jpg';
import img_spring from './img/spring.jpg';
import img_autumn from './img/autumn.jpg';
import img_home from './img/home.jpeg';
import './App.css';
import Slider from './Slider'

function App() {
  var photos = [img_winter, img_summer, img_spring, img_autumn, img_home];
  var sFiles = photos[0];
  for (var i = 1; i < photos.length; i++) {
    sFiles += '|' + photos[i];
  }
  return (
    <div>
      <Slider files={sFiles} />
      <Slider files={sFiles} />
    </div>
  );
}

export default App;
