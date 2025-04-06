export default function Footer() {
    return (
      <footer className="flex flex-col space-y-10 justify-center pt-10 bg-(--color-topbare)">

      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <a className="hover:text-white" href="#">Home</a>
          <a className="hover:text-white" href="#">About</a>
          <a className="hover:text-white" href="#">Services</a>
          <a className="hover:text-white" href="#">Media</a>
          <a className="hover:text-white" href="#">Gallery</a>
          <a className="hover:text-white" href="#">Contact</a>
      </nav>
  
      <div className="flex justify-center space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
      </div>
      <p className="text-center text-black font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
  </footer>
    );
  }
  