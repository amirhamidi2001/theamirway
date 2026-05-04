import { useState } from "react";
import { createContact } from "../services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    try {
      await createContact(formData);
      setStatus({ loading: false, error: "", success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Clear success message after 3 seconds
      setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 3000);
    } catch (err) {
      console.error("Contact submission error:", err);
      const errorMsg = err.response?.data?.message || "Failed to send message. Please try again.";
      setStatus({ loading: false, error: errorMsg, success: false });
    }
  };

  return (
    <div>
      {/* Page Title + Breadcrumb */}
      <section className="bg-teal-50 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Contact
          </h1>
          <p className="text-teal-600 max-w-2xl mx-auto">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem.
          </p>
          <nav className="mt-6">
            <ol className="flex justify-center space-x-2 text-sm text-teal-500">
              <li>
                <a href="/" className="hover:text-emerald-600">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-emerald-600">Contact</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Info Boxes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Box 1 - Address */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bi bi-geo-alt text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-1">
                  Our Address
                </h4>
                <p className="text-teal-600">
                  1842 Maple Avenue, Portland, Oregon 97204
                </p>
              </div>
            </div>

            {/* Box 2 - Email */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bi bi-envelope text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-1">
                  Email Address
                </h4>
                <p className="text-teal-600">info@example.com</p>
                <p className="text-teal-600">contact@example.com</p>
              </div>
            </div>

            {/* Box 3 - Hours */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="bi bi-headset text-emerald-600 text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal-800 mb-1">
                  Hours of Operation
                </h4>
                <p className="text-teal-600">Sunday-Fri: 9 AM - 6 PM</p>
                <p className="text-teal-600">Saturday: 9 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps (Full Width) */}
      <div className="w-full h-96 md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Contact Form (Overlapping) */}
      <div className="container mx-auto px-4 relative -mt-20 md:-mt-28 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-800 mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <i className="bi bi-person absolute left-3 top-1/2 -translate-y-1/2 text-teal-400 z-10"></i>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="First Name"
                  />
                </div>
                <div className="relative">
                  <i className="bi bi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-teal-400 z-10"></i>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="relative">
                <i className="bi bi-text-left absolute left-3 top-1/2 -translate-y-1/2 text-teal-400 z-10"></i>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Subject"
                />
              </div>

              <div className="relative">
                <i className="bi bi-chat-dots absolute left-3 top-5 text-teal-400 z-10"></i>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-teal-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                  placeholder="Write Message..."
                ></textarea>
              </div>

              {/* loading / error / success messages */}
              {status.loading && (
                <div className="text-center text-emerald-600">Loading...</div>
              )}
              {status.error && (
                <div className="text-center text-red-600 bg-red-50 p-2 rounded">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="text-center text-green-600 bg-green-50 p-2 rounded">
                  Your message has been sent. Thank you!
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md disabled:opacity-70"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;