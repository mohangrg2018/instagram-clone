import React from "react";

const Story = ({ username, userImage }) => {
  return (
    <section className="flex flex-col gap-2 items-center">
      <img
        src={userImage}
        alt="user story image"
        className="w-[60px] object-cover rounded-full outline outline-offset-2 outline-red-600"
      />
      <p className="text-sm truncate w-12">{username}</p>
    </section>
  );
};

export default Story;
