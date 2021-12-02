import type { downloadParams } from 'lib/types/cenvasDownload'

/**
 * Download the stage mehtod
 * only ios safari supports download attribute
 * Todo: support other browser
 * @method
 * @param {string} uri
 * @param {string} fileName
 * @param {string} type
 */

export const downloadURI = ({ uri, fileName, type }: downloadParams) => {
  console.log('downloadURI', uri)
  var link = document.createElement('a')
  link.download = fileName
  link.href = uri
  link.type = type
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
