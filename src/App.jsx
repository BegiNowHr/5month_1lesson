import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import MainPage from './pages/CreatePost'
import PostList from './pages/PostList'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route index element={<MainPage />} />
            <Route path='posts' element={<PostList />} />
            
            <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
