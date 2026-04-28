const HomeAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-2">
            <div className="relative">
              <img src="/assets/img/person-f-2.webp" alt="Main" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-full"><i className="bi bi-award text-emerald-600 text-xl"></i></div>
                <div><span className="font-bold text-2xl text-emerald-600">12+</span><p className="text-sm">Awards Won</p></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img src="/assets/img/person-f-6.webp" className="rounded-xl" />
              <img src="/assets/img/person-f-4.webp" className="rounded-xl" />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm mb-4">
              <i className="bi bi-buildings"></i> Premium Real Estate
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Transforming Real Estate Dreams Into Reality</h2>
            <p className="text-teal-600 mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <div><span className="text-2xl font-bold text-emerald-600">2800+</span><p className="text-sm">Properties Listed</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">95%</span><p className="text-sm">Success Rate</p></div>
              <div><span className="text-2xl font-bold text-emerald-600">24/7</span><p className="text-sm">Support</p></div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><i className="bi bi-check-circle text-emerald-600"></i> Expert market analysis</li>
              <li className="flex items-center gap-2"><i className="bi bi-check-circle text-emerald-600"></i> Personalized property matching</li>
              <li className="flex items-center gap-2"><i className="bi bi-check-circle text-emerald-600"></i> Professional photography & virtual tours</li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="/about" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">Learn More About Us <i className="bi bi-arrow-right-circle"></i></a>
              <div className="flex items-center gap-2"><i className="bi bi-headset text-emerald-600 text-2xl"></i><div><span className="text-sm text-teal-500">Need assistance?</span><br /><a href="tel:+15559876543" className="font-bold">+1 (555) 987-6543</a></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;