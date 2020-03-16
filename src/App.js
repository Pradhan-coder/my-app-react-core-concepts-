import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Salman', 'Shovu','Bappi', 'Kallu', 'Khan']
  const products = [
     {name: 'Photoshop', price: 'US$ 90.99'},
     {name: 'Illustrator', price: 'US$ 60.99'},
     {name: 'PDF Reader', price: 'US$ 69.99'},
     {name: 'Premier El', price: 'US$105.99'},
     {name: 'Adobe XD', price:'US$54.99'}

  ]
  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);
  return (
    <div className="App">
    <header className="App-header">
      <p>I am a react person.</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        products.map(product => <li>{product.name}</li>)
      }
      
      </ul>
      {
        products.map(product =><Product product={product}></Product>)
      }
       
      <Person name="Munna" job="football"></Person>
      <Person name="Masum" job="Dorshok"></Person>
      <Person name="Kasum" job="Handball"></Person>
      <Person name="Nasum" job="Crickter"></Person>
     
    </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
   
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
  }, [])

  return(
    <div>
    <h3>Dynamic Users: {users.length}</h3>
    <ul>
    {
      users.map(user => <li>{user.name}, {user.phone}, {user.email}, {users.Address}</li>)
    }
    </ul>
    </div>
  )
}
 function Product(props){
  const productStyle={
   margin:'10px',
   border:'1px solid blue',
   borderRadius:'5px',
   backgroundColor:'solid black',
   height:'200px',
   width:'200px',
   float:'left'
  }
  const {name, price} = props.product;
  console.log(props);
   return (
     <div style={productStyle}>
     <h3>{name}</h3>
     <h6>{price}</h6>
     <button>Buy Now</button>
 </div>  
   )
 }

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px', margin:'20px', borderRadius:'10px', padding:'10px'}}>
    <h3>My Name: {props.name}</h3>
    <p>My profession: {props.job}</p>
    </div>
  )
}

export default App;




