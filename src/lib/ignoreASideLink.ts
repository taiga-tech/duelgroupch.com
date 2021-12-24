export const ignoreASideLink = (object, ignore) => {
  const result = []

  Object.keys(object).map((key) => {
    if (!object[key].title) return false

    if (!key.match(ignore)) {
      result.push(object[key])
    }
  })

  return result
}
