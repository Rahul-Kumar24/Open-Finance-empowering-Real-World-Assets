import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Sider from './Component/Sider/Sider';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import India from './Component/Curr/India'
import Europe from './Component/Curr/Eur'
import Us from './Component/Curr/Us'
import Uk from './Component/Curr/Uk'
function App() {
  return (
     <BrowserRouter>
    
      <Switch>
        <Route path='/' component={Navbar} exact='true'/>
        {/* <Route path='/login' component={Login}/> */}
        <Route path='/india' component={India}/>
        <Route path='/us' component={Us}/>
        <Route path='/uk' component={Uk}/>
        <Route path='/euro' component={Europe}/>
      </Switch>
     </BrowserRouter>
      
   
  );
}

export default App;
