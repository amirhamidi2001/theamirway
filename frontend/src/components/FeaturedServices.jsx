const services = [
  { icon: "bi-search", title: "Property Search", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", num: "01" },
  { icon: "bi-graph-up", title: "Market Analysis", desc: "Ut enim ad minim veniam quis nostrud exercitation.", num: "02", featured: true },
  { icon: "bi-key", title: "Property Management", desc: "Excepteur sint occaecat cupidatat non proident.", num: "03" },
  { icon: "bi-shield-check", title: "Legal Support", desc: "Sed ut perspiciatis unde omnis iste natus error.", num: "04" },
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Featured Services</h2>
          <p className="text-teal-500 mt-2">Necessitatibus eius consequatur ex aliquid fuga</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.num} className={`p-6 rounded-2xl shadow-md text-center transition hover:-translate-y-2 ${service.featured ? "bg-emerald-600 text-white" : "bg-white"}`}>
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${service.featured ? "bg-white/20" : "bg-emerald-100"}`}>
                <i className={`${service.icon} text-2xl ${service.featured ? "text-white" : "text-emerald-600"}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-90 mb-4">{service.desc}</p>
              <a href="#" className={`inline-flex items-center gap-1 text-sm font-semibold ${service.featured ? "text-white" : "text-emerald-600"}`}>Learn More <i className="bi bi-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;