const WhyUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img src="/assets/img/person-f-5.webp" className="rounded-2xl shadow-xl" />
            <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md"><span className="font-bold text-emerald-600">15+</span><br />Years Excellence</div>
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-md flex items-center gap-2"><i className="bi bi-gem text-emerald-600 text-xl"></i><div><h5 className="font-bold">Premier Service</h5><p className="text-xs">Since 2009</p></div></div>
          </div>
          <div className="lg:w-1/2">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm mb-4"><i className="bi bi-star-fill"></i> Why Elite Properties</div>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Your Gateway to Exceptional Real Estate Experiences</h2>
            <p className="text-teal-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex gap-3"><i className="bi bi-geo-alt-fill text-emerald-600 text-xl"></i><div><h4 className="font-bold">Prime Locations</h4><p className="text-sm">Exclusive access to sought-after neighborhoods.</p></div></div>
              <div className="flex gap-3"><i className="bi bi-shield-fill-check text-emerald-600 text-xl"></i><div><h4 className="font-bold">Guaranteed Results</h4><p className="text-sm">Proven track record of success.</p></div></div>
            </div>
            <div className="flex justify-between text-center border-t pt-6">
              <div><span className="text-2xl font-bold text-emerald-600">94%</span><p>Success Rate</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">1800+</span><p>Properties Sold</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">24/7</span><p>Support</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;