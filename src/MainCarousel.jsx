import React from "react";
import Slider from "react-slick";
import "./MainCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faManatSign as ManatIcon } from "@fortawesome/free-solid-svg-icons";
import { faDollar as DollarIcon } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { addToCard, getProducts, getProductLaptop } from './services/api';
import { useCart } from 'react-use-cart';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const MainCarousel = ({ content, language, setLanguage }) => {
  const LStorage = window.localStorage;

  const [course, SetCourse] = useState(() => {
    return JSON.parse(LStorage.getItem("determinedCourse")) || "dollar"
  });
  const [likedArray, SetLikedArray] = useState(() => {
    return JSON.parse(LStorage.getItem("likedArray")) || []
  });
  const [basketArray, SetBasketArray] = useState(() => {
    return JSON.parse(LStorage.getItem("basketArray")) || []
  });
  const navigate = useNavigate();


  const [products, setProducts] = useState([]);
  const [productlaptop, setProductLaptop] = useState([]);
  const [cart, setCart] = useState([])



  const AddCart = () => {
    addItem(products);
  }
  useEffect(() => {

    // load products
    getProductList();
    getProductLaptops();

  }, []);

  const getProductList = async () => {
    const get_products = await getProducts([])
    setProducts(old_data => get_products);
  }
  const getProductLaptops = async () => {
    const get_laptopproduct = await getProductLaptop([])
    setProductLaptop(old_data => get_laptopproduct);
  }

  const likeProduct = (productId, e) => {
    e.preventDefault()
    if (likedArray.indexOf(productId) === -1) {
      SetLikedArray(old_ids => [...old_ids, productId]);
      
      console.log(likedArray);
    } else {
      let temp_arr = likedArray.filter(id => id !== productId);
      LStorage.setItem("likedArray", JSON.stringify(temp_arr));
      SetLikedArray(old_data => temp_arr);
    }
  }
  LStorage.setItem("likedArray", JSON.stringify(likedArray));


  function basketProduct(productId, e) {
    e.preventDefault();

    if (basketArray.indexOf(productId) === -1) {
      SetBasketArray(old_ids => [...old_ids, productId]);

      console.log(basketArray);
      LStorage.setItem("basketArray", JSON.stringify(basketArray));
    } else {
      let temp_arr = basketArray.filter(id => id !== productId);

      LStorage.setItem("basketArray", JSON.stringify(basketArray));

      SetBasketArray(old_array => temp_arr);

    }

    console.log(JSON.parse(localStorage.getItem("likedArray")));

  }
  LStorage.setItem("basketArray", JSON.stringify(basketArray));


  const determineCourse = (e) => {
    SetCourse(old_data => e.target.value)

    LStorage.setItem("determinedCourse", JSON.stringify(e.target.value));
    console.log(course)
  }



  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <div className="Main_Carousel">
      <b>{content.Smartfon}</b>
      <Slider {...settings}>

        {
          products?.map((product) => {
            return (
              <div>
                <div className="EveryCarousel">
                  <a href="">

                    <div className="orders">
                      <span className="firstKomissiyasiz">{content.Komissiya}</span>
                      <span className="firstFaizsiz">{content.Faiz}</span>
                    </div>
                    <button type={"button"} className="like_button" onClick={(e) => likeProduct(product.title, e)}><img width={'30px'} height={'30px'} src={likedArray.indexOf(product.title) === -1 ? "https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-noir-1.png" : 'https://www.freeiconspng.com/uploads/heart-png-15.png'} /></button>
                    <button className="basket_button" onClick={(e) => basketProduct(product.title, e)}><img width={'30px'} height={'30px'} src={basketArray.indexOf(product.title) === -1 ? "https://cdn-icons-png.flaticon.com/512/34/34627.png" : 'https://w7.pngwing.com/pngs/462/263/png-transparent-shopping-cart-computer-icons-icon-design-shopping-cart.png'} /></button>
                    <div className="ImgCarousel"> <img src={product.thumbnail} /></div>
                    <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
                    <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />{content.Ay} </span></div>
                    <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
                  </a>
                </div>


              </div>

            )

          })
        }


      </Slider>
      <div className="Main_Carousel">
        <b>{content.Noutbuks}</b>
        <Slider {...settings}>
          {
            productlaptop?.map((product) => {
              return (
                <div>
                  <div className="EveryCarousel">
                    <a href="">

                      <div className="orders">
                        <span className="firstKomissiyasiz">{content.Komissiya}</span>
                        <span className="firstFaizsiz">{content.Faiz}</span>
                      </div>
                      <button type={"button"} className="like_button" onClick={(e) => likeProduct(product.title, e)}><img width={'30px'} height={'30px'} src={likedArray.indexOf(product.title) === -1 ? "https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-noir-1.png" : 'https://www.freeiconspng.com/uploads/heart-png-15.png'} /></button>
                      <button className="basket_button" onClick={(e) => basketProduct(product.title, e)}><img width={'30px'} height={'30px'} src={basketArray.indexOf(product.title) === -1 ? "https://cdn-icons-png.flaticon.com/512/34/34627.png" : 'https://w7.pngwing.com/pngs/462/263/png-transparent-shopping-cart-computer-icons-icon-design-shopping-cart.png'} /></button>

                      <div className="ImgCarousel"> <img src={product.thumbnail} /></div>
                      <div className="Mehsullarin_adlari"><span>{product.title}</span></div>
                      <div className="KreditSpan"><span>0 <FontAwesomeIcon className="ManatIcon1" icon={ManatIcon} />{content.Ay} </span></div>
                      <div className="QiymetSpan"> <span>{product.price} <FontAwesomeIcon className="ManatIcon2" icon={ManatIcon} /></span></div>
                      {/* <div className="Mehsulbtn"> <button onClick={AddCart}>{content.Sebetat}</button></div> */}
                    </a>
                  </div>


                </div>
 

              )

            })
          }
        </Slider>


      </div>
    </div>


  )
}
export default MainCarousel;