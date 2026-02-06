const Footer = () =>{
    const currentYear = new Date().getFullYear();
    
    return <footer className="bg-gray-900 text-white">
    <div className="mx-auto w-full max-w-screen-xl p-8 py-12">
        <div className="md:flex md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-white">OFFSET PRINTING</span>
              </a>
              <p className="text-gray-400 text-sm max-w-xs">Professional offset printing services for all your business needs.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase">Quick Links</h2>
                  <ul className="text-gray-400 font-medium space-y-2">
                      <li>
                          <a href="#services" className="hover:text-brand transition-colors">Services</a>
                      </li>
                      <li>
                          <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase">Services</h2>
                  <ul className="text-gray-400 font-medium space-y-2">
                      <li>
                          <a href="#services" className="hover:text-brand transition-colors">Diaries</a>
                      </li>
                      <li>
                          <a href="#services" className="hover:text-brand transition-colors">Notebooks</a>
                      </li>
                      <li>
                          <a href="#services" className="hover:text-brand transition-colors">Registers</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 text-sm font-semibold text-white uppercase">Contact</h2>
                  <ul className="text-gray-400 font-medium space-y-2">
                      <li className="hover:text-brand transition-colors cursor-pointer">+91 1234567890</li>
                      <li className="hover:text-brand transition-colors cursor-pointer">orders@offsetprinting.com</li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400">© {currentYear} <span className="text-white font-semibold">OFFSET PRINTING</span>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
      </div>
    </div>
</footer>

}

export default Footer