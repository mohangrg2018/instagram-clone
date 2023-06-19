"use client";

import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);
  return (
    <section className="my-10">
      {posts.map((user) => (
        <div key={user.id}>
          <Post
            userProfile={user.data().profileImg}
            username={user.data().username}
            PostImage={user.data().image}
            caption={user.data().caption}
          />
        </div>
      ))}
    </section>
  );
};

export default Posts;
