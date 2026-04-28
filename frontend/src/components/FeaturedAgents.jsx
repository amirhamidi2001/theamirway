const agents = [
  { name: "Lisa Thompson", title: "Luxury Property Expert", sales: "150+", rating: "4.9", location: "Miami Beach", img: "/assets/img/person-f-2.webp", badge: "Top Agent" },
  { name: "Robert Chen", title: "Commercial Specialist", sales: "90+", rating: "4.8", location: "Downtown", img: "/assets/img/person-f-3.webp", badge: "Certified" },
  { name: "Maria Gonzalez", title: "Residential Advisor", sales: "75+", rating: "4.9", location: "Suburbs", img: "/assets/img/person-f-4.webp", badge: "Rising Star" },
];

const FeaturedAgents = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Featured Agents</h2>
          <p className="text-teal-500 mt-2">Necessitatibus eius consequatur ex aliquid fuga</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img src={agent.img} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                  <a href="#" className="bg-white p-2 rounded-full text-emerald-600 hover:bg-emerald-600 hover:text-white"><i className="bi bi-telephone"></i></a>
                  <a href="#" className="bg-white p-2 rounded-full text-emerald-600 hover:bg-emerald-600 hover:text-white"><i className="bi bi-envelope"></i></a>
                </div>
                <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">{agent.badge}</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{agent.name}</h3>
                <p className="text-emerald-600 text-sm">{agent.title}</p>
                <div className="flex justify-center gap-6 my-4">
                  <div><span className="block font-bold text-emerald-600">{agent.sales}</span><span className="text-xs">Sales</span></div>
                  <div><span className="block font-bold text-emerald-600">{agent.rating}</span><span className="text-xs">Rating</span></div>
                </div>
                <p className="text-teal-500 text-sm"><i className="bi bi-geo-alt"></i> {agent.location}</p>
                <a href="#" className="mt-4 inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm hover:bg-emerald-700">View Profile</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;