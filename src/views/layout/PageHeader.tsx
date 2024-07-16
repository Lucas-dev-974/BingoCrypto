import { getAssetsUrl } from "../../utils/app.utils";

interface PageheaderProps {
  pageHeaderTitle: string;
  breadcrumbTitle: string;
}

export function Pageheader(props: PageheaderProps) {
  return (
    <section
      class="pageheader-section"
      style={
        "background-image: url(" +
        getAssetsUrl() +
        "assets/images/pageheader/bg.jpg);"
      }
    >
      <div class="container">
        <div class="section-wrapper text-center text-uppercase">
          <h2 class="pageheader-title">{props.pageHeaderTitle}</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a href="index.html">Accueil</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {props.breadcrumbTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
