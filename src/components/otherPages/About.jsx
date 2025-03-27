import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft">
              <img
                className="lazyload"
                data-src="/images/banner/about-us.jpg"
                alt="image-team"
                src="/images/banner/about-us.jpg"
                width={930}
                height={618}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp">
                Assuredcart – Offering rare and beautiful items worldwide
              </h3>
              <div className="widget-tabs style-3">
                <ul className="widget-menu-tab wow fadeInUp">
                  <li
                    className={`item-title ${activeTab == 1 ? "active" : ""} `}
                    onClick={() => setActiveTab(1)}
                  >
                    <span className="inner text-button">Introduction</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 2 ? "active" : ""} `}
                    onClick={() => setActiveTab(2)}
                  >
                    <span className="inner text-button">Our Vision</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 3 ? "active" : ""} `}
                    onClick={() => setActiveTab(3)}
                  >
                    <span className="inner text-button">
                      What Sets Us Apart
                    </span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 4 ? "active" : ""} `}
                    onClick={() => setActiveTab(4)}
                  >
                    <span className="inner text-button">Our Commitment</span>
                  </li>
                </ul>
                <div className="widget-content-tab wow fadeInUp">
                  <div
                    className={`widget-content-inner ${activeTab == 1 ? "active" : ""
                      } `}
                  >
                    <p>
                      Welcome to ElectroHub, your trusted destination for the latest in electronic innovations. We offer a carefully selected range of high-performance gadgets and accessories, sourced from visionary creators both near and far. Our commitment is to bridge cutting-edge technology with everyday convenience, ensuring every product meets the highest standards of quality and reliability. Explore our collection and discover how we can help elevate your digital experience to new heights.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${activeTab == 2 ? "active" : ""
                      } `}
                  >
                    <p>
                      At ElectroHub Store, our vision is to transform fashion into a vibrant expression of individuality. We strive to empower every customer with an exclusive collection of trend-setting clothing and accessories that blend global inspiration with local craftsmanship. Our commitment is to exceptional quality, creative innovation, and timeless style, ensuring that each piece is not just worn—but celebrated.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${activeTab == 3 ? "active" : ""
                      } `}
                  >
                    <p>
                      At ElectroHub Store, excellence is more than a goal—it's our foundation. Our carefully curated collections blend global trends with local craftsmanship, ensuring every piece stands out in quality and style. We pride ourselves on delivering an experience that goes beyond fashion, with personalized service and a commitment to innovative design. Our passion for exceptional craftsmanship and customer satisfaction is what truly sets us apart. Explore ElectroHub Store and experience a unique fusion of creativity, quality, and dedication that redefines your wardrobe.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${activeTab == 4 ? "active" : ""
                      } `}
                  >
                    <p>
                      At ElectroHub, our commitment is to empower your digital lifestyle with the very best in electronic innovation. We carefully curate every product to ensure it meets rigorous standards for quality, performance, and reliability. From the latest smart gadgets to cutting-edge home technology, we strive to bring you products that enhance everyday experiences and push the boundaries of what’s possible. Our promise is to stay at the forefront of technology, offering unmatched customer service and support as we continue to elevate your digital world.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
