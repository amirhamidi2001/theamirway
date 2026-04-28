const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Featured Properties</h2>
          <p className="text-teal-500 mt-2">Necessitatibus eius consequatur ex aliquid fuga</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img src="/assets/img/person-f-5.webp" className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">Featured</span>
                <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">Premium</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-3 text-white text-sm bg-black/50 p-2 rounded">
                <span><i className="bi bi-door-open"></i> 5 Beds</span>
                <span><i className="bi bi-droplet"></i> 4 Baths</span>
                <span><i className="bi bi-aspect-ratio"></i> 4,900 sq ft</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div><h3 className="text-xl font-bold"><a href="#" className="hover:text-emerald-600">Seaside Villa with Infinity Pool</a></h3><p className="text-teal-500 text-sm"><i className="bi bi-geo-alt-fill"></i> Coronado, CA</p></div>
                <span className="text-2xl font-bold text-emerald-600">$3,760,000</span>
              </div>
              <p className="text-teal-600 mt-2">Praesent commodo cursus magna, fusce dapibus tellus ac cursus commodo...</p>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700">Arrange Visit</a>
                <span className="text-xs text-teal-400">Listed 2 days ago</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md flex overflow-hidden">
                <img src="/assets/img/person-f-5.webp" className="w-28 h-28 object-cover" />
                <div className="p-3 flex-1">
                  <h4 className="font-bold"><a href="#" className="hover:text-emerald-600">Urban Loft with Skyline Views</a></h4>
                  <p className="text-teal-500 text-sm"><i className="bi bi-geo"></i> Denver, CO</p>
                  <div className="flex gap-2 text-sm text-teal-600 my-1"><span><i className="bi bi-door-open"></i> 2</span><span><i className="bi bi-droplet"></i> 2</span></div>
                  <div className="flex justify-between items-center"><span className="font-bold text-emerald-600">$689,000</span><a href="#" className="text-emerald-600 text-sm">Details →</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;