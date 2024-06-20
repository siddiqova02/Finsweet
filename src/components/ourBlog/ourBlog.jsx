import "./ourBlog.css";
import ourBlogBtn from "../../../public/assets/images/ourBlogBtn.svg"

export const OurBlog = ({images}) => {
  return (
      <div className="ourBlog-card">
        <img className="card-img" src={images} alt="" />
        <p className="card-date">19 Jan 2022</p>
        <p className="card-text1">
          How one Webflow user grew his single person consultancy from $0-100K
          in 14 months
        </p>
        <p className="card-text2">
          See how pivoting to Webflow changed one person’s sales strategy and
          allowed him to attract
        </p>
        <a href="#"><img src={ourBlogBtn} alt=""/></a>
      </div>
  );
};
