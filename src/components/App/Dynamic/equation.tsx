// katex
import katex, { renderToString, ParseError } from 'katex'
import 'katex/dist/katex.css'

const render = (expression: string, displayMode: boolean): string => {
  let result: string
  try {
    result = renderToString(expression, { displayMode: displayMode })
  } catch (e) {
    if (e instanceof ParseError) {
      result = e.message
    }
    if (process.env.NODE_ENV !== 'production') {
      console.error(e)
    }
  }
  return result
}

const Equation = ({ children, displayMode = true }) => {
  // TODO: can not export 'katex' css and fonts at webpack problem maybe

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children, displayMode),
      }}
    />
  )
}

export default Equation
