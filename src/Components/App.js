import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import StreamShow from './stream/StreamShow';
import StreamList from './stream/StreamList';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamCreate from './stream/StreamCreate';
import Header from './Header';
const App = () =>{
    return (<div className="ui container">
             
       <BrowserRouter>
        <div>
        <Header/>
            <Route path="/" exact component={StreamList}/>   
            <Route path="/Streams/Create" exact component={StreamCreate}/> 
            <Route path="/Streams/Show" exact component={StreamShow}/>
            <Route path="/Streams/Edit"  exact  component={StreamEdit}/>
            <Route path="/Streams/Delete" exact component={StreamDelete}/>
        </div>
       </BrowserRouter> 

    </div>);
}

export default App;

 