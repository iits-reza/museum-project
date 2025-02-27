import "./ImageSlider.css";
import ImgSrc from "../images/buddha.png";
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
      {imgArray.map((image) => (
        <div className="slider__container">
          <h2>{image.title}</h2>
          <p>{image.desc}</p>
          <img src={image.src} alt={image.title} className="slider__image" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
