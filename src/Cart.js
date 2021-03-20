import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component  {
  constructor(){
    super();
    this.state={
      products: [
        {
          title: ' Ranveer Red Riding Hood',
          id: 1,
          img: "https://st1.bollywoodlife.com/wp-content/uploads/2019/10/Ranveer-Singh-RED.jpg",
          qty: 0,
          price: 999
          
        },
        {
          title: ' Ranveer Mario',
          id: 2,
          img: "https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/anj/ranveer-singh-outfit-weird-8/309980262.jpg.webp",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer No Fucks Given',
          id: 3,
          img: "https://image.scoopwhoop.com/w620/s4.scoopwhoop.com/anj/ranveer-singh-outfit-weird-21/439849669.jpg.webp",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer Gully Cowboy',
          id: 4,
          img: "https://image.scoopwhoop.com/w620/s4.scoopwhoop.com/anj/ranveer-singh-outfit-weird-10/419722611.jpg.webp",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer Lips Lips Lips',
          id: 5,
          img: "https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/anj/ranveer-singh-outfit-weird-12/535362134.jpg.webp",
          qty: 0,
          price: 999
        },
        {
          title: 'Zebra Ranveer',
          id: 6,
          img: "https://qph.fs.quoracdn.net/main-qimg-a70c2ea6e33daed182fa423269792a59",
          qty: 0,
          price: 999
        },
        {
          title: 'Ranveer Deadpool',
          id: 7,
          img: "https://i1.wp.com/urbanasian.com/wp-content/uploads/2018/05/Ranveer-Singh-1.jpg?resize=640%2C675&ssl=1",
          qty: 0,
          price: 999
        },
        {
          title: 'Flower Ranveer',
          id: 8,
          img: "https://qph.fs.quoracdn.net/main-qimg-4cdfb1768ff2b767c5c8efea77c13d92",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer Tiger',
          id: 9,
          img: "https://img.mensxp.com/media/content/2019/Feb/ranveer-singh-animal-print-tiger-print-outfits-500-1-1549606237.jpg",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer Purple Panther',
          id: 10,
          img: "https://i.pinimg.com/originals/bf/04/9c/bf049c217daf12ce84df7080815a9ca6.jpg",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer COOOOOOOOOL',
          id: 11,
          img: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/ranveer-singh-in-a-printed-cape-with-pattern-shirt-and-pants-201907-1562423224.jpg",
          qty: 0,
          price: 999
        },
        {
          title: ' Ranveer Chindi Rapper',
          id: 12,
          img: "https://cdn.statically.io/img/winkreport.com/wp-content/uploads/2020/02/1582276435_427_17-Times-Ranveer-Singh-proved-that-He-has-the-Worst.jpg?quality=100&f=auto",
          qty: 0,
          price: 999
        },
        {
          title: 'Nimbu Ranveer ',
          id: 13,
          img: "https://pbs.twimg.com/media/D29OOANWsAA5lf_.jpg",
          qty: 0,
          price: 999
        },
      ]

    }
  }
  increaseQuantity =(product)=> {
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
      products:products
    },()=>{console.log("state increaed asynchronously")});
   }
    decreaseQuantity=(product)=>{// canno use simple function here as it doesnt has ref to this
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0) return;
      products[index].qty-=1;
      this.setState({
       // products:products
       products 
      },()=>{console.log("state increaed asynchronously")});
    }
    handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id);// something very similar to java lambda !
      this.setState({
        products: items
      })
    }

  render(){
    return (
      <div className="cart">
        {this.state.products.map((product)=>{
         return  (
         <CartItem 
            product={product} 
            key={product.id} 
            onIncreaseQuantity={this.increaseQuantity}
            onDecreaseQuantity={this.decreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            />)
        })}
      </div>
    );
  }
}
export default Cart;