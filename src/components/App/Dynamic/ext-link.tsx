// mui components
import MuiLink from '@mui/material/Link'

const ExtLink = (props) => (
  <MuiLink
    {...props}
    rel="noopener noreferrer"
    target={props.target || '_blank'}
  />
)

export default ExtLink
