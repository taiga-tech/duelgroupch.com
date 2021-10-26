export const constructUrl = (baseUrl = '', params = {}) => {
  const p = { ...params }
  const query = Object.keys(p)
    .reduce((prev, cur) => {
      prev.push(`${cur}=${p[cur]}`)
      return prev
    }, [])
    .join('&')

  console.log(`${baseUrl}?${query}`)
  return `${baseUrl}?${query}`
}
