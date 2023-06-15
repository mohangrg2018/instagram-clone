import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

const MiddleContent = () => {
  return (
    <section className="w-[700px] mt-14 lg:ml-40 sm:ml-5">
      <Stories />
      <Posts />
    </section>
  );
};

export default MiddleContent;
