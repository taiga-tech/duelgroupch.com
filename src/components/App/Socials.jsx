// mui components
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
// local constants
import { SOCIALS } from 'constants/social'

export const Socials = () => {
  return (
    <Stack spacing={2} direction="row">
      {SOCIALS.map((sns, i) => (
        <IconButton
          sx={sns.sx}
          target="_blank"
          rel="noopener noreferrer"
          href={sns.href}
          aria-label={sns.title}
          title={sns.title}
          size="small"
          key={i}
        >
          {sns.icon}
        </IconButton>
      ))}
    </Stack>
  )
}
