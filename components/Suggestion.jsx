import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Follower from "./Follower";

const Suggestion = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const users = minifaker.array(5, (i) => ({
      id: i,
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      name: minifaker.username(),
    }));
    setUsers(users);
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <p>Suggested for you</p>
        <p>See All</p>
      </div>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <div key={user.id}>
            <Follower userImage={user.img} username={user.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
