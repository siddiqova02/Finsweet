import "./frequentlyAskedQuestions.css";

export const FrequentlyAskedQuestions = () => {
  return (
    <div>
      <div className="frequently_Asked_Questions_section">
        <div className="frequently_Asked_Questions">
          <h1 className="frequently_Asked_title">Frequently asked questions</h1>
          <a className="questions_btn" href="#">
            Contact us for more info
          </a>
        </div>
        <div className="questions">
          <div className="number_questions">
            <p className="number">01</p>
            <p className="question">How much time does it take?</p>
            <a href="#">+</a>
          </div>
          <span></span>
          <div className="number_questions">
            <p className="number">02</p>
            <p className="question">What is your class naming convention?</p>
            <a href="#">+</a>
          </div>
          <span></span>
          <div className="number_questions">
            <p className="number">03</p>
            <p className="question">How do you communicate?</p>
            <a href="#">+</a>
          </div>
          <span></span>
          <div className="number_questions">
            <p className="number">04</p>
            <p className="question">
              I have a bigger project. Can you handle it?
            </p>
            <a href="#">+</a>
          </div>
          <span></span>
          <div className="number_questions">
            <p className="number">05</p>
            <p className="question">What is your class naming convention?</p>
            <a href="#">+</a>
          </div>
        </div>
      </div>
    </div>
  );
};
