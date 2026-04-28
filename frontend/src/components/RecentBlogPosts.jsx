const posts = [
  { title: "Eum ad dolor et. Autem aut fugiat debitis", date: "December 12", img: "/assets/img/person-f-7.webp" },
  { title: "Et repellendus molestiae qui est sed omnis", date: "July 17", img: "/assets/img/person-f-8.webp" },
  { title: "Quia assumenda est et veritati tirana ploder", date: "September 05", img: "/assets/img/person-f-9.webp" },
];

const RecentBlogPosts = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Recent Blog Posts</h2>
          <p className="text-teal-500 mt-2">Latest articles from our team</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={post.img} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-emerald-600 text-sm">{post.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <a href="#" className="text-emerald-600 font-semibold inline-flex items-center gap-1">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;