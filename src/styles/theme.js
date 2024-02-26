import iconDropDownDay from '../assets/Icons/chevrondownDay.svg';
import iconDropDownNight from '../assets/Icons/chevrondownNight.svg';

const theme = {
  BACKGROUND: {
    BT_DEFAULT: "#750310",
    BT_HOVER: "#92000E",
    BT_DISABLE: "#AB4D55",
    BT_EDIT_UPLOAD: "#0D161B",
    BT_EDIT_REMOVE: "#0D161B",
    BG_TAG: "#192227",
    BG_CARD: "#00070A",
    BG_FOOTER: "#00111A",
    BG_HEADER: "#001119",
    BG_LOGIN: "#000A0F",
    BG_LOGIN_DESKTOP: "#001119",
    BG_PAGE: "#000A0F",
    BG_INPUT: "#0D1D25",
    BG_MENU: "#000A0F",
    BG_MENU_HEADER: "#001119",
    BG_BANNER: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
    BG_EDIT_INPUT: "#0D161B",
    BG_EDIT_TAG: "#76797B",
    BG_EDIT_TAG_BORDER: "#76797B",
    BG_EDIT_SELECT: "#0D1D25",
    BG_EDIT_TEXTAREA: "#0D161B",
    BG_TOGGLE_BUTTON_ACTIVE: "#0D1D25",
    BG_TOGGLE_BUTTON_INATIVE: "#FFFFFF",
    BG_TOGGLE_BUTTON_BORDER: "#065E7C",
    BG_TOGGLE_BUTTON_ICON: "#065E7C",
    BG_PROFILE_CAMERA: "#001119",
  },
  COLORS: {
    TT_DEFAULT: "#FFFFFF",
    TT_PLACEHOLDER: "#7C7C8A",
    TT_ADMIN: "#82F3FF",
    TT_STEPPER: "#e1e1e6",
    TT_LOGIN_TITLE: "#C4C4CC",
    TT_LOGIN_TITLE_DESKTOP: "#FFFFFF",
    TT_FOOTER_TITLE: "#4D585E",
    TT_FOOTER_SUBTITLE: "#FFFAF1",
    TT_CARD_TITLE: "#E1E1E6",
    TT_CARD_DESCRIPTION: "#C4C4CC",
    TT_CARD_FOOD_DESCRIPTION: "#C4C4CC",
    TT_CARD_MONEY: "#82F3FF",
    TT_CARD_STEPPER: "#E1E1E6",
    TT_BUTTON: "#FFFFFF",
    TT_BUTTONTEXT: "#FFFFFF",
    TT_HEADER_TITLE: "#FFFFFF",
    TT_BANNER_TITLE: "#E1E1E6",
    TT_BANNER_SUBTITLE: "#E1E1E6",
    TT_MENU_HEADER_TITLE: "#FFFFFF",
    TT_DETALHES_NAV_TITLE: "#E1E1E6",
    TT_DETALHES_TEXT_TITLE: "#E1E1E6",
    TT_DETALHES_TEXT_DESCRIPTION: "#E1E1E6",
    TT_DETALHES_BT_TEXT: "#FFFFFF",
    TT_TAG: "#FFFFFF",
    TT_EDIT_NAV_TITLE: "#E1E1E6",
    TT_EDIT_CONTENT_SUBTITLE: "#C4C4CC",
    TT_EDIT_INPUT_TEXT: "#7C7C8A",
    TT_EDIT_TAG_TEXT: "#FFFFFF",
    TT_EDIT_TAG_TEXTADD: "#7C7C8A",
    TT_EDIT_SELECT_TEXT: "#C4C4CC",
    TT_EDIT_TEXTAREA: "#7C7C8A",
    TT_PROFILE_NAV_TITLE: "#E1E1E6",
    TT_REQUEST_TITLE: "#E1E1E6",
    TT_REQUEST_SUBTITLE: "#E1E1E6",
    TT_REQUEST_ACTION: "#AB4D55",
    TT_ORDERS_TITLE: "#C4C4CC",
    TT_ORDERS_SUBTITLE: "#C4C4CC",
    SVG_EDIT_TAG_REMOVE: "#FFFFFF",
    SVG_EDIT_TAG_ADD: "#7C7C8A",
    SVG_PAGE_STEPPER: "#FFFFFF",
    SVG_PAGE_LOGOUT: "#FFFFFF",
    SVG_PAGE_POLYGON_FOOTER: "#4D585E",
    SVG_PAGE_POLYGON_HEADER: "#065E7C",
    SVG_CARD_PENCIL: "#E1E1E6",
    SVG_CARD_HEART: "#E1E1E6",
    SVG_CARD_STEPPER: "#FFFFFF",
    SVG_LOGIN_POLYGON_HEADER: "#065E7C",
    SVG_FOOTER_TITLE: "#4D585E",
    SVG_SIDEMENU_CLOSEICON: "#FFFFFF",
    SVG_PROFILE_CAMERA: "#E1E1E6",
    SVG_ORDERS_PENDING: "#AB222E",
    SVG_ORDERS_DELIVERED: "#04D361",
    SVG_ORDERS_PREPARING: "#FBA94C",
    SVG_ORDERS_DECLINED: "#7C7C8A",
    BORDER_CARD: "#000204",
    BORDER_DEFAULT: "#FFFFFF",
    BORDER_MENU_NAV: "#192227",
    BORDER_ORDERS: "#192227",
    BORDER_LOGIN_DESKTOP: "#FFFFFF",
    BORDER_HISTORY_DESKTOP: "#192227",
  },
  FONTS: {
    FONTS_LOGIN_TITLE: "'Roboto', sans-serif",
    FONTS_LOGIN_TITLE_DESKTOP: "'Poppins', sans-serif",
    FONTS_LOGIN_TEXTFORM: "'Roboto', sans-serif",
    FONTS_HEARDER_ADMIN: "'Roboto', sans-serif",
    FONTS_HEADER_TITLE: "'Roboto', sans-serif",
    FONTS_HEADER_PLACEHOLDER: "'Roboto', sans-serif",
    FONTS_HEADER_TEXTBUTTON: "'Poppins', sans-serif",
    FONTS_MENU_HEADER_TITLE: "'Roboto', sans-serif",
    FONTS_MENU_CONTENT_NAV: "'Poppins', sans-serif",
    FONTS_BANNER_TITLE: "'Poppins', sans-serif",
    FONTS_BANNER_SUBTITLE: "'Poppins', sans-serif",
    FONTS_CARD_TITLE: "'Poppins', sans-serif",
    FONTS_CARD_SUBTITLE: "'Roboto', sans serif",
    FONTS_CARD_DESCRITPION: "'Roboto', sans serif",
    FONTS_CARD_MONEY: "'Roboto', sans-serif",
    FONTS_CARD_STEPPER: "'Roboto', sans-serif",
    FONTS_FOOTER_TITLE: "'Roboto', sans-serif",
    FONTS_FOOTER_SUBTITLE: "'DM Sans', sans-serif",
    FONTS_TAG: "'Poppins', sans-serif",
    FONTS_BUTTON: "'Poppins', sans-serif",
    FONTS_BUTTONTEXT: "'Poppins', sans-serif",
    FONTS_DETALHES_NAV_TITLE: "'Poppins', sans-serif",
    FONTS_DETALHES_TEXT_TITLE: "'Poppins', sans-serif",
    FONTS_DETALHES_TEXT_DESCRIPTION: "'Poppins', sans-serif",
    FONTS_DETALHES_BT_TEXT: "'Poppins', sans-serif",
    FONTS_EDIT_NAV_TITLE: "'Poppins', sans-serif",
    FONTS_EDIT_CONTENT_SUBTITLE: "'Roboto', sans-serif",
    FONTS_EDIT_TAG_TEXT: "'Roboto', sans-serif",
    FONTS_EDIT_INPUT_TEXT: "'Roboto', sans-serif",
    FONTS_PROFILE_NAV_TITLE: "'Poppins', sans-serif",
    FONTS_REQUEST_TITLE: "'Poppins', sans-serif",
    FONTS_REQUEST_SUBTITLE: "'Poppins', sans-serif",
    FONTS_REQUEST_ACTION: "'Roboto', sans-serif",
    FONTS_ORDERS_TITLE: "'Roboto', sans-serif",
    FONTS_ORDERS_SUBTITLE: "'Roboto', sans-serif",

  },
  IMAGES: {
    DROPDOWN_DAY: iconDropDownDay,
    DROPDOWN_NIGHT: iconDropDownNight,
  }
};

