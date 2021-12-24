// mui components
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'

export const ErrorAlert = ({ error }) => {
  return (
    <Alert severity="error">
      <AlertTitle>
        {error && (
          <Box sx={{ display: 'none' }} component="span">
            {'status: ' + error.code}
            {'message: ' + error.message}
          </Box>
        )}
        Error
      </AlertTitle>
      <strong>
        An unexpected error has occurred, Please wait for a while until
        recovery.
      </strong>
    </Alert>
  )
}
