function queryString(obj: Object){
  return Object.entries(obj).map(([index, val]) => `${index}=${val}`).join('&')
}
