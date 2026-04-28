const CallToAction = () => {
  return (
    <section className="py-20 bg-emerald-300 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Investment?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition">Get Free Consultation <i className="bi bi-person-lines-fill"></i></a>
          <a href="tel:+15551234567" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition">Call (555) 123-4567 <i className="bi bi-telephone-fill"></i></a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;