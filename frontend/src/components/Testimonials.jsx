const Testimonials = () => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800">Testimonials</h2>
          <p className="text-teal-500 mt-2">What our clients say about us</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <i className="bi bi-quote text-emerald-600 text-3xl"></i>
            <p className="mt-3 text-teal-600">Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.</p>
            <div className="flex items-center gap-3 mt-6">
              <img src="/assets/img/person-f-8.webp" className="w-12 h-12 rounded-full" />
              <div><h4 className="font-bold">Saul Goodman</h4><span className="text-sm text-teal-500">Client</span></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <i className="bi bi-quote text-emerald-600 text-3xl"></i>
            <p className="mt-3 text-teal-600">Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid.</p>
            <div className="flex items-center gap-3 mt-6">
              <img src="/assets/img/person-f-9.webp" className="w-12 h-12 rounded-full" />
              <div><h4 className="font-bold">Sara Wilsson</h4><span className="text-sm text-teal-500">Designer</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;