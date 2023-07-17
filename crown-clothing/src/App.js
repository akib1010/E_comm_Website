import Home from './Routes/home/home.component'
import {Routes, Route} from 'react-router-dom'
import Navigation from './Routes/navigation/navigation.component'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
      </Route>
    </Routes>
  )
}

export default App;
