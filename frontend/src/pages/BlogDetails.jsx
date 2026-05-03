import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostBySlug } from "../services/postService";
import { fetchCommentsByPost, createComment } from "../services/commentService";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Comment form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  const [commentSubmitStatus, setCommentSubmitStatus] = useState("");

  // Fetch post details and comments
  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      try {
        const postRes = await fetchPostBySlug(slug);
        const postData = postRes.data;
        setPost(postData);
        const commentsRes = await fetchCommentsByPost(postData.id);
        const commentsData = commentsRes.data.results || commentsRes.data;
        setComments(commentsData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load post or comments.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post) return;
    setCommentSubmitStatus("Submitting...");
    try {
      const payload = {
        post: post.id,
        name: formData.name,
        email: formData.email,
        website: formData.website,
        content: formData.comment,
        parent: null,
      };
      const response = await createComment(payload);
      setComments((prev) => [response.data, ...prev]);
      setFormData({ name: "", email: "", website: "", comment: "" });
      setCommentSubmitStatus("Comment posted successfully!");
      setTimeout(() => setCommentSubmitStatus(""), 3000);
    } catch (err) {
      console.error("Error posting comment:", err);
      setCommentSubmitStatus("Failed to post comment. Please try again.");
    }
  };

  // Helper to navigate to blog with filter
  const applyTagFilter = (tagId) => {
    navigate(`/blog?tags=${tagId}`);
  };

  const applyCategoryFilter = (categoryId) => {
    navigate(`/blog?categories=${categoryId}`);
  };

  if (loading) {
    return (
      <div className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-teal-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">{error || "Post not found"}</p>
        </div>
      </div>
    );
  }

  const totalComments = comments.length;
  const readingTime = post.reading_time_str || `${post.reading_time || 3} min read`;
  const primaryCategory = post.categories?.[0];
  const publishedDate = new Date(post.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      {/* Page Title + Breadcrumb */}
      <section className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Blog Details
          </h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            {post.excerpt ||
              "Odio et unde deleniti. Deserunt numquam exercitationem."}
          </p>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-teal-500">
              <li>
                <a href="/" className="hover:text-emerald-600">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-emerald-600">Blog Details</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Blog Details Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article>
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={post.featured_image || "/assets/img/person-f-1.webp"}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex flex-wrap items-center gap-2 text-white text-sm">
                  {primaryCategory && (
                    <button
                      onClick={() => applyCategoryFilter(primaryCategory.id)}
                      className="bg-emerald-600 px-3 py-1 rounded-full hover:bg-emerald-700 transition"
                    >
                      {primaryCategory.name}
                    </button>
                  )}
                  <span className="mx-1">•</span>
                  <span>
                    <i className="bi bi-clock"></i> {readingTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
                  {post.title}
                </h1>

                {/* Author Info */}
                <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-teal-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author?.image || "/assets/img/person-f-1.webp"}
                      alt={post.author?.name || "Author"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-teal-800">
                        {post.author?.name || "Unknown Author"}
                      </h4>
                      <span className="text-sm text-teal-500">
                        {post.author?.role || "Writer"}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-teal-500">
                    <span>
                      <i className="bi bi-calendar3"></i> {publishedDate}
                    </span>
                    <span className="mx-2">•</span>
                    <span>
                      <i className="bi bi-chat-text"></i> {post.comments_count || totalComments} Comments
                    </span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Meta Bottom (Tags & Social Share) */}
              <div className="mt-12 pt-6 border-t border-teal-200">
                <div className="flex flex-wrap justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-teal-800 mb-3">
                      Related Topics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <button
                          key={tag.id}
                          onClick={() => applyTagFilter(tag.id)}
                          className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition"
                        >
                          {tag.name}
                        </button>
                      ))}
                      {(!post.tags || post.tags.length === 0) && (
                        <span className="text-teal-400">No tags</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-800 mb-3">
                      Share Article
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"
                      >
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Comments Section (unchanged) */}
      <section className="py-12 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-teal-200">
            <h3 className="text-2xl font-bold text-teal-800">
              Community Feedback
            </h3>
            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
              <span className="font-bold">{totalComments}</span> Comments
            </div>
          </div>

          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-6">
                <div className="flex gap-4">
                  <img
                    src="/assets/img/person-f-9.webp"
                    alt={comment.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-teal-800">
                            {comment.name}
                          </h4>
                          <span className="text-xs text-teal-500 flex items-center gap-1">
                            <i className="bi bi-clock"></i>{" "}
                            {new Date(comment.created_at).toLocaleString()}
                          </span>
                        </div>
                        <span className="text-sm text-teal-500">
                          <i className="bi bi-heart"></i> {comment.likes || 0}
                        </span>
                      </div>
                      <p className="text-teal-700">{comment.content}</p>
                    </div>
                    <div className="flex gap-4 mt-3 ml-8">
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1">
                        <i className="bi bi-heart"></i> Like
                      </button>
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1">
                        <i className="bi bi-chat"></i> Reply
                      </button>
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1">
                        <i className="bi bi-share"></i> Share
                      </button>
                    </div>
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-6 ml-8 space-y-6">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-4">
                            <img
                              src="/assets/img/person-f-8.webp"
                              alt={reply.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="bg-white p-4 rounded-xl shadow-sm">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                  <div>
                                    <h4 className="font-bold text-teal-800">
                                      {reply.name}
                                    </h4>
                                    <span className="text-xs text-teal-500">
                                      <i className="bi bi-clock"></i>{" "}
                                      {new Date(reply.created_at).toLocaleString()}
                                    </span>
                                  </div>
                                  <span className="text-sm text-teal-500">
                                    <i className="bi bi-heart"></i> {reply.likes || 0}
                                  </span>
                                </div>
                                <p className="text-teal-700 text-sm">
                                  {reply.content}
                                </p>
                              </div>
                              <div className="flex gap-4 mt-2 ml-8">
                                <button className="text-xs text-teal-500 hover:text-emerald-600">
                                  <i className="bi bi-heart"></i> Like
                                </button>
                                <button className="text-xs text-teal-500 hover:text-emerald-600">
                                  <i className="bi bi-chat"></i> Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-teal-500 text-center">
                No comments yet. Be the first to leave a comment!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Comment Form Section (unchanged) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal-800">
              Leave a Comment
            </h3>
            <p className="text-teal-500 mt-1">
              Your email address will not be published. Required fields are
              marked *
            </p>
            {commentSubmitStatus && (
              <p className="mt-2 text-sm text-emerald-600">{commentSubmitStatus}</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-teal-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-teal-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Your website (optional)"
              />
            </div>
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-teal-700 mb-1"
              >
                Your Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;