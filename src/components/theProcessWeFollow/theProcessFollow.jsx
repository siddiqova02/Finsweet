import "./theProcessWeFollow.css";

//Images
import Icons from "../../../public/assets/images/Line_and_Icon.svg";

//Json
import processWeFollow from "../data/theProcessWeFollow.json";

export const TheProcessFollow = () => {
  return (
    <>
      {processWeFollow &&
        processWeFollow.map((item) => {
          return (
            <div className="cards" key={item.id}>
              <img className="cards-img" src={Icons} alt="" />
              <h2 className="title">{item.title}</h2>
              <p className="text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          );
        })}
    </>
  );
};
