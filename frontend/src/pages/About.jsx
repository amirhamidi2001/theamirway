import { useEffect } from "react";

const About = () => {
  useEffect(() => {
  }, []);

  return (
    <div>
      {/* Page Title + Breadcrumb */}
      <section className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">About</h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
          </p>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-teal-500">
              <li><a href="/" className="hover:text-emerald-600">Home</a></li>
              <li>/</li>
              <li className="text-emerald-600">About</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm mb-4">
                <i className="bi bi-house-heart"></i>
                <span>Your Trusted Real Estate Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
                Building Dreams, Creating Homes Since 2010
              </h2>
              <p className="text-teal-600 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-teal-600 mb-6">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              {/* Founder Highlight */}
              <div className="bg-emerald-50 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
                <img src="/assets/img/person-f-3.webp" className="w-20 h-20 rounded-full object-cover" alt="Founder" />
                <div>
                  <blockquote className="italic text-teal-700 mb-2">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit."
                  </blockquote>
                  <h5 className="font-bold text-teal-800">Michael Thompson</h5>
                  <span className="text-sm text-emerald-600">Founder &amp; CEO</span>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 relative">
              <div className="relative">
                <img src="/assets/img/person-f-3.webp" className="rounded-2xl shadow-xl w-full" />
                <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow-md text-center">
                  <span className="block text-2xl font-bold text-emerald-600">14+</span>
                  <span className="text-xs">Years of Excellence</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img src="/assets/img/person-f-3.webp" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-key text-emerald-600 text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600">2,850+</div>
              <div className="text-teal-500 mt-1">Properties Sold</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-heart-fill text-emerald-600 text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600">98%</div>
              <div className="text-teal-500 mt-1">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-geo-alt text-emerald-600 text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600">35</div>
              <div className="text-teal-500 mt-1">Cities Covered</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-award text-emerald-600 text-2xl"></i>
              </div>
              <div className="text-3xl font-bold text-emerald-600">127</div>
              <div className="text-teal-500 mt-1">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-teal-800">Our Journey of Excellence</h3>
            <p className="text-teal-500 mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          </div>

          <div className="relative border-l-2 border-emerald-200 ml-4 space-y-10">
            <div className="relative pl-8">
              <div className="absolute left-[-10px] top-0 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white"></div>
              <div className="bg-emerald-50 inline-block px-4 py-1 rounded-full text-sm font-bold text-emerald-600 mb-2">2010</div>
              <h4 className="text-xl font-bold text-teal-800">Company Founded</h4>
              <p className="text-teal-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-[-10px] top-0 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white"></div>
              <div className="bg-emerald-50 inline-block px-4 py-1 rounded-full text-sm font-bold text-emerald-600 mb-2">2015</div>
              <h4 className="text-xl font-bold text-teal-800">1000th Property Milestone</h4>
              <p className="text-teal-600">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-[-10px] top-0 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white"></div>
              <div className="bg-emerald-50 inline-block px-4 py-1 rounded-full text-sm font-bold text-emerald-600 mb-2">2020</div>
              <h4 className="text-xl font-bold text-teal-800">Digital Innovation Launch</h4>
              <p className="text-teal-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-[-10px] top-0 w-5 h-5 bg-emerald-600 rounded-full border-4 border-white"></div>
              <div className="bg-emerald-50 inline-block px-4 py-1 rounded-full text-sm font-bold text-emerald-600 mb-2">2024</div>
              <h4 className="text-xl font-bold text-teal-800">Regional Expansion</h4>
              <p className="text-teal-600">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-teal-800 mb-4">Meet Our Expert Team</h3>
          <p className="text-teal-500 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center w-64">
              <img src="/assets/img/person-f-5.webp" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h5 className="text-xl font-bold text-teal-800">Sarah Martinez</h5>
              <span className="text-emerald-600 text-sm">Senior Property Advisor</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center w-64">
              <img src="/assets/img/person-f-6.webp" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h5 className="text-xl font-bold text-teal-800">David Chen</h5>
              <span className="text-emerald-600 text-sm">Investment Specialist</span>
            </div>
          </div>
          <div className="mt-10">
            <a href="/team" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
              View Full Team
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-teal-50 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <i className="bi bi-house-door text-emerald-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Buy Your Dream Home</h3>
                <p className="text-teal-600 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className="flex gap-4 mb-4">
                  <div><span className="block font-bold text-emerald-600">2,500+</span><span className="text-sm">Properties Sold</span></div>
                  <div><span className="block font-bold text-emerald-600">98%</span><span className="text-sm">Satisfaction</span></div>
                </div>
                <a href="/services/buy" className="text-emerald-600 font-semibold inline-flex items-center gap-1">Learn More <i className="bi bi-arrow-right"></i></a>
              </div>
              <div className="md:w-1/2 h-48 md:h-auto">
                <img src="/assets/img/person-f-7.webp" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-teal-50 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="p-6 md:w-1/2">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <i className="bi bi-currency-dollar text-emerald-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sell Your Property</h3>
                <p className="text-teal-600 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                <div className="flex gap-4 mb-4">
                  <div><span className="block font-bold text-emerald-600">45</span><span className="text-sm">Days Avg Sale</span></div>
                  <div><span className="block font-bold text-emerald-600">$2.5M+</span><span className="text-sm">Highest Price</span></div>
                </div>
                <a href="/services/sell" className="text-emerald-600 font-semibold inline-flex items-center gap-1">Get Valuation <i className="bi bi-arrow-right"></i></a>
              </div>
              <div className="md:w-1/2 h-48 md:h-auto">
                <img src="/assets/img/person-f-8.webp" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-key text-emerald-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Rental Services</h4>
              <p className="text-teal-600 text-sm mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
              <ul className="text-left space-y-2 text-sm mb-4">
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Tenant Screening</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Property Marketing</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Lease Management</li>
              </ul>
              <a href="/services/rental" className="text-emerald-600 font-semibold">Explore Rentals →</a>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-graph-up text-emerald-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Investment Consulting</h4>
              <p className="text-teal-600 text-sm mb-4">Excepteur sint occaecat cupidatat non proident.</p>
              <ul className="text-left space-y-2 text-sm mb-4">
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Market Analysis</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> ROI Calculations</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Portfolio Planning</li>
              </ul>
              <a href="/services/invest" className="text-emerald-600 font-semibold">Start Investing →</a>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <i className="bi bi-tools text-emerald-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-2">Property Management</h4>
              <p className="text-teal-600 text-sm mb-4">Duis aute irure dolor in reprehenderit in voluptate.</p>
              <ul className="text-left space-y-2 text-sm mb-4">
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Maintenance Coordination</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> Rent Collection</li>
                <li><i className="bi bi-check2 text-emerald-600 mr-2"></i> 24/7 Support</li>
              </ul>
              <a href="/services/manage" className="text-emerald-600 font-semibold">Manage Property →</a>
            </div>
          </div>

          <div className="mt-16 bg-emerald-600 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Take the Next Step?</h3>
              <p className="opacity-90">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
            </div>
            <a href="/contact" className="mt-4 md:mt-0 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 transition">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;