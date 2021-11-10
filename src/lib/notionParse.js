export const notionParse = async (pageData) => {
  const results = pageData.results
  results.map((result, i) => {
    properties = result.properties
    console.log(i, properties)
  })

  /**
  {
    object: 'page',
    id: 'b6c86f66-29d5-4423-9e3a-d6793f487301',
    created_time: '2021-10-29T21:40:00.000Z',
    last_edited_time: '2021-11-02T07:19:00.000Z',
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'e7fdba2f-f375-475c-9b40-65361d31e51c'
    },
    archived: false,
    properties: {
      TimeStamp: [Object],
      Id: [Object],
      Status: [Object],
      Description: [Object],
      Author: [Object],
      Tag: [Object],
      Published: [Object],
      Title: [Object]
    },
    url: 'https://www.notion.so/YouTube-b6c86f6629d544239e3ad6793f487301'
  }
   */

  // --------------------------------------------------
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(results)
  //   }, 1000)
  // })
  // const { blocks } = notionPage
  // const { title, body, cover, date, author, tags, categories, notion_id } =
  //   blocks[0].data
  // const {
  //   title: coverTitle,
  //   description: coverDescription,
  //   image: coverImage,
  // } = cover
  // const {
  //   title: authorTitle,
  //   description: authorDescription,
  //   image: authorImage,
  // } = author
  // const {
  //   title: dateTitle,
  //   description: dateDescription,
  //   image: dateImage,
  // } = date
  // const {
  //   title: tagsTitle,
  //   description: tagsDescription,
  //   image: tagsImage,
  // } = tags
  // const {
  //   title: categoriesTitle,
  //   description: categoriesDescription,
  //   image: categoriesImage,
  // } = categories
  // const {
  //   title: bodyTitle,
  //   description: bodyDescription,
  //   image: bodyImage,
  // } = body
  // return {
  //   title,
  //   body,
  //   cover: {
  //     title: coverTitle,
  //     description: coverDescription,
  //     image: coverImage,
  //   },
  //   date: {
  //     title: dateTitle,
  //     description: dateDescription,
  //     image: dateImage,
  //   },
  // }
}
