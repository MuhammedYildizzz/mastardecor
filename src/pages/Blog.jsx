// App.js
import React, { useState } from "react";
import "./Blog.css"; // Harici CSS dosyası

const Blog = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "") return;
    
    const newPost = { name, message };
    setPosts([...posts, newPost]);
    setName("");
    setMessage("");
  };

  return (
    <div className="container">
      <h2>Deneyimlerinizi Ekleyin</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Mesajınızı yazın"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Gönder</button>
      </form>
      
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h3>{post.name}</h3>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;