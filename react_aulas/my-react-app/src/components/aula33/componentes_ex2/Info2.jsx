import {BrowserRouter, Routes, Route, Link,useParams} from 'react-router-dom'

function Info2() {
    const { firstname } = useParams();
    return {firstname};
  }

  export default Info2