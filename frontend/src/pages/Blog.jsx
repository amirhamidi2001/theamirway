const Blog = () => {
  const posts = [
    {
      id: 1,
      img: "/assets/img/person-f-1.webp",
      category: "Politics",
      title: "Dolorum optio tempore voluptas dignissimos",
      author: "Maria Doe",
      authorImg: "/assets/img/person-f-1.webp",
      date: "Jan 1, 2022",
    },
    {
      id: 2,
      img: "/assets/img/person-f-2.webp",
      category: "Sports",
      title: "Nisi magni odit consequatur autem nulla dolorem",
      author: "Allisa Mayer",
      authorImg: "/assets/img/person-f-2.webp",
      date: "Jun 5, 2022",
    },
    {
      id: 3,
      img: "/assets/img/person-f-3.webp",
      category: "Entertainment",
      title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      author: "Mark Dower",
      authorImg: "/assets/img/person-f-3.webp",
      date: "Jun 22, 2022",
    },
    {
      id: 4,
      img: "/assets/img/person-f-4.webp",
      category: "Sports",
      title: "Non rem rerum nam cum quo minus olor distincti",
      author: "Lisa Neymar",
      authorImg: "/assets/img/person-f-4.webp",
      date: "Jun 30, 2022",
    },
    {
      id: 5,
      img: "/assets/img/person-f-5.webp",
      category: "Politics",
      title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      author: "Denis Peterson",
      authorImg: "/assets/img/person-f-5.webp",
      date: "Jan 30, 2022",
    },
    {
      id: 6,
      img: "/assets/img/person-f-6.webp",
      category: "Entertainment",
      title: "Distinctio provident quibusdam numquam aperiam aut",
      author: "Mika Lendon",
      authorImg: "/assets/img/person-f-6.webp",
      date: "Feb 14, 2022",
    },
  ];

  const sidePosts = [
    {
      id: 1,
      img: "/assets/img/person-f-1.webp",
      category: "Entertainment",
      title: "Maecenas tempus tellus eget condimentum rhoncus semper quam",
      date: "March 15, 2025",
      comments: 3,
    },
    {
      id: 2,
      img: "/assets/img/person-f-2.webp",
      category: "Technology",
      title: "Donec pede justo fringilla vel aliquet nec vulputate eget",
      date: "March 14, 2025",
      comments: 5,
    },
    {
      id: 3,
      img: "/assets/img/person-f-3.webp",
      category: "Technology",
      title: "Aenean vulputate eleifend tellus aenean leo ligula porttitor",
      date: "March 13, 2025",
      comments: 2,
    },
    {
      id: 4,
      img: "/assets/img/person-f-4.webp",
      category: "Lifestyle",
      title: "Etiam sit amet orci eget eros faucibus tincidunt duis leo",
      date: "March 12, 2025",
      comments: 4,
    },
  ];

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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {sidePosts.slice(0, 2).map((post) => (
                <article key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={post.img} alt={post.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                    <span className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded ${
                      post.category === "Entertainment" ? "bg-red-500" : 
                      post.category === "Technology" ? "bg-green-500" : "bg-purple-500"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">
                      <a href={`/blog/${post.id}`} className="hover:text-emerald-600 transition">
                        {post.title}
                      </a>
                    </h3>
                    <div className="text-sm text-teal-500 mt-2">
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="lg:col-span-6">
              <article className="group">
                <div className="relative overflow-hidden rounded-xl">
                  <img src="/assets/img/person-f-5.webp" alt="Main post" className="w-full h-80 object-cover transition-transform group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">Business</span>
                </div>
                <div className="mt-6">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    <a href="/blog/main" className="hover:text-emerald-600 transition">
                      Curabitur ullamcorper ultricies nisi nam eget dui etiam rhoncus
                    </a>
                  </h2>
                  <p className="text-teal-600 mt-3">
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                  </p>
                  <div className="text-sm text-teal-500 mt-4">
                    <span>March 16, 2025</span>
                    <span className="mx-1">•</span>
                    <span>8 Comments</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="lg:col-span-3 space-y-8">
              {sidePosts.slice(2, 4).map((post) => (
                <article key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={post.img} alt={post.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                    <span className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded ${
                      post.category === "Lifestyle" ? "bg-pink-500" : 
                      post.category === "Technology" ? "bg-green-500" : "bg-red-500"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">
                      <a href={`/blog/${post.id}`} className="hover:text-emerald-600 transition">
                        {post.title}
                      </a>
                    </h3>
                    <div className="text-sm text-teal-500 mt-2">
                      <span>{post.date}</span>
                      <span className="mx-1">•</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden group">
                <div className="overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-56 object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-sm text-emerald-600 font-semibold mb-2">{post.category}</p>
                  <h3 className="text-xl font-bold mb-3">
                    <a href={`/blog/${post.id}`} className="hover:text-emerald-600 transition">
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 mt-4">
                    <img src={post.authorImg} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-teal-800">{post.author}</p>
                      <p className="text-sm text-teal-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#" className="flex items-center gap-1 px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition">
                  <i className="bi bi-arrow-left"></i>
                  <span className="hidden sm:inline">Previous</span>
                </a>
              </li>
              <li><a href="#" className="px-3 py-2 border rounded-lg bg-emerald-600 text-white">1</a></li>
              <li><a href="#" className="px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600">2</a></li>
              <li><a href="#" className="px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600">3</a></li>
              <li className="px-3 py-2 text-teal-400">...</li>
              <li><a href="#" className="px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600">8</a></li>
              <li><a href="#" className="px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600">9</a></li>
              <li><a href="#" className="px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600">10</a></li>
              <li>
                <a href="#" className="flex items-center gap-1 px-3 py-2 border rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition">
                  <span className="hidden sm:inline">Next</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Blog;