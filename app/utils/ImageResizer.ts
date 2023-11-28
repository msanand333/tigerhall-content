export default function addResizeToImageUrl(url: string, size: number): string {
  // Find the index where "images.staging.tigerhall.io/" ends
  const insertionIndex =
    url.indexOf('images.staging.tigerhall.io/') +
    'images.staging.tigerhall.io/'.length;

  // Insert "resize/${size}x/" at the calculated index
  const modifiedUrl =
    url.slice(0, insertionIndex) +
    `resize/${size}x/` +
    url.slice(insertionIndex);

  return modifiedUrl;
}
