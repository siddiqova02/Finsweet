import btn from "../../../public/assets/images/howWeWorkbtn.svg";

export const HowWeWork = () => {
  return (
    <div>
      <div className="how-we-work-title">
        <h1>How we work</h1>
        <p className="how-we-work-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <a href="#">
          <img src={btn} alt="" />
        </a>
      </div>
    </div>
  );
};
