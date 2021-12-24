// other components
import AnchorLink from 'react-anchor-link-smooth-scroll'

const collectText = (el, acc = []) => {
  if (el) {
    if (typeof el === 'string') acc.push(el)
    if (Array.isArray(el)) el.map((item) => collectText(item, acc))
    if (typeof el === 'object') collectText(el.props && el.props.children, acc)
  }
  return acc.join('').trim()
}

const Heading = ({ children: component, id }: { children: any; id?: any }) => {
  const children = component.props.children || ''
  let text = children

  if (null == id) {
    id = collectText(text)
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[?!:]/g, '')
  }

  return (
    <AnchorLink
      href={`#${id}`}
      offset="110"
      id={id}
      onClick={() => {
        history.replaceState('', '', `#${id}`)
      }}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      {component}
    </AnchorLink>
  )
}

export default Heading
