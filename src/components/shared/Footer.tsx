export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/demo.png" alt="Nidi logo" />
            </a>
            <p className="footer-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              delectus odit placeat eaque dolore perferendis laborum ipsum quam
              natus ullam.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing plans
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Test3
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contacts
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Ask a question
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms & conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-instagram"></ion-icon> */}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-twitter"></ion-icon> */}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-skype"></ion-icon> */}
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="mail-outline"></ion-icon> */}
              </a>
            </li>
          </ul>
          <p className="copyright">
            &copy; 2024 <a href="#">ATRIO</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
