const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const breakpoints = {
  tillTablet: `(max-width: ${size.tablet})`,
  onlySmallMobile: `(max-width: ${size.mobileS})`,
}
