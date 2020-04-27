import React from "react";

const Footer = (props) => {
  return (
    <div className="bg-black black">
      <footer class=" bt b--white-10 black bg-black">
        <div className="bg-black black">
          <h1 class="fl w-100 pv0 f6 fw6 ttu tracked  bg-black white">
            Our Offices
          </h1>
          <article class="fl w-50 dib-ns w-auto-ns mr6-m mr6-l  pr2 pr0-ns bg-black">
            <h4 class="f5 f4-l fw6 white">SF</h4>
            <span class="f7 f6-l db white-70">837 Larkin St.</span>
            <span class="f7 f6-l white-70">San Francisco, CA 94109 </span>
            <a
              class="f6 db fw6 pv3 white-70 link dim"
              title="Call SF"
              href="tel:+12075555555"
            >
              +1 207-555-5555
            </a>
          </article>
          <article class="fl w-50 dib-ns w-auto-ns mr6-m mr6-l mb2 pr2 pr0-ns bg-black">
            <h4 class="f5 f4-l fw6 white">LA</h4>
            <span class="f7 f6-l db white-70">1111 Manor Way</span>
            <span class="f7 f6-l di white-70">Los Angeles, CA 90048</span>
            <a
              href="tel:+13235555555"
              class="f6 db fw6 pv3 link dim white-70 bg-black"
              title="Call the LA office."
            >
              +1 323-555-5555
            </a>
          </article>
          <article class="fl w-50 dib-ns w-auto-ns mr6-m mr6-l mb2 pr2 pr0-ns ">
            <h4 class="f5 f4-l fw6 white">London</h4>
            <span class="f7 f6-l db white-70">11 Downey St.</span>
            <span class="f7 f6-l white-70">London, UK</span>
            <a
              href="tel:+5555555555"
              class="link dim f6 db fw6 pv3 white-70"
              title="Call the London office"
            >
              +44 0 5555-5555
            </a>
          </article>
          <article class="fl w-50 dib-ns w-auto-ns mr2-m mr2-l mb2 pr2 pr0-ns">
            <h4 class="f5 f4-l fw6 white">Tokyo</h4>
            <span class="f7 f6-l db white">1982 Flangan Rd.</span>
            <span class="f7 f6-l white ">Shinjuku, Tokyo</span>
            <a
              href="tel:+444444444444"
              class="f6 db dim fw6 pv3 link white-70"
              title="Call Tokyo Office"
            >
              +99 5555-5555
            </a>
          </article>
          <a class="white f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l">
            hello@yourcompany.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
