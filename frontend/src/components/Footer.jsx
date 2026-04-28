const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TheAmirWay</h3>
            <p className="text-teal-400">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            <div className="mt-6 flex gap-3 text-xl">
              <a href="#" className="hover:text-emerald-400"><i className="bi bi-facebook"></i></a>
              <a href="#" className="hover:text-emerald-400"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="hover:text-emerald-400"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-teal-400">
              <li><a href="#" className="hover:text-emerald-400">About</a></li>
              <li><a href="#" className="hover:text-emerald-400">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-teal-400">
              <li><a href="#" className="hover:text-emerald-400">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Data Analytics</a></li>
              <li><a href="#" className="hover:text-emerald-400">AI Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-teal-400"><i className="bi bi-geo-alt mr-2"></i> 2847 Maple Avenue, Los Angeles, CA</p>
            <p className="text-teal-400 mt-2"><i className="bi bi-telephone mr-2"></i> +1 (555) 987-6543</p>
            <p className="text-teal-400 mt-2"><i className="bi bi-envelope mr-2"></i> contact@example.com</p>
          </div>
        </div>
        <div className="border-t border-teal-800 mt-8 pt-6 text-center text-teal-500 text-sm">
          © 2026 TheAmirWay. All rights reserved. Designed by BootstrapMade
        </div>
      </div>
    </footer>
  );
};

export default Footer;