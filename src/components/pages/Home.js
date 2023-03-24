import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import InterestsIcon from '@mui/icons-material/Interests';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExtensionIcon from '@mui/icons-material/Extension';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Slider from "react-slick";

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

      
      <div className='header1'>

        <span><FavoriteIcon />a arte de coidarte</span>
      </div>
             
        <nav class="navBar">
        <input id="menuToggle" type="checkbox" />
        <label class='menuButtonContainer' for="menuToggle">
            <div class='menuButton'></div>
        </label>
        
        <p>LOGO HERE</p>
        
        <ul class="menu">
          <li><a href="#">NÓS</a></li>
          <li><a href="#"><InterestsIcon /></a></li>
          <li><a href="#"><SearchIcon /></a></li>
          <li><a href="#"><PersonIcon /></a></li>

        </ul>
      </nav>
      
      { /**Body */}
      <div className='body'>
        <div className="presentation">
          <img src="./img/4.png" ></img>
          <div className="textAndButton">
          <h1>A saúde mental debe ser un dereito universal, non un privilexio.</h1><br></br>
          <p>Coa educación e a innovación como eixes, facilitamos recursos e materiais artístico-dixitais para a <strong>comunidade.</strong> 
          <br></br>
          Sexas quen sexas: curiosx, amigx, familiar ou profesional, mergúllate neste espazo seguro
          para <strong>ser, preguntar, aprender, desprogramar...</strong></p>
          <a>Coñécenos!</a> 
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
        { /**education resources */}

        <div className="cardsServicesWrap">
          <div className="cardsServicesContainer" >
            <div className="titleServices">
              <h1>MATERIAIS<br></br> <strong>EDUCATIVOS</strong></h1>
            </div>
            <div className="cards" >
              <article className="cardServices db pr">
                <a href="#" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                  
                  <div className="iconService db ">
                    <i></i>
                    <VideoLibraryIcon className="cardIcon" />
                  </div>
                </a>
                <div className="infoServices db">
                  <h4>DIXITAL</h4>
                  <div className="serviceSummary">Creacións audiovisuais propias jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</div>
                </div>
              </article>

              <article className="cardServices db pr">
                <a href="#" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                  
                  <div className="iconService db">
                    <i></i>
                    <MenuBookIcon className="cardIcon" />
                  </div>
                </a>
                <div className="infoServices db">
                  <h4>GUIAS</h4>
                  <div className="serviceSummary"> Acordos de bo trato para a resolución de conflitos na aula, na familia, nas relacións, no traballo.  Caderno de Autocoñecemento para situacións de crise</div>
                </div>
              </article>
              <article className="cardServices db pr">
                <a href="#" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                  
                  <div className="iconService db">
                    <i ></i>
                    <ExtensionIcon className="cardIcon" />
                  </div>
                </a>
                <div className="infoServices db">
                  <h4>RECURSOS</h4>
                  <div className="serviceSummary"> Recursos dixitais disponibles para calquera persoa interesada</div>
                </div>
              </article>

              <article className="cardServices db pr">
                <a href="#" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                  <div className="iconService db">
                    <i ></i>
                    <SmartToyIcon className="cardIcon"/>
                  </div>
                </a>
                <div className="infoServices db">
                  <h4>XOGOS</h4>
                  <div className="serviceSummary"> Unha habitación propia (Mulleres na historia. Investigación) Fakenews (Concurso) Loita polos Dereitos Civís Escrita creativa</div>
                </div>
              </article>
      
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
          <div className="cardsArticlesContainer">
            <div className="titleArticles">
              <h1>O QUE NON<br></br> TE ENSINARON NA ESCOLA</h1>
            </div>
            <div className="articles">
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
      <div className="footer" >

      </div>
      



      </div>

    </>
  )
}

export default Home;