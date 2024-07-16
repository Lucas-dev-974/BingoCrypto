export function CollectionFilter() {
  return (
    <ul class="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
      <li class="is-checked" data-filter="*">
        All matches
      </li>
      <li data-filter=".collection-one">today’s matches</li>
      <li data-filter=".collection-two">upcoming matches</li>
      <li data-filter=".collection-three">matche results</li>
    </ul>
  );
}
