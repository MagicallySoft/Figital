import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import Terms from "@/components/otherPages/Terms";
import React from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Terms of Use || Assuredcart  ",
  description: "Assuredcart  ",
};

export default function TermsOfUsePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6  />
      <Header11 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Terms of use</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Terms of use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Terms />
      <Footer1 dark/>
    </>
  );
}
