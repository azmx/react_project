import { getData } from "./data";
function CardImage ({image}) {
    return(
        <div className="cardImage">
        <img src={image} alt="" width="300" height="" />
        </div>
    );
}
export default CardImage;