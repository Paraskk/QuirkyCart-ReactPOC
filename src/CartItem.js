import React from 'react';
// This is a Class component
class CartItem extends React.Component {
  constructor(){
    //  state is just a javascript object
    super(); // have to always use super to call constr of parent class first
    this.state={
      price: 999,
      title: 'Red Riding Hood',
      qty: 1,
      img: "https://st1.bollywoodlife.com/wp-content/uploads/2019/10/Ranveer-Singh-RED.jpg"
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this)
    // external variable in which a calling fxn is stored doesnt has reference of this
  }
  increaseQuantity () {
   
  }
  decreaseQuantity= ()=> {// arrow fxn automatically bind the value o this to instance of class

  }
  render (){
    // JSX describing UI for cart
    const {price,title,qty,img}=this.state;// object destructuring
    return(
      <div className="cart-item">
        <div className="left-block">
        <img style={styles.image} src ={img}/>
        </div>
        <div className="right-block">
          <div style={{fontSize:25}}>{title}</div>
          <div color={{color:'#777'}}>{price}</div>
          <div color={{color:'#900'}}>QTY:{qty}</div>

          <div className="cart-item-actions">
            {/* Buttons */}
            <img onClick={this.increaseQuantity.bind(this)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
            <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
            <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
          </div>
        </div>
      </div>
    );
  }
}
 // In JSX we style our elements using Objects
 const styles={
  image:{
    height: 110,
    width: 110,
    borderRadius: 4 ,
    background:'#ccc'
    // NOTICE: ABOVE WE DID NOT USE border-radius as in JS we cannot use - so use camel
  }
}
export default CartItem;

















// render (){
//   // JSX describing UI for cart
//   return(
//     <div className="cart-item">
//       <div className="left-block">
//       <img style={styles.image} src ="https://st1.bollywoodlife.com/wp-content/uploads/2019/10/Ranveer-Singh-RED.jpg"/>
//       </div>
//       <div className="right-block">
//         <div style={{fontSize:25}}>Red Riding Hood</div>
//         <div color={{color:'#777'}}>Rs 999</div>
//         <div color={{color:'#900'}}>QTY:1</div>

//         <div className="cart-item-actions">
//           {/* Buttons */}
//           <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
//           <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
//           <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
//         </div>
//       </div>
//     </div>
//   );
// }
// }
// // In JSX we style our elements using Objects
// const styles={
// image:{
//   height: 110,
//   width: 110,
//   borderRadius: 4 ,
//   background:'#ccc'
//   // NOTICE: ABOVE WE DID NOT USE border-radius as in JS we cannot use - so use camel
// }
// }






















