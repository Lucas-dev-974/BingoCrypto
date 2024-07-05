export function getHost(): string {
  return "http://" + window.location.host + "/";
}

export function getAssetsUrl(): string {
  return getHost() + "src/";
}
