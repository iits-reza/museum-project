import "./ImageSlider.css";
import ImgSrc from "../images/item 01.png";
import ImageContainer from "./ImageContainer/ImageContainer";
const ImageSlider = () => {
  const imgArray = [
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
    {
      title: "Bamiyan",
      desc: "Lorem ipsum dolor!",
      src: ImgSrc,
    },
  ];
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__items">
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
          <div className="slider_item">
            <ImageContainer
              ImageDesc="Bamiyan"
              ImageSrc={ImgSrc}
              ImageTitle="Title "
              key={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
