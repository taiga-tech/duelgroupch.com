export const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        Promise.resolve(resolve)
      },
      ms ? ms : 1000
    )
  })
}
