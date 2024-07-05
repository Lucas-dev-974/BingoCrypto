import { getAssetsUrl } from "../../utils/app.utils";

export function Collection() {
  return (
    <section class="collection-section padding-top padding-bottom">
      <div class="container">
        <div class="section-header">
          <h2>welcome to casino</h2>
        </div>
        <div class="section-wrapper game">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/01.png"}
                      alt="game-img"
                    />
                  </div>
                  <div class="game__content">
                    <h4>
                      <a href="team-single.html">Advice And Guide</a>{" "}
                    </h4>
                    <p>
                      Holisticly underwhe fully researched deliverables for
                      revoluonary sourcess skills and technically sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/02.png"}
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
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="game__item item-layer">
                <div class="game__inner text-center">
                  <div class="game__thumb">
                    <img
                      src={getAssetsUrl() + "assets/images/game/03.png"}
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
