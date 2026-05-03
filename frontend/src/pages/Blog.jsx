// Blog.jsx
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postService";
import api from "../services/api"; // for fetching filter options

const Blog = () => {
  // Posts and pagination state
  const [posts, setPosts] = useState([]);
  const [sidePosts, setSidePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    pageSize: 9,
  });

  // Filter state
  const [filters, setFilters] = useState({
    category: "",
    tag: "",
    author: "",
  });

  // Filter options from API
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Fetch filter options (categories, tags, authors)
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [catRes, tagRes, authRes] = await Promise.all([
          api.get("/blog/categories/"),
          api.get("/blog/tags/"),
          api.get("/blog/authors/"),
        ]);
        setCategories(catRes.data);
        setTags(tagRes.data);
        setAuthors(authRes.data);
      } catch (err) {
        console.error("Error loading filter options:", err);
      }
    };
    fetchFilterOptions();
  }, []);

  // Fetch main posts with pagination and filters
  const loadPosts = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const params = {
        page,
        page_size: pagination.pageSize,
        ...(filters.category && { categories: filters.category }),
        ...(filters.tag && { tags: filters.tag }),
        ...(filters.author && { author: filters.author }),
      };
      const response = await fetchPosts(params);
      setPosts(response.data.results || []);
      setPagination({
        currentPage: response.data.current_page,
        totalPages: response.data.total_pages,
        totalItems: response.data.total_items,
        pageSize: response.data.page_size,
      });
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch latest posts for sidebar (4 most recent) – always unfiltered
  const loadSidePosts = async () => {
    try {
      const response = await fetchPosts({ page: 1, page_size: 4 });
      setSidePosts(response.data.results || []);
    } catch (err) {
      console.error("Error fetching side posts:", err);
    }
  };

  // Reload posts whenever filters change (reset to page 1)
  useEffect(() => {
    loadPosts(1);
  }, [filters]);

  // Initial load
  useEffect(() => {
    loadPosts(1);
    loadSidePosts();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      loadPosts(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: "", tag: "", author: "" });
  };

  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading && posts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-teal-600 text-xl">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.slice(1);

  return (
    <div>
      {/* Page Title + Breadcrumb */}
      <section className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Blog</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
          </p>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-teal-500">
              <li><a href="/" className="hover:text-emerald-600">Home</a></li>
              <li>/</li>
              <li className="text-emerald-600">Blog</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Blog Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar: First 2 sidebar posts */}
            <div className="lg:col-span-3 space-y-8">
              {sidePosts.slice(0, 2).map((post) => (
                <article key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={post.featured_image || "/assets/img/person-f-1.webp"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-xs text-white px-2 py-1 rounded bg-emerald-600">
                      {post.categories?.[0]?.name || "General"}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">
                      <a href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition">
                        {post.title}
                      </a>
                    </h3>
                    <div className="text-sm text-teal-500 mt-2">
                      <span>{formatDate(post.published_date)}</span>
                      <span className="mx-1">•</span>
                      <span>{post.comments_count || 0} Comments</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Middle Column: Featured Post */}
            <div className="lg:col-span-6">
              {featuredPost && (
                <article className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={featuredPost.featured_image || "/assets/img/person-f-5.webp"}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {featuredPost.categories?.[0]?.name || "Business"}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <a href={`/blog/${featuredPost.slug}`} className="hover:text-emerald-600 transition">
                        {featuredPost.title}
                      </a>
                    </h2>
                    <p className="text-teal-600 mt-3">{featuredPost.excerpt}</p>
                    <div className="text-sm text-teal-500 mt-4">
                      <span>{formatDate(featuredPost.published_date)}</span>
                      <span className="mx-1">•</span>
                      <span>{featuredPost.comments_count || 0} Comments</span>
                    </div>
                  </div>
                </article>
              )}
            </div>

            {/* Right Sidebar: Next 2 sidebar posts */}
            <div className="lg:col-span-3 space-y-8">
              {sidePosts.slice(2, 4).map((post) => (
                <article key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={post.featured_image || "/assets/img/person-f-3.webp"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-xs text-white px-2 py-1 rounded bg-emerald-600">
                      {post.categories?.[0]?.name || "General"}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">
                      <a href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition">
                        {post.title}
                      </a>
                    </h3>
                    <div className="text-sm text-teal-500 mt-2">
                      <span>{formatDate(post.published_date)}</span>
                      <span className="mx-1">•</span>
                      <span>{post.comments_count || 0} Comments</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Posts Grid (3 columns) */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={post.featured_image || "/assets/img/person-f-1.webp"}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-emerald-600 font-semibold mb-2">
                    {post.categories?.[0]?.name || "Uncategorized"}
                  </p>
                  <h3 className="text-xl font-bold mb-3">
                    <a href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition">
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={post.author?.image || "/assets/img/person-f-1.webp"}
                      alt={post.author?.name || "Author"}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-teal-800">{post.author?.name || "Unknown"}</p>
                      <p className="text-sm text-teal-500">{formatDate(post.published_date)}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pagination */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex flex-wrap gap-2">
              <li>
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className={`flex items-center gap-1 px-3 py-2 border rounded-lg transition ${
                    pagination.currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  <i className="bi bi-arrow-left"></i>
                  <span className="hidden sm:inline">Previous</span>
                </button>
              </li>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === pagination.totalPages ||
                  (page >= pagination.currentPage - 1 && page <= pagination.currentPage + 1)
                ) {
                  return (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 border rounded-lg ${
                          page === pagination.currentPage
                            ? "bg-emerald-600 text-white"
                            : "hover:bg-emerald-50 hover:text-emerald-600"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  );
                } else if (
                  (page === pagination.currentPage - 2 && pagination.currentPage > 3) ||
                  (page === pagination.currentPage + 2 && pagination.currentPage < pagination.totalPages - 2)
                ) {
                  return (
                    <li key={page} className="px-3 py-2 text-teal-400">
                      ...
                    </li>
                  );
                }
                return null;
              })}

              <li>
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className={`flex items-center gap-1 px-3 py-2 border rounded-lg transition ${
                    pagination.currentPage === pagination.totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Blog;