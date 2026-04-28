const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              <i className="bi bi-star-fill"></i>
              <span>Premium Properties</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              Discover Your Perfect Home in the Heart of the City
            </h1>
            <p className="text-teal-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Browse thousands of verified listings from trusted agents.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
              <div className="grid gap-4">
                <input type="text" placeholder="Location" className="border p-3 rounded-lg w-full" />
                <select className="border p-3 rounded-lg w-full">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                </select>
                <select className="border p-3 rounded-lg w-full">
                  <option>Price Range</option>
                  <option>$0 - $200K</option>
                  <option>$200K - $500K</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <select className="border p-3 rounded-lg">
                    <option>Beds</option>
                    <option>1</option><option>2</option><option>3</option>
                  </select>
                  <select className="border p-3 rounded-lg">
                    <option>Baths</option>
                    <option>1</option><option>2</option><option>3</option>
                  </select>
                </div>
                <button className="bg-emerald-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700">
                  <i className="bi bi-search"></i> Search Properties
                </button>
              </div>
            </div>

            <div className="flex justify-between text-center">
              <div><span className="text-2xl font-bold text-emerald-600">2847+</span><p className="text-teal-500">Properties Listed</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">156+</span><p className="text-teal-500">Verified Agents</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">98%</span><p className="text-teal-500">Client Satisfaction</p></div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <img src="/assets/img/person-f-1.webp" alt="Main property" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex gap-3 items-center">
                <img src="/assets/img/person-f-1.webp" className="w-12 h-12 rounded-full" />
                <div>
                  <h5 className="font-bold">Sarah Johnson</h5>
                  <p className="text-sm text-teal-500">Top Agent</p>
                  <div className="text-yellow-400 text-sm">★★★★★ 4.9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;