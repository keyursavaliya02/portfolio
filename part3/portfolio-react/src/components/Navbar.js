const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Portfolio</div>
        <ul className="navbar-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <button className="c-btn">Contact</button>
      </nav>
    );
  };
  export default Navbar;