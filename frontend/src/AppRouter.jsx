import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login.jsx'
import { Home } from './Pages/Home/Home'
import User from './Pages/User/User'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/" element={ <ShowPosts /> } />
            <Route path="/post/:id" element={ <SinglePost /> } />
    
    
            <Route path="/post/upload" element={ <CreatePost /> } />
            <Route path="/post/update/:id" element={ <UpdatePost /> } />
            <Route path="/post/delete/:id" element={ <DeletePost /> } />*/}
    <Route path="/User" element={ <User /> } />
    
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register /> } />
        </Routes>
      )
}

export default AppRouter;