import { getAssetsUrl } from "../../utils/app.utils";

export function PartnerList() {
  return (
    <div class="partner-section padding-top padding-bottom">
      <div class="container">
        <div class="section-wrapper">
          <div class="row g-4">
            <div class="col-lg-6 col-12">
              <div class="partner-list" id="accordionExample">
                <div class="row g-4 justify-content-center">
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/01.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Smoke Time</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/02.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Book Store</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/03.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Show Time</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/04.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Fish Restaurant</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="partner-list" id="accordionExample-2">
                <div class="row g-4 justify-content-center">
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/05.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Vintage</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingSix">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/06.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Hats Place</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseSix"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingSeven">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="true"
                          aria-controls="collapseSeven"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/07.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Barber Shop</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseSeven"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingEight">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="true"
                          aria-controls="collapseEight"
                        >
                          <span class="accor-header-inner d-flex flex-wrap align-items-center">
                            <span class="accor-thumb">
                              <img
                                src={
                                  getAssetsUrl() +
                                  "assets/images/sponsor/08.png"
                                }
                                alt="partner-thumb"
                              />
                            </span>
                            <span class="accor-title">Fashion Shop</span>
                          </span>
                        </button>
                      </div>
                      <div
                        id="collapseEight"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample-2"
                      >
                        <div class="accordion-body">
                          <p>
                            Qorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero voluptas provident qui corporis facere
                            officia numquam, repelat, vel ameting velit quidem
                            culpa vitae error ex porro voluptates a veritatis
                            sed illum doloring inventore blanditiis impedit!
                            Aliquid, amet ipsa, tenetur nisit perferendisi
                            excepturi, commodi nobis eligendi harum iure
                            exercita.
                          </p>
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
  );
}
