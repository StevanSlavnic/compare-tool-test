import theme from 'theme/theme'

/* Predefined device media width */

export const devices = {
  mobileS: `(min-width: ${theme.screenSize.mobileS})`,
  mobileM: `(min-width: ${theme.screenSize.mobileM})`,
  mobileL: `(min-width: ${theme.screenSize.mobileL})`,
  tablet: `(min-width: ${theme.screenSize.tablet})`,
  laptop: `(min-width: ${theme.screenSize.laptop})`,
  laptopL: `(min-width: ${theme.screenSize.laptopL})`,
  desktop: `(min-width: ${theme.screenSize.desktop})`,
  desktopL: `(min-width: ${theme.screenSize.desktop})`,
}
