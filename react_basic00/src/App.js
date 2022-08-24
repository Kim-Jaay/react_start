import TopBanner from './pages/TopBanner';
import ListTest from './ListTest';
import './basic.css';
import { useEffect, useState } from 'react';



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  console.log(data[0])

  return (
    <div>

    </div>
  )
}

export default App;