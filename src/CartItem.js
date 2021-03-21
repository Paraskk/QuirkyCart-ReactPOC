import React from 'react';
// if we nottice carefully now even CartItem doesnot have its owm state so it can also 
// be changed into fxnal component
// a fxnal component does not have access to this keyword
const CartItem=(props)=>{

    const {price,title,qty,img}=props.product;// object destructuring
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
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
            <img onClick={()=>onIncreaseQuantity(product)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
            <img onClick={()=>onDecreaseQuantity(product)} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
            <img onClick={()=>onDeleteProduct(product.id)} alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
          </div>
        </div>
      </div>
    );
  
}
 const styles={
  image:{
    height: 110,
    width: 110,
    borderRadius: 4 ,
    background:'#ccc'
  }
}
export default CartItem;





// class CartItem extends React.Component {
//   constructor(){
//     super(); 
//   }
//   render (){
//     const {price,title,qty,img}=this.props.product;// object destructuring
//     const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props;
//     return(
//       <div className="cart-item">
//         <div className="left-block">
//         <img style={styles.image} src ={img}/>
//         </div>
//         <div className="right-block">
//           <div style={{fontSize:25}}>{title}</div>
//           <div color={{color:'#777'}}>{price}</div>
//           <div color={{color:'#900'}}>QTY:{qty}</div>
//           <div className="cart-item-actions">
//             <img onClick={()=>onIncreaseQuantity(product)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
//             <img onClick={()=>onDecreaseQuantity(product)} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
//             <img onClick={()=>onDeleteProduct(product.id)} alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//  const styles={
//   image:{
//     height: 110,
//     width: 110,
//     borderRadius: 4 ,
//     background:'#ccc'
//   }
// }
// export default CartItem;


















// class CartItem extends React.Component {
//   constructor(){
//     //  state is just a javascript object
//     super(); // have to always use super to call constr of parent class first
//     this.state={
//       price: 999,
//       title: 'Red Riding Hood',
//       qty: 0,
//       img: "https://st1.bollywoodlife.com/wp-content/uploads/2019/10/Ranveer-Singh-RED.jpg"
//     }
//     // this.increaseQuantity=this.increaseQuantity.bind(this)
//     // external variable in which a calling fxn is stored doesnt has reference of this
//   }
//   increaseQuantity () {
//    this.setState({
//      qty: this.state.qty+1
//    },()=>{console.log("state increaed asynchronously")});
//   //  this.setState({}) takes as argument an object which does shallow merging to state
//   }
//   decreaseQuantity= ()=> {// arrow fxn automatically bind the value o this to instance of class
//     this.setState(
//       (prevSate)=>{return {
//         qty:prevSate.qty==0? prevSate.qty:prevSate.qty-1
//       }},()=>{}
//     );
//     //this.setState((prevState)=>{return {}}) takes in a callback fxns and uses previous state are arg
//       // especially benificial when previous state is of some use
//   }
//   render (){
//     // JSX describing UI for cart
//     const {price,title,qty,img}=this.state;// object destructuring
//     return(
//       <div className="cart-item">
//         <div className="left-block">
//         <img style={styles.image} src ={img}/>
//         </div>
//         <div className="right-block">
//           <div style={{fontSize:25}}>{title}</div>
//           <div color={{color:'#777'}}>{price}</div>
//           <div color={{color:'#900'}}>QTY:{qty}</div>

//           <div className="cart-item-actions">
//             {/* Buttons */}
//             <img onClick={this.increaseQuantity.bind(this)} alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
//             <img onClick={this.decreaseQuantity} alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
//             <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }



























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






















