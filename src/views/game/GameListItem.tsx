export interface GameListItemProps {
  name: string;
  bgMediaUrl: string;
  link: string;
  price: string;
}

export function GameListItem(props: GameListItemProps) {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6 gameListItem collection-one">
      <div class="game__item item-layer">
        <div class="game__inner text-center p-0">
          <div class="game__thumb mb-0">
            <img
              src={props.bgMediaUrl}
              alt="game-img"
              class="rounded-3 w-100"
            />
          </div>
          <div class="game__overlay">
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <a href={props.link} class="default-button">
              <span>
                play now <i class="icofont-circled-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
