import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";

const Post = ({ userProfile, username, PostImage, caption }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col gap-6 mb-20 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={userProfile}
            alt="User Profile"
            className="w-[40px] object-cover rounded-full"
          />
          <p className="text-sm">{username}</p>
        </div>
        <BsThreeDots className="post__icon" />
      </div>
      <img
        src={PostImage}
        alt="Post Image"
        className="w-full h-[400px] object-cover rounded-md"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <AiOutlineHeart className="post__icon" />
          <AiOutlineMessage className="post__icon" />
          <BiNavigation className="post__icon" />
        </div>
        <BsBookmark className="post__icon" />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-xs ">{caption}</p>
      </div>
      <form onSubmit={handleFormSubmit} className="flex justify-between mb-5">
        <input
          type="text"
          placeholder="Add a comment..."
          className="text-sm flex-1 outline-none"
        />
        <button type="button">Post</button>
      </form>
    </section>
  );
};

export default Post;
