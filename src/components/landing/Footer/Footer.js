import React from "react";
import "./Footer.css";
import Center from "react-center";

const Footer = (props) => {
  return (
    <footer class="pa4 bg-black pa5-l black-70 bt b--black-10">
      <section class="mw5 mw7-ns center bg-black pa3 ph5-ns">
        <div class="mb4-l cf">
          <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
            <h4 class="f5 f4-l white fw6">Gir</h4>
            <span class="f7 f6-l db white-70">Gujarat</span>
            <span class="f7 f6-l white-70">India </span>
            <a
              class="f6 db fw6 pv3 white-70 link dim"
              title="Call SF"
              href="tel:+12075555555"
            >
              +1 207-555-5555
            </a>
          </article>
          <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pl2 pl0-ns">
            <h4 class="f5 f4-l fw6 white">Karnala</h4>
            <span class="f7 f6-l db white-70">Karnala</span>
            <span class="f7 f6-l di white-70">Maharashtra</span>
            <a
              href="tel:+13235555555"
              class="f6 db fw6 pv3 link dim white-70"
              title="Call the LA office."
            >
              +1 323-555-5555
            </a>
          </article>
          <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
            <h4 class="f5 f4-l fw6 white">Jim Corbett</h4>
            <span class="f7 f6-l db white-70">Uttarakhand</span>
            <span class="f7 f6-l white-70">India</span>
            <a
              href="tel:+5555555555"
              class="link dim f6 db fw6 pv3 white-70"
              title="Call the London office"
            >
              +44 0 5555-5555
            </a>
          </article>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
