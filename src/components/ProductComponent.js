
import { useState } from 'react';
import '../Assets/index.css';
import img1 from '../Assets/Images/item-1.jpg';
import img2 from '../Assets/Images/item-2.jpg';
import img3 from '../Assets/Images/item-3.jpg';
import img4 from '../Assets/Images/item-4.jpg';
import img5 from '../Assets/Images/item-5.jpg';
import img6 from '../Assets/Images/item-6.jpg';


function ProductComponent() {

    const [img, setImage] = useState(img1);
    const imgArray1 = [img1, img2, img3];
    const imgArray2 = [img4, img5, img6];
    const loadImage = (event) => {
        setImage(event.target.src)
    };



    const arrayList1 = imgArray1.map((img) => {
        return (
            <div className="col w-100 p-0"><img onClick={loadImage} className="img-fluid" src={img} alt="cute cat" /></div>)
    });


    const arrayList2 = imgArray2.map((img) => {
        return (
            <div className="col p-0"><img onClick={loadImage} className="img-fluid" src={img} alt="nice cat" /></div>)
    });



    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <h2 style={{color: 'green', fontFamily: 'impact',  display: 'flex', justifyContent: 'left'}}>Tiny notice books</h2>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col p-0">
                                <img className="img-fluid" src={img} style={{margin: "4px"}} alt="sweet cat"/>
                            </div>
                        </div>
                        <div className="row">
                            {arrayList1}
                        </div>
                        <div className="row">
                            {arrayList2}
                        </div>
                    </div>
                    <div className="col-8">
                        <p className="text-align text-wrap"> 
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
              Here goes some additional sentence which is describing tiny notice books' sortiment.
              The next sentences are about experiences with tiny books.                        </p>
                        <p className="text-align text-wrap">
                        This is some text about our tiny notice books.
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              
              And this is some more text.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              And this is some more text.
            
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny notice books.
              This is some text about our tiny notice books.
              Here goes some additional sentence which is describing our tiny notice books' sortiment.
              The next sentences are about our customers' experiences with tiny books.                        </p>
                    </div>
                </div>
            </div>
        </div>
       
    )

    }
export default ProductComponent;

