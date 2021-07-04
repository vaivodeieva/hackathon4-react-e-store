import img1 from '../images/categories-1.jpg';
import img2 from '../images/categories-2.jpg';
import img3 from '../images/categories-3.jpg';
import {NavLink} from 'react-router-dom';


function CategoriesComponent() {

    return (
  
<div>

  <div className="container-articles">

    <span className="border-bottom">

      <div class="row border-white w-auto cont-alig">
        <div className="col-md-2 small-pic">
          <img className="img-fluid" src={img1} alt="story books"/> 
          

        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">
            <NavLink 
            className="header-color-2" 
            style={{color: 'darkRed', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
            to="./product">Tiny story books</NavLink>
            </h5>
            <p className="card-text text-align text-wrap lh-1">
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.
              This is some text about our tiny story books. And this is some more text. Here goes some additional
              sentence which is describing our tiny story books' sortiment. The next sentences are about our customers'
              experiences with tiny books.

            </p>
          </div>
        </div>
      </div>
    </span>
  </div>
  <div className="container-articles">
    <span className="border-bottom">
      <div className="row border-white w-auto cont-alig">
        <div className="col-md-2 small-pic">
          <img className="img-fluid" src={img2} alt="photo books"/>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">

            <NavLink 
            className="header-color-2" 
            style={{color: 'darkBlue', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
            to="./product">Tiny notice books</NavLink>

            </h5>
            <p class="card-text text-align text-wrap lh-1">
              This is some text about our tiny photo books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny photo books' sortiment.
              The next sentences are about our customers' experiences with tiny photo books.
              This is some text about our tiny photo books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny photo books' sortiment.
              The next sentences are about our customers' experiences with tiny photo books.
              This is some text about our tiny photo books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny photo books' sortiment.
              The next sentences are about our customers' experiences with tiny photo books.
              This is some text about our tiny photo books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny photo books' sortiment.
              The next sentences are about our customers' experiences with tiny photo books.
              This is some text about our tiny photo books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny photo books' sortiment.
              The next sentences are about our customers' experiences with tiny photo books.
            </p>
          </div>
        </div>
      </div>
    </span>
  </div>
  <div className="container-articles">
    <span className="border-bottom">
      <div className="row border-white w-auto cont-alig">
        <div className="col-md-2 small-pic">
          <img className="img-fluid" src={img3} alt="notice books"/>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">
            <NavLink 
            className="header-color-3" 
            style={{color: 'green', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}} 
            to="./category">Tiny notice books</NavLink>

            </h5>
            <p className="card-text text-align text-wrap lh-1">
              This is some text about our tiny notice books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny books.

            </p>
          </div>
        </div>
      </div>
      </span>
    
  </div>
        </div>


       
    )
}


export default CategoriesComponent;