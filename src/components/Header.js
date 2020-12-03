
import React from 'react';

const Header = ({title}) => (
  <div class="ht__bradcaump__area" style={{background: 'rgba(0, 0, 0, 0) url(/images/bg/1.jpg) no-repeat scroll center center / cover '}}>
  <div class="ht__bradcaump__wrap">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <div class="bradcaump__inner text-center">
                      <h2 class="bradcaump-title">Tokopedia AR</h2>
                      <nav class="bradcaump-inner">
                        <a class="breadcrumb-item" href="#">{title}</a>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
);

export default Header;