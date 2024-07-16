import { getAssetsUrl } from "../../utils/app.utils";

export function GameSection() {
  return (
    <div
      class="game-section padding-top padding-bottom overflow-hidden"
      style="background-image:url(assets/images/match/bg.jpg)"
    >
      <div class="container">
        <div class="section-header">
          <h2>RELATED OTHER GAMES</h2>
        </div>
        <ul class="game__filter">
          <li data-filter="*" class="is-checked">
            <span class="category">All</span>
          </li>
          <li data-filter=".cat-1">
            <span class="category">Slots</span>
          </li>
          <li data-filter=".cat-2">
            <span class="category">Roulette</span>
          </li>
          <li data-filter=".cat-3">
            <span class="category">Black Jack</span>
          </li>
          <li data-filter=".cat-4">
            <span class="category">Poker Games</span>
          </li>
        </ul>
        <div class="row g-4 grid">
          <div class="col-lg-6 col-12 cat-1">
            <div class="game__item item-layer">
              <div class="game__inner text-center p-0">
                <div class="game__thumb mb-0">
                  <img
                    src={getAssetsUrl() + "assets/images/game/01.jpg"}
                    alt="game-img"
                    class="rounded-3 w-100"
                  />
                </div>
                <div class="game__overlay">
                  <div class="game__overlay-left">
                    <h4>free poker games</h4>
                    <p>Catagory: Roulette</p>
                  </div>
                  <div class="game__overlay-right">
                    <a href="#" class="default-button">
                      <span>
                        play now <i class="icofont-circled-right"></i>
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 cat-2">
            <div class="game__item item-layer">
              <div class="game__inner text-center p-0">
                <div class="game__thumb mb-0">
                  <img
                    src={getAssetsUrl() + "assets/images/game/02.jpg"}
                    alt="game-img"
                    class="rounded-3 w-100"
                  />
                </div>
                <div class="game__overlay">
                  <div class="game__overlay-left">
                    <h4>free poker games</h4>
                    <p>Catagory: Roulette</p>
                  </div>
                  <div class="game__overlay-right">
                    <a href="#" class="default-button">
                      <span>
                        play now <i class="icofont-circled-right"></i>
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 cat-3">
            <div class="game__item item-layer">
              <div class="game__inner text-center p-0">
                <div class="game__thumb mb-0">
                  <img
                    src={getAssetsUrl() + "assets/images/game/03.jpg"}
                    alt="game-img"
                    class="rounded-3 w-100"
                  />
                </div>
                <div class="game__overlay">
                  <div class="game__overlay-left">
                    <h4>free poker games</h4>
                    <p>Catagory: Roulette</p>
                  </div>
                  <div class="game__overlay-right">
                    <a href="#" class="default-button">
                      <span>
                        play now <i class="icofont-circled-right"></i>
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 cat-4">
            <div class="game__item item-layer">
              <div class="game__inner text-center p-0">
                <div class="game__thumb mb-0">
                  <img
                    src={getAssetsUrl() + "assets/images/game/04.jpg"}
                    alt="game-img"
                    class="rounded-3 w-100"
                  />
                </div>
                <div class="game__overlay">
                  <div class="game__overlay-left">
                    <h4>free poker games</h4>
                    <p>Catagory: Roulette</p>
                  </div>
                  <div class="game__overlay-right">
                    <a href="#" class="default-button">
                      <span>
                        play now <i class="icofont-circled-right"></i>
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button-wrapper text-center mt-5">
          <a href="game-list.html" class="default-button">
            <span>
              Browse All Matches <i class="icofont-circled-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
