import React from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom';
const App = () =>{
    return (<div>
       <BrowserRouter>
        <div>
            <Route path="/" exact component={One}/>   
            <Route path="/two" component={Two}/>
        </div>
       </BrowserRouter> 
    </div>);
}

export default App;


const One = () => {
    return <div>Welcome to Page One<br/><Link className="ui blue basic button" to="/two">To link page 2</Link></div>;
}; 

const Two = () => {
    return <div>Welcome to  Page two<br/><Link className="ui blue basic button" to="/">To link page 1</Link></div>;
}; 