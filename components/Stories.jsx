import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const stories = minifaker.array(15, (i) => ({
      id: i,
      name: minifaker.username().toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    }));
    setStories(stories);
  }, []);
  return (
    <section className="w-full h-[100px] pl-5 flex items-center overflow-x-scroll gap-8">
      {stories.map((story) => (
        <div key={story.id}>
          <Story username={story.name} userImage={story.img} />
        </div>
      ))}
    </section>
  );
};

export default Stories;
