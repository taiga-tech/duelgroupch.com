export const constructUrl = (baseUrl: string, params: any) => {
  const p = { ...params }
  const query = Object.keys(p)
    .reduce((prev: any, cur: any) => {
      prev.push(`${cur}=${p[cur]}`)
      return prev
    }, [])
    .join('&')

  console.log('constructUrl', `${baseUrl}?${query}`)
  return `${baseUrl}?${query}`
}
