import "./howWeWorkCard.css";
import howWeWorkCard from "../data/howWeWorkCard.json";

export const HowWeWorkCard = () => {
  return (
    <>
      {howWeWorkCard &&
        howWeWorkCard.map((item) => {
          return (
            <div className="how-we-work-card" key={item.id}>
              <img className="how-we-work-card-img" src={item.images} alt="" />
              <h2>{item.title}</h2>
              <p className="how-we-work-card-text">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          );
        })}
    </>
  );
};
