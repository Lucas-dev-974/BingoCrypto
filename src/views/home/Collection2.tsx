import { getAssetsUrl } from "../../utils/app.utils";

export function Collection2() {
  return (
    <section class="collection-section padding-top padding-bottom">
      <div class="container">
        <div class="section-header">
          <h2>BE IN CONTROL</h2>
          <p>
            At Modeltheme, we show only the best websites and portfolios built
            completely with passion, simplicity and creativity !
          </p>
        </div>
        <div class="section-wrapper game game-style2">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/04.png"}
                      alt="game-img"
                    />
                  </div>
                  <div class="game__content">
                    <h4>
                      <a href="#">PAYMENT LIMITATION</a>{" "}
                    </h4>
                    <p>
                      Holisticly underwhe fully researched deliverables for
                      revoluonary sourcess skills and technically sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/05.png"}
                      alt="game-img"
                    />
                  </div>
                  <div class="game__content">
                    <h4>
                      <a href="team-single.html">Great Solutions</a>{" "}
                    </h4>
                    <p>
                      Holisticly underwhe fully researched deliverables for
                      revoluonary sourcess skills and technically sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/06.png"}
                      alt="game-img"
                    />
                  </div>
                  <div class="game__content">
                    <h4>
                      <a href="team-single.html">Support in Person</a>{" "}
                    </h4>
                    <p>
                      Holisticly underwhe fully researched deliverables for
                      revoluonary sourcess skills and technically sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/07.png"}
                      alt="game-img"
                    />
                  </div>
                  <div class="game__content">
                    <h4>
                      <a href="team-single.html">Support in Person</a>{" "}
                    </h4>
                    <p>
                      Holisticly underwhe fully researched deliverables for
                      revoluonary sourcess skills and technically sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
