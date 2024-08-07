import { getAssetsUrl, getHost } from "../../utils/app.utils";

export function Footer() {
  return (
    <footer
      class="footer-section"
      style="background-image: url(src/assets/images/footer/bg.jpg);"
    >
      <div class="footer-top">
        <div class="container">
          <div class="row g-3 justify-content-center g-lg-0">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/footer/icons/01.png"}
                      alt="Phone-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Phone Number : +88012 345 678 912</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/footer/icons/02.png"}
                      alt="email-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Email : youremail@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/footer/icons/03.png"}
                      alt="location-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Address : 30 North West New York</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-middle padding-top padding-bottom">
        <div class="container">
          <div class="row padding-lg-top">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-middle-item-wrapper">
                <div class="footer-middle-item mb-lg-0">
                  <div class="fm-item-title mb-4">
                    <img
                      src={getAssetsUrl() + "assets/images/logo/logo.png"}
                      alt="logo"
                    />
                  </div>
                  <div class="fm-item-content">
                    <p class="mb-4">
                      Upropriate brand economca sound technolog after covalent
                      technology enable prospective wastng markets whereas
                      propriate and brand economca sound technolog
                    </p>
                    <ul class="match-social-list d-flex flex-wrap align-items-center">
                      <li>
                        <a href="#">
                          <img
                            src={
                              getAssetsUrl() +
                              "assets/images/match/social-1.png"
                            }
                            alt="vimeo"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={
                              getAssetsUrl() +
                              "assets/images/match/social-2.png"
                            }
                            alt="youtube"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={
                              getAssetsUrl() +
                              "assets/images/match/social-3.png"
                            }
                            alt="twitch"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-middle-item-wrapper">
                <div class="footer-middle-item mb-lg-0">
                  <div class="fm-item-title">
                    <h4>Top jackpot games</h4>
                  </div>
                  <div class="fm-item-content">
                    <div class="fm-item-widget lab-item">
                      <div class="lab-inner">
                        <div class="lab-thumb">
                          <a href="#">
                            {" "}
                            <img
                              src={
                                getAssetsUrl() + "assets/images/footer/01.jpg"
                              }
                              alt="footer-widget-img"
                              class="rounded-3"
                            />
                          </a>
                        </div>
                        <div class="lab-content">
                          <a href="blog-single.html">
                            <h6>free Poker Game</h6>
                          </a>
                          <p>
                            Poker: <b>$230</b>
                          </p>
                          <div class="rating">
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fm-item-widget lab-item">
                      <div class="lab-inner">
                        <div class="lab-thumb">
                          <a href="#">
                            <img
                              src={
                                getAssetsUrl() + "assets/images/footer/02.jpg"
                              }
                              alt="footer-widget-img"
                              class="rounded-3"
                            />
                          </a>
                        </div>
                        <div class="lab-content">
                          <a href="blog-single.html">
                            <h6>CLUB Poker Game</h6>
                          </a>
                          <p>
                            Poker: <b>$290</b>
                          </p>
                          <div class="rating">
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="fm-item-widget lab-item">
                      <div class="lab-inner">
                        <div class="lab-thumb">
                          <a href="#">
                            <img
                              src={
                                getAssetsUrl() + "assets/images/footer/03.jpg"
                              }
                              alt="footer-widget-img"
                              class="rounded-3"
                            />
                          </a>
                        </div>
                        <div class="lab-content">
                          <a href="blog-single.html">
                            <h6>ROYAL Poker Game</h6>
                          </a>
                          <p>
                            Poker: <b>$330</b>
                          </p>
                          <div class="rating">
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                            <i class="icofont-ui-rating"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-middle-item-wrapper">
                <div class="footer-middle-item-3 mb-lg-0">
                  <div class="fm-item-title">
                    <h4>Our Newsletter</h4>
                  </div>
                  <div class="fm-item-content">
                    <p>
                      Casina esports organization supported by community leaders
                    </p>
                    <form>
                      <div class="form-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group mb-2">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <button type="submit" class="default-button">
                        <span>
                          Send Massage <i class="icofont-circled-right"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer-bottom-content text-center">
                <p>
                  ©2022 <a href="index.html">Casina</a> - All Rights Reserved.
                  Developed by{" "}
                  <a href="https://themeforest.net/user/codexcoder">
                    CodexCoder
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
