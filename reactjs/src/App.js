import { Routes, Route, useNavigate, useNavigation } from 'react-router-dom';
import Home from './component/home'; // Ensure this path matches your directory structure
import About from './component/about';
import Contact from './component/contact';
import Navbar from './component/navbar';
import Page from './component/page';
import Owner from './component/owner';
import Director from './component/director';
import User from './component/user';
import Search from './component/search';
import { Suspense, lazy } from 'react';
import Form from './component/form';
const Comp1=lazy(()=>import('./component/comp1'));   
const Comp2=lazy(()=>import('./component/comp2'));

function App() {
  const nav=useNavigate();
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} >
       <Route path='owner'element={<Owner/>}></Route>      {/*RELATIVE PATH   */}
  
      <Route path='/contact/director'element={<Director/>}></Route>   {/* ABSOLUTE PATH */} 
      
      
      </Route>
      <Route path='/user/:id' element={<User/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='*' element={<Page/>}></Route>
    </Routes> 
    <button onClick={()=>nav(-1)}>back</button><br/><br/>
    <button onClick={()=>nav('/about')}>GoTOAbout</button><br/><br/>
    <button onClick={()=>nav('/contact')}>GoTOContact</button><br/><br/>
    <button onClick={()=>nav('./search')}>search</button>
    <Form/>
    {/* <Suspense fallback={<div></div>}>
      <h1>lazy Loading</h1> */}
      {/* > */}
      {/* <Comp1/>
    </Suspense>
    <Suspense fallback={<div>Loading.........</div>}>
     <Comp2/>
    </Suspense> */}
    
  </>
  );
}

export default App;