export const light = {
  title: 'light',
  ...theme,
  BACKGROUND: {
    BT_DEFAULT: "#750310",
    BT_HOVER: "#92000E",
    BT_DISABLE: "#AB4D55",
    BT_EDIT_UPLOAD: "#0D161B",
    BT_EDIT_REMOVE: "#0D161B",
    BG_TAG: "#192227",
    BG_CARD: "#76797B",
    BG_FOOTER: "#76797B",
    BG_HEADER: "#76797B",
    BG_LOGIN: "#FFFFFF",
    BG_LOGIN_DESKTOP: "#76797B",
    BG_PAGE: "#FFFFFF",
    BG_INPUT: "#0D1D25",
    BG_MENU: "#FFFFFF",
    BG_MENU_HEADER: "#76797B",
    BG_BANNER: "#76797B",
    BG_EDIT_INPUT: "#0D161B",
    BG_EDIT_TAG: "#76797B",
    BG_EDIT_TAG_BORDER: "#76797B",
    BG_EDIT_SELECT: "#0D1D25",
    BG_EDIT_TEXTAREA: "#0D161B",
    BG_TOGGLE_BUTTON_ACTIVE: "#0D1D25",
    BG_TOGGLE_BUTTON_INATIVE: "#FFFFFF",
    BG_TOGGLE_BUTTON_BORDER: "#065E7C",
    BG_TOGGLE_BUTTON_ICON: "#065E7C",
    BG_PROFILE_CAMERA: "#76797B",
  },
  COLORS: {
    TT_DEFAULT: "#000A0F",
    TT_PLACEHOLDER: "#7C7C8A",
    TT_ADMIN: "#82F3FF",
    TT_STEPPER: "#192227",
    TT_LOGIN_TITLE: "#192227",
    TT_LOGIN_TITLE_DESKTOP: "#000A0F",
    TT_FOOTER_TITLE: "#000A0F",
    TT_FOOTER_SUBTITLE: "#000A0F",
    TT_CARD_TITLE: "#000A0F",
    TT_CARD_DESCRIPTION: "#192227",
    TT_CARD_FOOD_DESCRIPTION: "#192227",
    TT_CARD_MONEY: "#0D1D25",
    TT_CARD_STEPPER: "#0D1D25",
    TT_BUTTON: "#FFFFFF",
    TT_BUTTONTEXT: "#000A0F",
    TT_HEADER_TITLE: "#000A0F",
    TT_BANNER_TITLE: "#192227",
    TT_BANNER_SUBTITLE: "#192227",
    TT_MENU_HEADER_TITLE: "#000A0F",
    TT_DETALHES_NAV_TITLE: "#192227",
    TT_DETALHES_TEXT_TITLE: "#192227",
    TT_DETALHES_TEXT_DESCRIPTION: "#192227",
    TT_DETALHES_BT_TEXT: "#000A0F",
    TT_TAG: "#000A0F",
    TT_EDIT_NAV_TITLE: "#192227",
    TT_EDIT_CONTENT_SUBTITLE: "#192227",
    TT_EDIT_INPUT_TEXT: "#7C7C8A",
    TT_EDIT_TAG_TEXT: "#000A0F",
    TT_EDIT_TAG_TEXTADD: "#7C7C8A",
    TT_EDIT_SELECT_TEXT: "#C4C4CC",
    TT_EDIT_TEXTAREA: "#7C7C8A",
    TT_PROFILE_NAV_TITLE: "#192227",
    TT_REQUEST_TITLE: "#192227",
    TT_REQUEST_SUBTITLE: "#192227",
    TT_REQUEST_ACTION: "#AB4D55",
    TT_ORDERS_TITLE: "#000A0F",
    TT_ORDERS_SUBTITLE: "#000A0F",
    SVG_EDIT_TAG_REMOVE: "#000A0F",
    SVG_EDIT_TAG_ADD: "#7C7C8A",
    SVG_PAGE_STEPPER: "#0D1D25",
    SVG_PAGE_LOGOUT: "#000A0F",
    SVG_PAGE_POLYGON_FOOTER: "#4D585E",
    SVG_PAGE_POLYGON_HEADER: "#065E7C",
    SVG_CARD_PENCIL: "#192227",
    SVG_CARD_HEART: "#192227",
    SVG_CARD_STEPPER: "#000A0F",
    SVG_LOGIN_POLYGON_HEADER: "#065E7C",
    SVG_FOOTER_TITLE: "#4D585E",
    SVG_SIDEMENU_CLOSEICON: "#000A0F",
    SVG_PROFILE_CAMERA: "#E1E1E6",
    SVG_ORDERS_PENDING: "#AB222E",
    SVG_ORDERS_DELIVERED: "#04D361",
    SVG_ORDERS_PREPARING: "#FBA94C",
    SVG_ORDERS_DECLINED: "#7C7C8A",
    BORDER_CARD: "#000204",
    BORDER_DEFAULT: "#000A0F",
    BORDER_MENU_NAV: "#192227",
    BORDER_ORDERS: "#192227",
    BORDER_LOGIN_DESKTOP: "#000A0F",
    BORDER_HISTORY_DESKTOP: "#192227",
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