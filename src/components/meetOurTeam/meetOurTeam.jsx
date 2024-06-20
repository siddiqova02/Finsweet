import "./meetOurTeam.css";

//Json
import meetOurTeam from "../data/meetOurTeam.json";

export const MeetOurTeam = () => {
  return (
    <>
      {meetOurTeam &&
        meetOurTeam.map((item) => {
          return (
            <div key={item.id}>
              <div className="team-card">
                <img src={item.images} alt="" />
                <p className="firstName">{item.firstName}</p>
                <p className="career">{item.career}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
