import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import './slider.scss'
const pictures = [
  {
    source:
      "./playground_assets/getinthezone.jpg",
    content: {
      date: "04.29.2020",
      desc: "Get in the Zone Album. "
    }
  },
  {
    source:
      "./playground_assets/pagsibol-album.jpg",
    content: {
      date: "04.28.2020",
      desc: "Pagsibol Album"
    }
  },
  {
    source: "./playground_assets/ligaya-album.jpg",
    content: {
      date: "04.28.2020",
      desc: "Ligaya Single"
    }
  },
  {
    source: "./playground_assets/nyebesb19.jpg",
    content: {
      date: "04.27.2020",
      desc: "Nyebe Single"
    }
  },
  {
    source: "./playground_assets/no-stopping-you.jpg",
    content: {
      date: "04.23.2020",
      desc: "No Stopping You Single"
    }
  },
  {
    source: "./playground_assets/theone-album.jpg",
    content: {
      date: "04.21.2020",
      desc: "The One Single"
    }
  },
  {
    source:"./playground_assets/win-your-heart-album.jpg",
    content: {
      date: "04.23.2020",
      desc: "Win Your Heart Single"
    }
  },
  {
    source: "./playground_assets/wyat-album.jpg",
    content: {
      date: "04.21.2020",
      desc: "Where Are You At Single"
    }
  }
];

const Slide = ({ imageSource, content }) => {
  return (
    <div className="slide">
      <div className="preview">
        <img src={imageSource} alt="The Plant" draggable="false" />
      </div>
      <div className="infos">
        <h3>{content.date}</h3>
        <h2>{content.desc}</h2>
      </div>
    </div>
  );
};

export const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    Draggable.create(sliderRef.current, {
      type: "x"
      /*bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      }*/
    });
  }, []);

  return (
    
    <div id="slider" className="slider" ref={sliderRef}>
        
      {pictures.map((item, index) => {
        return (
          <Slide key={index} imageSource={item.source} content={item.content} />
        );
      })}
    </div>
  );
};
