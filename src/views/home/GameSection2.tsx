import { getAssetsUrl } from "../../utils/app.utils";

export function GameSection2() {
  return (
    <div
      class="game game-style3 overflow-hidden"
      style="background-image:url(assets/images/game/bg.jpg)"
    >
      <div class="container">
        <div class="section-wrapper">
          <div class="row justify-content-center g-4 align-items-center">
            <div class="col-lg-6 col-12">
              <div class="game__thumb">
                <img
                  src={getAssetsUrl() + "assets/images/game/08.png"}
                  alt="game-thumb"
                />
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="game__content">
                <div class="section-header text-start">
                  <h2>UNLOCK FREE SPIN</h2>
                  <p>
                    Assertively communicate an expanded array of mindshare
                    rather than diverse technologies for magnetic applications
                    eamlessly virtual then ussertively communcate an expanded
                    array of mindshare rather think wiverse technologies for
                    magnetic applications eamlessly virtual that conveniently
                    monetize synergistic human capital
                  </p>
                  <a href="game-list.html" class="default-button">
                    <span>
                      Browse All Matches <i class="icofont-circled-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
