import { NavLink } from 'react-router-dom';
import bigimg from '../images/categories-3.jpg';
import img1 from '../images/item-1.jpg'
import img2 from '../images/item-2.jpg'
import img3 from '../images/item-3.jpg'
import img4 from '../images/item-4.jpg'
import img5 from '../images/item-5.jpg'
import img6 from '../images/item-6.jpg'
import img7 from '../images/item-7.jpg'
import img8 from '../images/item-8.jpg'
import img9 from '../images/item-9.jpg'

  

function CategoryComponent() {

    return (
        <div>

{/* <div className="container-back-home mb-4">
    <span> <a className="link-back-home" to="./home">Home &gt;</a> Categories</span>
  </div> */}


  <div className="container-articles">
    <span className="border-bottom">
      <div className="row border-white w-auto cont-alig">
        <div className="col-md-2 small-pic">
          <img className="img-fluid" src={bigimg} alt="book" />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">
              <a className="header-color-3" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'left', color: 'green', fontFamily: 'impact'}}>Tiny notice books</a>
            </h5>
            <p class="card-text text-align text-wrap lh-1">
                This is some text about our tiny notice books. 
                And this is some more text. 
                Here goes some additional sentence which is describing our tiny notice books' sortiment. 
                The next sentences are about our customers' impressions about tiny notice books.
                This is some text about our tiny notice books. 
                And this is some more text. 
                Here goes some additional sentence which is describing our tiny notice books' sortiment. 
                The next sentences are about our customers' impressions about tiny notice books.
                This is some text about our tiny notice books. 
                And this is some more text. 
                Here goes some additional sentence which is describing our tiny notice books' sortiment. 
                The next sentences are about our customers' impressions about tiny notice books.
                This is some text about our tiny notice books. 
                And this is some more text. 
                Here goes some additional sentence which is describing our tiny notice books' sortiment. 
                The next sentences are about our customers' impressions about tiny notice books.
                This is some text about our tiny notice books.
                Here goes some additional sentence which is describing our tiny notice books' sortiment. 
                The next sentences are about our customers' impressions about tiny books.
                
            </p>
          </div>
        </div>
      </div>
    </span>
  </div>


      <div className="row items" style={{margin: '13px'}}>

           <div className="col text-center">
            <div className="card" style={{ width: '14rem'}}>
<NavLink to="./product"><img src={img1} className="card-img-top" alt="Notice book Kitty"/></NavLink>
                <div className="card-body" >
                  <h5 className="card-title ">Kitty</h5>
                  <p className="card-text ">0.50 EUR</p>
                  <a href="#" className="btn btn-success align-center" onclick="addToCart()" id="addedToCartItem" onClick={()=>{ alert('The item was added to cart'); }}>Add to cart</a>
                </div>
              </div>
           </div>

           <div className="col text-center">
            <div className="card" style={{ width: '14rem'}}>
                <img src={img2} className="card-img-top" alt="Notice book Giraffe"/>
                <div className="card-body">
                  <h5 className="card-title">Giraffe</h5>
                  <p className="card-text">0.90 EUR.</p>
                  <a href="#" className="btn btn-success align-center" onClick={()=>{ alert('The item was added to cart'); }}>Add to cart</a>
                </div>
              </div>
           </div>

           <div className="col text-center">
            <div className="card" style={{ width: '14rem'}}>
                <img src={img3} class="card-img-top" alt="Notice book Flamingo"/>
                <div className="card-body">
                  <h5 className="card-title">Flamingo</h5>
                  <p className="card-text">1.10 EUR</p>
                  <a href="#" className="btn btn-success">Add to cart</a>
                </div>
              </div>
           </div>

           <div className="col text-center">
            <div className="card" style={{ width: '14rem'}}>
                <img src={img4} className="card-img-top" alt="Notice book Future professions"/>
                <div className="card-body">
                  <h5 className="card-title">Professions</h5>
                  <p className="card-text">1.15 EUR</p>
                  <a href="#" className="btn btn-success">Add to cart</a>
                </div>
              </div>
           </div>

           <div className="col text-center">
            <div className="card" style={{ width: '14rem'}}>
                <img src={img5} className="card-img-top" alt="Notice book Cactus"/>
                <div className="card-body">
                  <h5 className="card-title">Cactus</h5>
                  <p className="card-text">1.20 EUR</p>
                  <a href="#" className="btn btn-success" onclick="addToCart()" id="addedToCartItem">Add to cart</a>
                </div>
              </div>
           </div> 
      </div>


      <div className="row items" style={{margin: '13px'}}>

        <div className="col text-center">
         <div className="card" style={{ width: '14rem'}}>
             <img src={img6} class="card-img-top" alt="forest animals notice book"/>
             <div className="card-body">
               <h5 className="card-title">Forest animals</h5>
               <p className="card-text">1.30 EUR</p>
               <a href="#" className="btn btn-success" onclick="addToCart()" id="addedToCartItem">Add to cart</a>
             </div>
           </div>
        </div>
        

        <div className="col text-center">
         <div className="card" style={{ width: '14rem'}}>
             <img src={img7} className="card-img-top" alt="Notice book Avocado"/>
             <div className="card-body">
               <h5 className="card-title">Avocado</h5>
               <p className="card-text">1.35 EUR</p>
               <a href="#" className="btn btn-success" onclick="addToCart()" id="addedToCartItem">Add to cart</a>
             </div>
           </div>
        </div>

        <div className="col text-center">
         <div className="card" style={{ width: '14rem'}}>
             <img src={img8} className="card-img-top" alt="Notice book Avocado mix" />
             <div className="card-body">
               <h5 className="card-title text-center">Avocado mix</h5>
               <p className="card-text text-center">1.40 EUR</p>
               <a href="#" className="btn btn-success" onclick="addToCart()" id="addedToCartItem">Add to cart</a>
             </div>
           </div>
        </div>

        <div className="col text-center">
         <div className="card" style={{ width: '14rem'}}>
             <img src={img9} className="card-img-top" alt="Notice book Crocodile" />
             <div className="card-body">
               <h5 className="card-title">Crocodile</h5>
               <p className="card-text">1.40 EUR</p>
               <a href="#" className="btn btn-success" onclick="addToCart()" id="addedToCartItem">Add to cart</a>
             </div>
           </div>
        </div>

        <div className="col text-center">
         <div className="card" style={{ width: '14rem'}}>
             <img src={img9} className="card-img-top" alt="Notice book Little fox" />
             <div className="card-body">
               <h5 className="card-title">Little fox</h5>
               <p className="card-text">1.45 EUR</p>
               <a href="#" className="btn btn-success" onclick="addToCart()">Add to cart</a>
             </div>
           </div>
        </div> 
        </div>

   </div>

        
    )
}

export default CategoryComponent;