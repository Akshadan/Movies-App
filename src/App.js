
import img from './images/img.jpg'
import MoviesForm from './components/MoviesForm';
import MoviesStats from './components/MovieStats';

function App() {

  return (
<div>
  {/* <img src={img} width="10%" height="30%"/> */}
 <h2>Movies List App</h2>

 < MoviesForm />
 <MoviesStats />
 
</div>
  )
}

export default App;
