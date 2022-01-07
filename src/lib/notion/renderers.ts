// react
import React from 'react'
// local components
import components from 'components/App/Dynamic'
import 'katex/dist/katex.css'

export const applyTags = (tags = [], children, noPTag = false, key) => {
  let child = children

  for (const tag of tags) {
    const props: { [key: string]: any } = { key }
    let tagName = tag[0]

    if (noPTag && tagName === 'p') tagName = React.Fragment
    if (tagName === 'c') {
      tagName = 'code'
      props.style = {
        background: 'rgba(60, 65, 68, 0.5)',
        fontSize: '0.8rem',
        padding: '0.3rem',
        borderRadius: '3px',
        fontFamily: "'Lucida Console', Courier, monospace",
        color: '#eb5757',
      }
    }
    if (tagName === '_') {
      tagName = 'span'
      props.style = { textDecoration: 'underline' }
    }
    if (tagName === 'a') props.href = tag[1]
    if (tagName === 'e') {
      tagName = components.Equation
      props.displayMode = false
      child = tag[1]
    }

    child = React.createElement(components[tagName] || tagName, props, child)
  }
  return child
}

export const textBlock = (text = [], noPTag = false, mainKey) => {
  const children = []
  let key = 0

  for (const textItem of text) {
    key++
    if (textItem.length === 1) {
      children.push(textItem)
      continue
    }
    children.push(applyTags(textItem[1], textItem[0], noPTag, key))
  }
  return React.createElement(
    noPTag ? React.Fragment : components.P,
    { key: mainKey },
    ...children,
    noPTag
  )
}

export const pBlock = (text = [], noPTag = false, mainKey) => {
  const children = []
  let key = 0

  for (const textItem of text) {
    key++
    if (textItem.length === 1) {
      children.push(textItem)
      continue
    }
    children.push(applyTags(textItem[1], textItem[0], noPTag, key))
  }
  return React.createElement(
    noPTag ? React.Fragment : components.p,
    { key: mainKey },
    ...children,
    noPTag
  )
}
