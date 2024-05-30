import CardBody from "./cardbody";
import CardImage from "./cardImage";

function Card({ nama, kelas, alamat, image , onDelete}) {
  return (
    <div className="card">
      <CardImage image={image} />
      <CardBody nama={nama} kelas={kelas} alamat={alamat} onDelete={onDelete}  />
      
    </div>
  );
}
export default Card;
