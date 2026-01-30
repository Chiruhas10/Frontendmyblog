import React from 'react'
import Home from './Home'
import Blogs from './Blogs'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import NoPage from './NoPage'
import AdminLogin from './Admin/AdminLogin'
import Dashboard from './Admin/Dashboard'
import WelcomeBlog from './Admin/WelcomeBlog'
import AddBlog from './Admin/AddBlog'
import EditBlog from './Admin/EditBlog'
import ViewBlogs from './Admin/ViewBlogs'
import ViewDetails from './ViewDetails'
import AuthorLogin from './Author/AuthorLogin'
import AuthorDashboard from './Author/AuthorDashboard'
import AuthorWelcome from './Author/AuthorWelcome'
import AuthorAddBlog from './Author/AuthorAddBlog'
import AuthorViewBlog from './Author/AuthoViewBlog'
import AuthorRegister from './Author/AuthorRegister'
const Routing = () => {
  return (
    <Routes>
       <Route path='/'Component ={Home} />
       <Route path='/Blogs'Component ={Blogs} />
       <Route path='/ViewBlogs'Component ={ViewBlogs} />
       <Route path='/About'Component ={About} />
       <Route path='/Contact'Component ={Contact} />
       <Route path='/admin'Component={AdminLogin} />
        <Route path='/Dashboard'Component={Dashboard} >
        <Route path=''Component={WelcomeBlog}/>
        <Route path='addblog'Component={AddBlog}/>
        <Route path='viewblog'Component={ViewBlogs}/>
        <Route path='editblog'Component={EditBlog}/>
        <Route path='logout'Component={AdminLogin}/>
        </Route>
       <Route path='/viewdetails/:id'Component ={ViewDetails} />
       <Route path='/author' Component={AuthorLogin} />
       <Route path='/authorregister' Component={AuthorRegister} />
       <Route path='/author/dashboard' Component={AuthorDashboard} >
       <Route index Component={AuthorWelcome} />
       <Route path='/author/dashboard/addblog' Component={AuthorAddBlog} />
       <Route path='/author/dashboard/viewblog' Component={AuthorViewBlog} />
       <Route path='/author/dashboard/logout' Component={AuthorLogin} />
       
       </Route>
       <Route path='*'Component ={NoPage} />
    </Routes>
  )
}

export default Routing
