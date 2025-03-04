import "./ImageContainer.css";
const ImageContainer = ({ ImageTitle, ImageDesc, ImageSrc }) => {
  return (
    <div>
      <h2>{ImageTitle}</h2>
      <p>{ImageDesc}</p>
      <img
        width={800}
        src={ImageSrc}
        alt={ImageTitle}
        className="slider__image"
      />
    </div>
  );
};
export default ImageContainer;
