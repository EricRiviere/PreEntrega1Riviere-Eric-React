import CyclingGif from "./assets/cyclist.gif";
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="text-center">
      <h1 className="mt-5">{greeting}</h1>
      <img className="img-fluid my-4" src={CyclingGif} alt="" />
    </div>
  );
};

export default ItemListContainer;
