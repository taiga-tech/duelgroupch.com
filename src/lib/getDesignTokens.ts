export const getDesignTokens = (mode: boolean): object => ({
  // example of a components style overrides
  // components: {
  //   MuiAppBar: {
  //     styleOverrides: {
  //       root: {
  //         color: mode ? '#fff' : '#000',
  //         // backgroundImage: 'none',
  //         // boxShadow: 'none',
  //       },
  //     },
  //   },
  // },
  palette: {
    mode: mode ? 'dark' : 'light',
    background: {
      secondary: mode ? '#201f1f' : '#e5e5e5',
    },
  },
})
