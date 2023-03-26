import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Header from "../Header";
import Footer from "../Footer";
import ServiceDropdown from "../ServiceDropdown";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  }



  return (
    <>
      { /**Header */}
      <Header></Header>

      
   
      { /**Body */}
      <div className='body'>
        <div className="presentationWrap">
          <div className="presentationContainer container">
          <div className="presentation row ">
            <img src="./img/4.png" ></img>
            <div className="textAndButton container">
            <h1>A saúde mental debe ser un dereito universal, non un privilexio.</h1><br></br>
            <p>Coa educación e a innovación como eixes, facilitamos recursos e materiais artístico-dixitais para a <strong>comunidade.</strong> 
            <br></br>
            Sexas quen sexas: curiosx, amigx, familiar ou profesional, mergúllate neste espazo seguro
            para <strong>ser, preguntar, aprender, desprogramar...</strong></p>
            <a>Coñécenos!</a> 
          </div>

        </div>
        

        </div>
        
      </div>

        { /**slider

        <Slider {...settings} className="slider">
          <div className="wrap">
            <img src="./img/1.png" className="wrapImg" alt="Image 6" />

            <a>Consulta</a>
          </div>
          <div className="wrap">

            <img src="./img/2.png" className="wrapImg" alt="Image 6" />
            <a>Consulta</a>
          </div>
          <div className="wrap">

            <img src="./img/3.png" className="wrapImg" alt="Image 6" />
            <a>Consulta</a>
          </div>
          <div className="wrap">
            <a>TOPIC4</a>
          </div>
        </Slider>
 */}
      
        
        { /**SERVICES */}
        
          
             <ServiceDropdown></ServiceDropdown>
      
            
          
        
  {/*CALL TO ACTION*/}

  <div className="actionWrap">
          <div className="actionContainer container">
            <div className="action row textCenter ">
              <div className="infoAction1 ">
               <h4> NON SABES O QUE ELEXIR?</h4>
               <p>Descubreo completando as seguintes preguntas</p>
               <div className="btnAction1 ">
                <a href="#" className="linkAction1 linkGeneral">XOGAR Ó QUIZ </a>
              </div>
              </div>
              

              <div className="infoAction2">
               <h4> PORQUÉ SORXE O PROXECTO?</h4>
               <p>Coñécenos un pouco máis</p>
               <div className="btnAction2">
                <a href="#" className="linkAction2 linkGeneral">MÁIS INFORMACIÓN</a>
              </div>
              </div>
              

            </div>

          </div>

        </div>
        { /**projects */}

        <div className="projectsGalleryWrap">
          <div className="projectsWalleryContainer">
          <div className="titleProjects">
            <h1>MERGÚLLATE<br></br> NOS PROXECTOS</h1>
          </div>
          <div className="projects hover01">
            <figure className="galleryItem galleryItem1 ">
              <a href="#"  className="linkGeneral">
                <img src="./img/I1.jpg" className="galleryImg" alt="Image 1" />
              </a>
            </figure>
            <figure className="galleryItem galleryItem2">
              <a href="#"   className="linkGeneral">
                <img src="./img/I2.jpg" className="galleryImg" alt="Image 2" />
              </a>
            </figure>
            <figure className="galleryItem galleryItem3">
              <a href="#"  className="linkGeneral">
                <img src="./img/I3.jpg" className="galleryImg" alt="Image 3" />
              </a>
            </figure>
            <figure className="galleryItem galleryItem4">
              <a  href="#" className="linkGeneral">
                <img src="./img/I4.png" className="galleryImg" alt="Image 4" />
              </a>
            </figure>
            <figure className="galleryItem galleryItem5">
              <a href="#" className="linkGeneral">
                <img src="./img/I5.png" className="galleryImg" alt="Image 5" />
              </a>
            </figure>
            <figure className="galleryItem galleryItem6">
              <a href="#"  className="linkGeneral">
                <img src="./img/I6.png" className="galleryImg" alt="Image 6" />
              </a>
            </figure>
          </div>
          </div>
        </div>

        { /**knowledge articles */}
        <div className="cardsArticlesWrap">   
          <div className="cardsArticlesContainer container">
            <div className="titleArticles">
              <h1>AQUELO<br></br> QUE NON TE ENSINARON</h1>
            </div>
            <div className="articles row">
              <article className="cardArticles db pr" id="article1">
                <a href="#" className="linkImgArticle oh db pr linkGeneral">
                  <div className="imgArticle">
                    <img src="./img/I6.png" alt="Image 6" />
                  </div>
                </a>
                <a href = "#" className="linkBtnArticles linkGeneral oh pr db">
                  how to
                </a>
                <div className="infoArticles db">
                  <h4>O TITULO DO ARTICULO </h4>
                  <div className="articleSummary">blablablablablabalablaablabalbalablabalbalaalabalabala</div>
                </div>
              </article>

              <article className="cardArticles db pr" id="article2">
                <a href="#" className="linkImgArticle oh db pr link">
                  <div className="imgArticle">
                    <img src="./img/I6.png" alt="Image 6" />
                  </div>
                </a>
                <a href = "#" className="linkBtnArticles linkGeneral oh pr db">
                  how to
                </a>
                <div className="infoArticles db">
                  <h4>O TITULO DO ARTICULO </h4>
                  <div className="articleSummary">blablablablablabalablaablabalbalablabalbalaalabalabala</div>
                </div>
              </article>
              
              <article className="cardArticles db pr" id="article3">
                <a href="#" className="linkImgArticle oh db pr link">
                  <div className="imgArticle">
                    <img src="./img/I6.png" alt="Image 6" />
                  </div>
                  
                </a>
                <a href = "#" className="linkBtnArticles linkGeneral oh pr db">
                  how to
                </a>
                <div className="infoArticles db">
                  <h4>O TITULO DO ARTICULO </h4>
                  <div className="articleSummary">blablablablablabalablaablabalbalablabalbalaalabalabala</div>
                </div>
              </article>

              <article className="cardArticles db pr" id="article4">
                <a href="#" className="linkImgArticle oh db pr link">
                  <div className="imgArticle">
                    <img src="./img/I6.png" alt="Image 6" />
                  </div>
                  
                </a>
                <a href = "#" className="linkBtnArticles linkGeneral oh pr db">
                  how to
                </a>
                <div className="infoArticles db">
                  <h4>O TITULO DO ARTICULO </h4>
                  <div className="articleSummary">blablablablablabalablaablabalbalablabalbalaalabalabala</div>
                </div>
              </article>
            </div>
          </div>
        </div>

        { /**footer*/}
        <Footer></Footer>

      </div>

    </>
  )
}

export default Home;