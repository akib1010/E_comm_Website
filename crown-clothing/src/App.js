import Home from './Routes/home/home.component'
import {Routes, Route} from 'react-router-dom'
import Navigation from './Routes/navigation/navigation.component'
import SignIn from './Routes/sign-in/sign-in.component'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='sign-in' element={<SignIn/>}></Route>
      </Route>
    </Routes>
  )
}

export default App;
