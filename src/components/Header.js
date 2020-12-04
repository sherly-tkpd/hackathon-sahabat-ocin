import React from "react";

const Header = ({ title }) => (
  <div
    className="ht__bradcaump__area"
    style={{
      background:
        "rgba(0, 0, 0, 0) url(/images/bg/1.jpg) no-repeat scroll center center / cover ",
    }}
  >
    <div className="ht__bradcaump__wrap">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="bradcaump__inner text-center">
              <h2 className="bradcaump-title">Tokopedia AR</h2>
              <nav className="bradcaump-inner">
                <a className="breadcrumb-item" href="#">
                  {title}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
