import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handMarkedAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover pic of the ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author_name}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((tag, idx) => (
          <span key={idx}>
            <a href="">#{tag}, </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handMarkedAsRead(reading_time)}
        className="text-blue-700 font-bold underline"
      >
        Marked As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddBookmark: PropTypes.func,
  handMarkedAsRead: PropTypes.func,
};

export default Blog;
