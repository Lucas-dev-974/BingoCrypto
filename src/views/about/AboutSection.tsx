import { getAssetsUrl } from "../../utils/app.utils";

export function AboutSection() {
  return (
    <section class="about-section">
      <div class="container">
        <div class="section-wrapper padding-top">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="about-image position-relative">
                <img
                  src={getAssetsUrl() + "assets/images/about/01.jpg"}
                  alt="about-image"
                  class="w-100"
                />
                <div class="video-icon">
                  <a
                    href="https://www.youtube.com/embed/g5eQgEuiFC8"
                    data-rel="lightcase"
                  >
                    <i class="icofont-play-alt-1"></i>
                    <span class="pluse"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div class="about-wrapper">
                <div class="section-header">
                  <h2>we are professional team esport</h2>
                </div>
                <div class="about-content">
                  <p>
                    At Modeltheme, we show only the best websites and portfolios
                    built completely with passion simplicity and creativity!
                  </p>
                  <ul class="about-list">
                    <li class="about-item d-flex flex-wrap">
                      <div class="about-item-thumb">
                        <img
                          src={
                            getAssetsUrl() + "assets/images/about/icon-1.png"
                          }
                          alt="Icon"
                        />
                      </div>
                      <div class="about-item-content">
                        <h5>103k Community Earning</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                    <li class="about-item d-flex flex-wrap">
                      <div class="about-item-thumb">
                        <img
                          src={
                            getAssetsUrl() + "assets/images/about/icon-2.png"
                          }
                          alt="Icon"
                        />
                      </div>
                      <div class="about-item-content">
                        <h5>34m+ Registered Players</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                    <li class="about-item d-flex flex-wrap">
                      <div class="about-item-thumb">
                        <img
                          src={
                            getAssetsUrl() + "assets/images/about/icon-3.png"
                          }
                          alt="Icon"
                        />
                      </div>
                      <div class="about-item-content">
                        <h5>240k Streams Complete</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
