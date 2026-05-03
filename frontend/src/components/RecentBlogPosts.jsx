// frontend/src/components/RecentBlogPosts.jsx
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postService";

const RecentBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        const response = await fetchPosts({ page: 1, page_size: 3 });
        setPosts(response.data.results || []);
      } catch (err) {
        console.error("Error fetching recent posts:", err);
        setError("Failed to load recent posts.");
      } finally {
        setLoading(false);
      }
    };
    loadRecentPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-600">Loading recent posts...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null; // Hide section if no posts
  }

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Recent Blog Posts</h2>
          <p className="text-teal-500 mt-2">Latest articles from our team</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden group">
              <img
                src={post.featured_image || "/assets/img/person-f-7.webp"}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-5">
                <span className="text-emerald-600 text-sm">{formatDate(post.published_date)}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 line-clamp-2">{post.title}</h3>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-emerald-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;