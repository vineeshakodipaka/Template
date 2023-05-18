import React from "react";
import Carousel from "react-elastic-carousel";
import { Card, Pagination } from "react-bootstrap";
import items from './row3info';
import './style.css'
const breakPoints = [
  
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

function Sliding() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    carouselRef.current.goTo(index);
  };

  return (
    <>
      <div className="App">
        <Carousel

          breakPoints={breakPoints}
          disableArrowsOnEnd={false}
          isInfinite
          isRTL={false}
          enableSwipe={false}
          ref={carouselRef}
          onSlideChange={(currentItem, activePage) => setActiveIndex(activePage)}
          renderPagination={({ pages, activePage }) => (
            <div style={{ textAlign: "center" }}>
              <Pagination>
                {items.map((_, index) => (
                  <Pagination.Item
                    key={index}
                    onClick={() => handleDotClick(index)} >
                    <span 
                      style={{
                        display: "block",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                        border: "none",
                      }}
                    >.</span>
                    <span className="visually-hidden" >{index + 1}</span>
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          )} >
          {items.map((item, index) => (
                 <Card key={item.id} class="card1" style={{ width: "23rem",height:"30rem" }}>
              
                            <Card.Body>
                                <div>
                                  <img
                                   src={item.img3}
                                   alt={item.title}
                                   style={{ width: "50px", height: "50px", top: 10, left: 10 }}
                                 />
                                 <Card.Text className="text1">"{item.text1}"</Card.Text>
                                 <Card.Text  className="text2">{item.text2}</Card.Text>
                                 <Card.Text  className="text3">{item.text3}</Card.Text>
                                 </div>
                           </Card.Body>
                   </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Sliding;


