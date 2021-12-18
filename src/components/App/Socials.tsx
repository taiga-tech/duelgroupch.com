// types
import type { SocialObj } from 'constants/types/socials'
// mui components
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
// local constants
import { SOCIALS } from 'constants/social'

export const Socials = (): JSX.Element => {
  return (
    <Stack spacing={2} direction="row">
      {SOCIALS.map((sns: SocialObj, i: number) => (
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
