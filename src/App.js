import './App.scss';
import logo from './assets/images/logo.png';
import footerLogo from './assets/images/footer-logo.png';
import egg from './assets/images/egg.jpg';
import cup from './assets/images/cup.jpg';
import emily from './assets/images/emily.png';
import jennie from './assets/images/jennie.png';
import thomas from './assets/images/thomas.png';
import milk from './assets/images/milk.jpg';
import orangeSlice from './assets/images/orange-slice.jpg';
import iceCreamCone from './assets/images/ice-cream-wrap.jpg';
import apple from './assets/images/apple.jpg'
import orange from './assets/images/orange.jpg'
import sugar from './assets/images/sugar.jpg';
import facebook from './assets/images/facebook.png';
import instagram from './assets/images/instagram.png';
import twitter from './assets/images/twitter.png';
import pinterest from './assets/images/pinterest.png';

function App() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <header className="site-header">
          {/* Site Logo */}
          <img src={logo} className="site-logo" alt="logo" />
          
          {/* Site Header Navigation */}
          <nav>
            <ul>
              <li>Abou</li>
              <li>Services</li>
              <li>Projects</li>
              <li className="contact">Contact</li>
            </ul>
          </nav>
        </header>

        <section className="main">
          <h1>WE ARE CREATIVES</h1>
        </section>
      </section>

      {/* Transform */}
      <section className="transform">
        <div>
          <div>
            <h2>Transform your brand</h2>
            <p>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>

            <a href="/">LEARN MORE</a>
          </div>
        </div>

        <img src={egg} alt="an egg" />
      </section>

      {/* Stand out */}
      <section className="stand-out">
        <img src={cup} alt="a cup" /> 

        <div>
          <div>
            <h2>Stand out to the right</h2>
            <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
            </p>

            <a href="/">LEARN MORE</a>
          </div>
        </div>
      </section>

      {/* Graphic Design and Photography */}
      <section className="gandp">
        <div className="graphic-design">
          <img src={apple} alt="an apple" /> 
          <div>
            <h2>Graphic Design</h2>
            <p>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
            </p>
          </div>
        </div>

        <div className="photography">
          <img src={orange} alt="an orange" /> 
          <div>
            <h2>Photography</h2>
            <p>
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>CLIENT TESTIMONIALS</h2>
        <div className="wrapper">
          <div className="testimonial">
            <img src={emily} alt="Emily" />
            <p className="description">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
            </p>
            <p className="name">Emily R.</p>
            <p className="position">Marketing Director</p>
          </div>

          <div className="testimonial">
            <img src={thomas} alt="Thomas" />
            <p className="description">
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className="name">Thomas S.</p>
            <p className="position">Chief Operating Officer</p>
          </div>

          <div className="testimonial">
            <img src={jennie} alt="Jennie" />
            <p className="description">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>
            <p className="name">Jennie F.</p>
            <p className="position">Business Owner</p>
          </div>
        </div>
      </section>

      {/* Footer Gallery */}
      <section className="footer-gallery">
        <img src={milk} alt="Bottles of milk" />
        <img src={orangeSlice} alt="Sliced orange" />
        <img src={iceCreamCone} alt="Ice cream cone" />
        <img src={sugar} alt="Sugar cubes" />
      </section>

      <footer>
        {/* Site Logo */}
        <img src={footerLogo} alt="" />

        {/* Site Footer Navigation */}
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </nav>

        {/* Footer Socials */}
        <ul>
          <li><img src={facebook} alt="Facebook icon" /></li>
          <li><img src={instagram} alt="Instagram icon" /></li>
          <li><img src={twitter} alt="Twitter icon" /></li>
          <li><img src={pinterest} alt="Pinterest icon" /></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
