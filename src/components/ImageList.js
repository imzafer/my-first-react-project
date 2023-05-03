import ImageShow from "./ImageShow";
function ImageList({ image }) {
  const render = image.map(function (i) {
    return <ImageShow image={i} />;
  });

  return <div>{render}</div>;
}

export default ImageList;
