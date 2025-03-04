import "./ImageSlider.css";
import ImgSrc from "../images/buddha.png";
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
          {imgArray.map((image) => (
            <div className="slider_item">
              <ImageContainer
                ImageDesc={image.desc}
                ImageSrc={image.src}
                ImageTitle={image.title}
                key={image.index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
