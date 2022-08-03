import { useContext } from "react";
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Contextdata } from "./MyContext";
import './Style.css';
function Navbar() {

  const [cart ,set_cart,Amount,set_total_amount]= useContext(Contextdata);
  let amount =0;
 cart.map((item) => {
  amount += (item.quantity * item.price)
  })
  console.log("amount is "+amount);
  set_total_amount(amount);
 
 console.log(cart.length);


  return (
    <>
    <div className='nav_main_container'>
        <div className='nav_sub_container'>
            <img style={{width:"8vw"}} src="amazonlogo.png" alt="amazon logo"/>
        </div>
        <div className='nav_sub_container' style={{display:"grid",placeItems:"center"}}>
            <div style={{display:"flex"}}>
                <div style={{marginTop:"2vh",marginRight:"0.5vw"}}><i class="fa-solid fa-location-dot"></i></div>
                <div  style={{textAlign:"start"}}>
                  <span>Deliver to</span>
                  <div>India</div>
                </div>
            </div>
        </div>

        <div className='nav_sub_container'>
            <div style={{border:"1px solid black"}}>
            <input type="text" style={{outline:"none",border:"none"}}></input>
             <NavLink to="/"><i class="fa-solid fa-magnifying-glass" style={{padding:"1.2vw",border:"1px solid black",backgroundColor:"#FF9900"}}></i></NavLink>
            </div>

        </div>
        <div className='nav_sub_container'>
           <div>
           <img  style={{width:"3vw",height:"4vh"}} src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt=""/>
            <span style={{marginLeft:"0.5vw"}}><i class="fa-solid fa-caret-down" ></i></span>
           </div>
        </div>
        <div className='nav_sub_container'>
           <div>
           <div>Hello, Sign in</div>
            <div>Accounts & Lists <i class="fa-solid fa-caret-down"></i></div>
           </div>
        </div>
        <div className='nav_sub_container'> 
           <div>
            <div>Returns</div>
            <div>& orders</div>
           </div>
        </div>
        <div className='nav_sub_container'>
          <NavLink to="/bill" style={{color:"#FF9900",textDecoration:"none"}}><i class="fa-solid fa-cart-plus" style={{fontSize:"3vw",color:"orange"}}></i>{cart.length}</NavLink>
        </div>
    </div>
   <div className='main_nav'>
    <div className='nav'>
            <div className='sub_nav' style={{marginLeft:"25px"}}><i class="fa-solid fa-bars"></i> All</div>
            <NavLink to="" className='sub_nav'>Today's deals</NavLink>
            <NavLink to="" className='sub_nav'>Customer Service</NavLink>
            <NavLink to="" className='sub_nav'>Registry</NavLink>
            <NavLink to="" className='sub_nav'>Gifts Cards</NavLink>
            <NavLink to="" className='sub_nav'>Sell</NavLink>
            <NavLink to="" className='sub_nav'>Books</NavLink>
            <NavLink to="" className='sub_nav'>Electronics</NavLink>
            <NavLink to="" className='sub_nav'>Prime</NavLink>
            <NavLink to="" className='sub_nav'>fashion</NavLink>
            <NavLink to="" className='sub_nav'>New Releases</NavLink>
            <NavLink to="" className='sub_nav'>Home & Kitchen</NavLink>
        </div>
   </div>
   <div>
       
   </div>
    </>
  )
}

export default Navbar