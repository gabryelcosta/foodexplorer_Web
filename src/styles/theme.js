const theme = {
  BACKGROUND: {
    BT_DEFAULT: "#750310",
    BT_HOVER: "#92000E",
    BT_DISABLE: "#AB4D55",
    BG_TAG: "#192227",
    BG_CARD: "#00070A",
    BG_FOOTER: "#00111A",
    BG_HEADER: "#001119",
    BG_LOGIN: "#001119",
    BG_PAGE: "#000A0F",
    BG_INPUT: "#0D1D25",
    BG_BANNER: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
  },
  COLORS: {
    TT_DEFAULT: "#FFFFFF",
    TT_PLACEHOLDER: "#7C7C8A",
    TT_ADMIN: "#82F3FF",
    TT_STEPPER: "#e1e1e6",
    TT_LOGIN_TITLE: "#C4C4CC",
    TT_FOOTER_TITLE: "#4D585E",
    TT_FOOTER_SUBTITLE: "#FFFAF1",
    TT_CARD_TITLE: "#E1E1E6",
    TT_CARD_DESCRIPTION: "#C4C4CC",
    TT_CARD_MONEY: "#82F3FF",
    TT_CARD_STEPPER: "#E1E1E6",
    TT_BUTTON: "#FFFFFF",
    TT_BUTTONTEXT: "#FFFFFF",
    TT_HEADER_TITLE: "#FFFFFF",
    TT_BANNER_TITLE: "#E1E1E6",
    TT_BANNER_SUBTITLE: "#E1E1E6",
    SVG_PAGE_STEPPER: "#FFFFFF",
    SVG_PAGE_LOGOUT: "#FFFFFF",
    SVG_PAGE_POLYGON_FOOTER: "#4D585E",
    SVG_PAGE_POLYGON_HEADER: "#065E7C",
    SVG_CARD_PENCIL: "#E1E1E6",
    SVG_CARD_HEART: "#E1E1E6",
    SVG_CARD_STEPPER: "#FFFFFF",
    SVG_LOGIN_POLYGON_HEADER: "#065E7C",
    SVG_FOOTER_TITLE: "#4D585E",
    BORDER_CARD: "#000204",
  },
  FONTS: {
    FONTS_LOGIN_TITLE: "'Roboto', sans-serif",
    FONTS_LOGIN_TEXTFORM: "'Roboto', sans-serif",
    FONTS_HEARDER_ADMIN: "'Roboto', sans-serif",
    FONTS_HEADER_TITLE: "'Roboto', sans-serif",
    FONTS_HEADER_PLACEHOLDER: "'Roboto', sans-serif",
    FONTS_HEADER_TEXTBUTTON: "'Poppins', sans-serif",
    FONTS_BANNER_TITLE: "'Poppins', sans-serif",
    FONTS_BANNER_SUBTITLE: "'Poppins', sans-serif",
    FONTS_CARD_TITLE: "'Poppins', sans-serif",
    FONTS_CARD_SUBTITLE: "'Roboto', sans serif",
    FONTS_CARD_MONEY: "'Roboto', sans-serif",
    FONTS_CARD_STEPPER: "'Roboto', sans-serif",
    FONTS_FOOTER_TITLE: "'Roboto', sans-serif",
    FONTS_FOOTER_SUBTITLE: "'DM Sans', sans-serif",
    FONTS_TAG: "'Poppins', sans-serif",
    FONTS_BUTTON: "'Poppins', sans-serif",
    FONTS_BUTTONTEXT: "'Poppins', sans-serif",

  },
  IMAGES: {

  }
};

export const light = {
  title: 'light',
  ...theme,
  BACKGROUND: {
    ...theme.BACKGROUND,

  },
  COLORS: {

  },
  IMAGES: {
    ...theme.IMAGES,
  },
};

export const dark = {
  title: 'dark',
  ...theme,
  BACKGROUND: {
    ...theme.BACKGROUND,
  },
  COLORS: {
    ...theme.COLORS,
  },
  IMAGES: {
    ...theme.IMAGES,
  },
};

export default theme;