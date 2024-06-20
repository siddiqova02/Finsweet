import "./fearutesCard.css";
import featuresCard from "../data/featuresCard.json";

export const FeaturesCard = () => {
  return (
    <>
      {featuresCard &&
        featuresCard.map((item) => {
          return (
            <div className="features_card" key={item.id}>
              <img className="features_card_icon" src={item.images} alt="" />
              <h2 className="features_card_title">{item.title}</h2>
              <p className="features_card_text">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>
            </div>
          );
        })}
    </>
  );
};
