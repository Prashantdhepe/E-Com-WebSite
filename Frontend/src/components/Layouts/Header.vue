<script setup>


</script>

<template>
  <header class="header header-transparent header-sticky d-lg-block d-none">
    <div class="header-middle">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 mt-2">
            <div class="header-middle-right">
              <div class="row">
                <div class="col-lg-10">
                  <div class="emergncy-contact-area">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="single-emergncy-contact">
                          <div class="icon">
                            <i class="fa fa-phone"></i>
                          </div>
                          <div class="content">
                            <h3><a href="tel:02026166466">+020 26166466</a></h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-8">
                        <div class="single-emergncy-contact">
                          <div class="icon">
                            <i class="fa fa-map-marker"></i>
                          </div>
                          <div class="content">
                            <h3>
                              6th & 7th floor Gagan Uno, 
                              Dhole Patil Road Opp. Vohuman Cafe, near Ruby Hall Clinic, 
                              Sangamvadi, 
                              Pune, Maharashtra 411001
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom menu-right">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex">
            <div class="logo">
              <router-link to="/">
                <img src="/assets/images/logo-trnsprnt.png" alt="" />
              </router-link>
            </div>
            <nav class="main-menu">
              <Menu></Menu>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile-header-area d-block d-lg-none">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="logo">
            <router-link to="/">
              <img src="/assets/images/logo-trnsprnt.png" alt="" />
            </router-link>
          </div>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-end">
          <div class="mobile-navigation-icon" id="mobile-menu-trigger">
            <i></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offcanvas-mobile-menu d-block d-lg-none" id="mobile-menu-overlay">
    <a href="#" class="offcanvas-menu-close" id="mobile-menu-close-trigger">
      <i class="fa fa-times"></i>
    </a>

    <div class="offcanvas-wrapper">
      <div class="offcanvas-inner-content">
        <nav class="offcanvas-navigation">
          <Menu
            :liHasClass="'menu-item-has-children'"
            :subMenuClass="'submenu2'"
          ></Menu>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
