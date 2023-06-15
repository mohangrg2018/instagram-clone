import React from "react";
import Header from "./Header";
import MiddleContent from "./MiddleContent";
import RightSidebar from "./RightSidebar";

const HomePage = () => {
  return (
    <div className="grid grid-cols-[80px,1fr] xl:grid-cols-[250px,1fr,400px]">
      <Header />
      <MiddleContent />
      <RightSidebar />
    </div>
  );
};

export default HomePage;
