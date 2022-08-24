import TopBanner from './pages/TopBanner';
import ListTest from './ListTest';
import './basic.css';


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


const App = () => {
  return (
    <>
      <ListTest />
    </>
  )
}

export default App;