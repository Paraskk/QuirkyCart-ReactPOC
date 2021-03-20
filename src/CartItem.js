import React from 'react';
// This is a Class component
class CartItem extends React.Component {
  render (){
    // JSX describing UI for cart
    return(
      <div className="cart-item">
        <div className="left-block">
        <img style={styles.image} src ="https://st1.bollywoodlife.com/wp-content/uploads/2019/10/Ranveer-Singh-RED.jpg"/>
        </div>
        <div className="right-block">
          <div style={{fontSize:25}}>Red Riding Hood</div>
          <div color={{color:'#777'}}>Rs 999</div>
          <div color={{color:'#900'}}>QTY:1</div>

          <div className="cart-item-actions">

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