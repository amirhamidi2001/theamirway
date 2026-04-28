import { useState } from "react";

const BlogDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
  };

  const comments = [
    {
      id: 1,
      name: "Thomas Anderson",
      avatar: "/assets/img/person-f-9.webp",
      time: "2 hours ago",
      likes: 24,
      content: "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.",
      replies: [
        {
          id: 11,
          name: "Maria Rodriguez",
          avatar: "/assets/img/person-f-8.webp",
          time: "1 hour ago",
          likes: 8,
          content: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.",
        },
        {
          id: 12,
          name: "Alex Chen",
          avatar: "/assets/img/person-f-7.webp",
          time: "30 minutes ago",
          likes: 5,
          content: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
        },
      ],
    },
    {
      id: 2,
      name: "Emily Watson",
      avatar: "/assets/img/person-f-6.webp",
      time: "3 hours ago",
      likes: 15,
      content: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
      replies: [],
    },
  ];

  return (
    <div>
      {/* Page Title + Breadcrumb */}
      <section className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Blog Details</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
          </p>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-teal-500">
              <li><a href="/" className="hover:text-emerald-600">Home</a></li>
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
                src="/assets/img/person-f-1.webp"
                alt="Featured blog image"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex flex-wrap items-center gap-2 text-white text-sm">
                  <a href="#" className="bg-emerald-600 px-3 py-1 rounded-full">Web Development</a>
                  <span className="mx-1">•</span>
                  <span><i className="bi bi-clock"></i> 6 min read</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">
                  Modern Web Development: Best Practices and Future Trends for 2025
                </h1>

                {/* Author Info */}
                <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-teal-200">
                  <div className="flex items-center gap-3">
                    <img src="/assets/img/person-f-1.webp" alt="Author" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-teal-800">Michael Chen</h4>
                      <span className="text-sm text-teal-500">Senior Web Developer</span>
                    </div>
                  </div>
                  <div className="text-sm text-teal-500">
                    <span><i className="bi bi-calendar3"></i> Mar 15, 2025</span>
                    <span className="mx-2">•</span>
                    <span><i className="bi bi-chat-text"></i> 18 Comments</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="lead text-xl text-teal-700 font-medium">
                  The landscape of web development continues to evolve at an unprecedented pace, bringing new technologies, frameworks, and methodologies that reshape how we build modern web applications.
                </p>

                <p>
                  As we delve into 2025, the web development ecosystem has transformed dramatically, introducing innovative approaches to building faster, more secure, and highly engaging web experiences. This comprehensive guide explores the latest trends and best practices that are defining the future of web development.
                </p>

                {/* Floating Image (right-aligned on desktop) */}
                <div className="md:float-right md:ml-6 md:w-1/2 mb-4">
                  <img src="/assets/img/person-f-2.webp" alt="Modern web development tools" className="rounded-xl shadow-md w-full" />
                  <figcaption className="text-sm text-teal-500 mt-2 text-center">Modern development environments emphasize collaboration and efficiency</figcaption>
                </div>

                <h2 className="text-2xl font-bold text-teal-800 mt-8">The Rise of Web Components</h2>
                <p>
                  Web Components have become increasingly crucial in modern web development, offering a standardized way to create reusable custom elements. Key advantages include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enhanced code reusability across different frameworks</li>
                  <li>Better encapsulation of functionality</li>
                  <li>Improved maintenance and scalability</li>
                  <li>Framework-agnostic component development</li>
                </ul>

                {/* Highlight Box */}
                <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-600 my-8">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">Key Trends in 2025</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><i className="bi bi-lightning-charge text-emerald-600 text-xl"></i><span>Edge Computing and Serverless Architecture</span></li>
                    <li className="flex items-center gap-3"><i className="bi bi-shield-check text-emerald-600 text-xl"></i><span>Enhanced Security Measures</span></li>
                    <li className="flex items-center gap-3"><i className="bi bi-phone text-emerald-600 text-xl"></i><span>Progressive Web Apps (PWAs)</span></li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-teal-800 mt-8">Performance Optimization</h2>
                <p>
                  Performance remains a critical factor in web development, with an increasing focus on Core Web Vitals and user experience metrics. Modern applications must be optimized for both speed and efficiency.
                </p>

                {/* Blockquote */}
                <blockquote className="italic border-l-4 border-emerald-600 pl-6 py-2 my-8 text-teal-700 bg-teal-50 rounded-r-xl">
                  <p className="text-lg">
                    "The future of web development lies not just in writing code, but in creating seamless, accessible, and performant experiences that work for everyone, everywhere."
                  </p>
                  <cite className="block text-sm text-teal-500 mt-2 not-italic">— Emily Thompson, Web Performance Architect</cite>
                </blockquote>

                {/* Content Grid (two cards) */}
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <i className="bi bi-speedometer2 text-emerald-600 text-3xl"></i>
                    <h4 className="text-xl font-bold mt-3 mb-2">Performance Metrics</h4>
                    <p className="text-teal-600">Focus on Core Web Vitals and user-centric performance metrics for better search rankings and user experience.</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <i className="bi bi-universal-access text-emerald-600 text-3xl"></i>
                    <h4 className="text-xl font-bold mt-3 mb-2">Accessibility</h4>
                    <p className="text-teal-600">Implementing WCAG guidelines and ensuring web applications are accessible to all users across different devices.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-teal-800 mt-8">Looking Forward</h2>
                <p>
                  As we continue through 2025, web development practices will further evolve, embracing new technologies while maintaining a strong foundation in performance, accessibility, and user experience. Staying updated with these trends and best practices is crucial for developers looking to build modern, scalable web applications.
                </p>
              </div>

              {/* Meta Bottom (Tags & Social Share) */}
              <div className="mt-12 pt-6 border-t border-teal-200">
                <div className="flex flex-wrap justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-teal-800 mb-3">Related Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      <a href="#" className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition">Web Development</a>
                      <a href="#" className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition">Performance</a>
                      <a href="#" className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition">Best Practices</a>
                      <a href="#" className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition">Trends</a>
                      <a href="#" className="bg-teal-100 hover:bg-emerald-600 hover:text-white px-3 py-1 rounded-full text-sm transition">2025</a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-800 mb-3">Share Article</h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"><i className="bi bi-twitter-x"></i></a>
                      <a href="#" className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"><i className="bi bi-facebook"></i></a>
                      <a href="#" className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"><i className="bi bi-linkedin"></i></a>
                      <a href="#" className="w-10 h-10 bg-teal-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center transition"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-teal-200">
            <h3 className="text-2xl font-bold text-teal-800">Community Feedback</h3>
            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
              <span className="font-bold">12</span> Comments
            </div>
          </div>

          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-6">
                {/* Main comment */}
                <div className="flex gap-4">
                  <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="bg-white p-5 rounded-xl shadow-sm">
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                        <div>
                          <h4 className="font-bold text-teal-800">{comment.name}</h4>
                          <span className="text-xs text-teal-500 flex items-center gap-1"><i className="bi bi-clock"></i> {comment.time}</span>
                        </div>
                        <span className="text-sm text-teal-500"><i className="bi bi-heart"></i> {comment.likes}</span>
                      </div>
                      <p className="text-teal-700">{comment.content}</p>
                    </div>
                    <div className="flex gap-4 mt-3 ml-8">
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1"><i className="bi bi-heart"></i> Like</button>
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1"><i className="bi bi-chat"></i> Reply</button>
                      <button className="text-sm text-teal-500 hover:text-emerald-600 flex items-center gap-1"><i className="bi bi-share"></i> Share</button>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-6 ml-8 space-y-6">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-4">
                            <img src={reply.avatar} alt={reply.name} className="w-10 h-10 rounded-full object-cover" />
                            <div className="flex-1">
                              <div className="bg-white p-4 rounded-xl shadow-sm">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                  <div>
                                    <h4 className="font-bold text-teal-800">{reply.name}</h4>
                                    <span className="text-xs text-teal-500"><i className="bi bi-clock"></i> {reply.time}</span>
                                  </div>
                                  <span className="text-sm text-teal-500"><i className="bi bi-heart"></i> {reply.likes}</span>
                                </div>
                                <p className="text-teal-700 text-sm">{reply.content}</p>
                              </div>
                              <div className="flex gap-4 mt-2 ml-8">
                                <button className="text-xs text-teal-500 hover:text-emerald-600"><i className="bi bi-heart"></i> Like</button>
                                <button className="text-xs text-teal-500 hover:text-emerald-600"><i className="bi bi-chat"></i> Reply</button>
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
          </div>
        </div>
      </section>

      {/* Comment Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal-800">Leave a Comment</h3>
            <p className="text-teal-500 mt-1">Your email address will not be published. Required fields are marked *</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-teal-700 mb-1">Full Name *</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-teal-700 mb-1">Email Address *</label>
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
              <label htmlFor="website" className="block text-sm font-medium text-teal-700 mb-1">Website</label>
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
              <label htmlFor="comment" className="block text-sm font-medium text-teal-700 mb-1">Your Comment *</label>
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