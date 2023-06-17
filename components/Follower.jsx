import React from "react";

const Follower = ({ userImage, username }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={userImage}
          alt="user profile"
          className="w-[40px] object-cover rounded-full"
        />
        <p className="text-sm">{username}</p>
      </div>
      <button type="button" className="text-sm text-blue-500">
        Follow
      </button>
    </div>
  );
};

export default Follower;
