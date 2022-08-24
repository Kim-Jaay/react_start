import TopBanner from './pages/TopBanner';
import ListTest from './ListTest';
import './basic.css';
import { useEffect, useState } from 'react';



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);



  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>).slice(0, 10)
      }
    </div>
  )
}

export default App;