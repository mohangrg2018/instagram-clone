import React from "react";
import Post from "./Post";

const Posts = () => {
  const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      username: "mohan",
      userPost:
        "https://images.unsplash.com/photo-1577981341106-24c46b64f332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyaW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      caption: "Hello all this is my caption",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      username: "Sita",
      userPost:
        "https://images.unsplash.com/photo-1518081711974-7adac3dd431b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NlbmFyaW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      caption: "Hello all this is my caption",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      username: "Hari",
      userPost:
        "https://images.unsplash.com/photo-1561708465-618441a93b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmFyaW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
      caption: "Hello all this is my caption",
    },
  ];
  return (
    <section className="my-10">
      {users.map((user) => (
        <div key={user.id}>
          <Post
            userProfile={user.img}
            username={user.username}
            PostImage={user.userPost}
            caption={user.caption}
          />
        </div>
      ))}
    </section>
  );
};

export default Posts;
