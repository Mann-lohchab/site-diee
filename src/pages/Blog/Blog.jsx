import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const username = "Mann-lohchab";
  const repo = "Blog";
  const path = "blog";

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo}/contents/`
        );
        const files = await res.json();

        const mdFiles = files.filter((f) => f.name.endsWith(".md"));

        const postsData = await Promise.all(
          mdFiles.map(async (file) => {
            const resp = await fetch(file.download_url);
            const text = await resp.text();
            
            // Extract first 150 characters for preview
            const preview = text.length > 150 
              ? text.substring(0, 150) + "..." 
              : text;
            
            return { 
              name: file.name.replace(".md", ""), 
              content: text,
              preview: preview
            };
          })
        );

        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    }

    fetchPosts();
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closePost = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title">My Blog</h1>
      <div className="blog-container">
        {posts.map((post, i) => (
          <div className="blog-post-preview" key={i}>
            <h2>{post.name}</h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.preview}</ReactMarkdown>
            <button className="read-more-btn" onClick={() => openPost(post)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closePost}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePost}>
              &times;
            </button>
            <h2>{selectedPost.name}</h2>
            <div className="full-post-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}