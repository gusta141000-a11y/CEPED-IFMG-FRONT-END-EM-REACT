import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [posts, setposts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setposts(data));
  },[])

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default App
