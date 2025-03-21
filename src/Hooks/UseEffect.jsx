import React,{useState, useEffect} from 'react';
import "./Products.css";

const UseEffect = () => {
    // const [products, setProducts] = useState([])

    let [timer,setTimer]=useState(null) 

    //didMount()
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>setProducts(data))
        timer = setInterval(()=>{
            console.log('interval called');
            
        },1000)

        // Cleanup Function
        return ()=>{
            clearInterval(timer)
        }

    },[timer]) //dependecy variables
  return (
    <div className="product-container">
      <h1>willUnmount component is mounted</h1>
      <hr />
      {/* {products.map((products,index)=>{
        return <div key={index}>
            <h3>{products.title}</h3>
            <p>{products.description}</p>
            <img src={products.image} alt={products.title} />
            <hr />
          </div> 
        })} */}
    </div>
  )
}

export default UseEffect
