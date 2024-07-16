import { getAssets } from "solid-js/web";
import { getAssetsUrl } from "../../utils/app.utils";

export function ContactFirstPart() {
  return (
    <div class="info-section padding-top padding-bottom">
      <div class="container">
        <div class="section-header">
          <h2>We're Always Eager To Hear From You!</h2>
        </div>
        <div class="section-wrapper">
          <div class="row justify-content-center g-4">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="contact-item text-center">
                <div class="contact-thumb mb-4">
                  <img
                    src={getAssetsUrl() + "assets/images/contact/icon/01.png"}
                    alt="contact-thumb"
                  />
                </div>
                <div class="contact-content">
                  <h6 class="title">Office Address</h6>
                  <p>1201 park street, Fifth Avenue</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="contact-item text-center">
                <div class="contact-thumb mb-4">
                  <img
                    src={getAssetsUrl() + "assets/images/contact/icon/02.png"}
                    alt="contact-thumb"
                  />
                </div>
                <div class="contact-content">
                  <h6 class="title">Phone number</h6>
                  <p>+22698 745 632,02 982 745</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="contact-item text-center">
                <div class="contact-thumb mb-4">
                  <img
                    src={getAssetsUrl() + "assets/images/contact/icon/03.png"}
                    alt="contact-thumb"
                  />
                </div>
                <div class="contact-content">
                  <h6 class="title">Send Email</h6>
                  <p>yourmail@gmil.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
