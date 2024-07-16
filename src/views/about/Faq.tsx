import { getAssetsUrl } from "../../utils/app.utils";

export function Faq() {
  return (
    <section class="faq padding-top padding-bottom">
      <div class="container">
        <div class="row justify-content-center align-items-center flex-row-reverse">
          <div class="col-lg-6 col-12">
            <div class="faq-right-part">
              <div class="faq-thumb">
                <img
                  src={getAssetsUrl() + "assets/images/faq/01.png"}
                  alt="faq-thumb"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="faq-left-part">
              <div class="section-header text-start">
                <h2>FREQUENTLY ASK QUESTION</h2>
                <p>
                  At Modeltheme we show only the best websites and portfolios
                  built completely with passion simplicity and creativity !
                </p>
              </div>
              <div class="section-wrapper">
                <ul class="accordion">
                  <li class="accordion-item">
                    <div class="accordion-list">
                      <div class="left">
                        <div class="icon"></div>
                      </div>
                      <div class="right">
                        <h6>01. How do I create Casine Account ?</h6>
                      </div>
                    </div>
                    <div class="accordion-answer">
                      <p>
                        Competen diseminate mpactful proceses with client
                        centered Holistic maximize multimedia based supply
                        chains for resourc channels e-leveling action items.
                      </p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <div class="accordion-list in">
                      <div class="left">
                        <div class="icon"></div>
                      </div>
                      <div class="right">
                        <h6>02. Where can I Redeem My Earnings ?</h6>
                      </div>
                    </div>
                    <div
                      class="accordion-answer active"
                      style="display: block;"
                    >
                      <p>
                        Competen diseminate mpactful proceses with client
                        centered Holistic maximize multimedia based supply
                        chains for resourc channels e-leveling action items.
                      </p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <div class="accordion-list">
                      <div class="left">
                        <div class="icon"></div>
                      </div>
                      <div class="right">
                        <h6>03. How do I Start Playing ?</h6>
                      </div>
                    </div>
                    <div class="accordion-answer">
                      <p>
                        Competen diseminate mpactful proceses with client
                        centered Holistic maximize multimedia based supply
                        chains for resourc channels e-leveling action items.
                      </p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <div class="accordion-list">
                      <div class="left">
                        <div class="icon"></div>
                      </div>
                      <div class="right">
                        <h6>04. How do I Move Up a Level ?</h6>
                      </div>
                    </div>
                    <div class="accordion-answer">
                      <p>
                        Competen diseminate mpactful proceses with client
                        centered Holistic maximize multimedia based supply
                        chains for resourc channels e-leveling action items.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
