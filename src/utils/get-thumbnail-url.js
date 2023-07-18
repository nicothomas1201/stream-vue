
export function getThumbnailUrl(url, width = 336, height = 188 ) {
  let newUrl = url.replace('{width}', width)
  return newUrl.replace('{height}', height)
}

