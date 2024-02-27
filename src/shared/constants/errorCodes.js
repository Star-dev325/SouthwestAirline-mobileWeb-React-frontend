export const AUTHENTICATION_ERROR_BASE = 401120;
export const CLOSED_FOR_ACCEPTANCE_ERROR_CODE = 500599341;
export const ERROR_CID_NOT_AVAILABLE = 410517137;
export const ERROR_GHOST_CARD_EXPIRED = 400307631;
export const ERROR_GHOST_CARD_REQUIRED = 400307630;
export const ERROR_HAWAII_MESSAGE = 400310589;
export const ERROR_INTERNAL_REFERENCE_NUMBER_REQUIRED = 400517214;
export const ERROR_NO_ROUTES_EXISTS = [400521204, 400310306, 400621351];
export const ERROR_PROMO_TOKEN_CHANGED_FROM_SHOPPING_TO_PURCHASE = 400520566;
export const ERROR_PROMO_TOKEN_EXPIRED_ON_PURCHASE = 400520565;
export const ERROR_SAME_DAY_LOGIN_MISMATCH = 401308425;
export const ERROR_SHAPE_ACCESS_DENIED = 429999999;
export const ERROR_SHOULD_REDIRECT_TO_HOME_PAGE = 400308420;
export const ERROR_TRAVELER_NOT_ASSOCIATED_GHOST_CARD_ORIGIN = 400517107;
export const ERROR_TRAVELER_NOT_ASSOCIATED_IRN_ORIGIN = 400517183;
export const ERROR_VALIDATION_CORPORATE_PROMO_TOKEN_EXPIRED = 400310803;
export const ERROR_VALIDATION_CORPORATE_PROMO_TOKEN_INVALID = 400310652;
export const NO_NEAREST_SWA_AIRPORT = 400307624;
export const SESSION_TIMEOUT_ERRORS = [400310654, 400310787];
export const SITA_FAILURE = 503599340;

export const GATEWAY_LOGIN_ERRORS = {
  ERROR_CHAPI_LOGIN_REQUIRED: 401308999,
  ERROR_RETRIEVING_RR_NUMBER_FROM_REQUEST: 401120691
};
export const GATEWAY_REAUTHENTICATE_ERRORS = {
  ERROR_PROTECTED_LOGIN_TIME_EXPIRED: 401120726,
  ERROR_ELEVATED_LOGIN_TIME_EXPIRED: 401120746
};
export const GATEWAY_RELOGIN_ERRORS = {
  ERROR_ACCESS_TOKEN_NOT_VALID_OLD: 401120278,
  ERROR_ACCESS_TOKEN_NOT_FOUND_OLD: 401120279,
  ERROR_ACCESS_TOKEN_EXPIRED_OLD: 409120360,
  ERROR_ACCESS_TOKEN_KEY_MISMATCH_OLD: 401120356,
  ERROR_ACCESS_TOKEN_LIMITED_ACCESS_OLD: 401120357,
  ERROR_ID_TOKEN_VERIFYING_MISMATCH_OLD: 400120245,
  ERROR_ID_TOKEN_EXPIRED_OLD: 400120247,
  ERROR_ID_AND_ACCESS_TOKEN_MISMATCH_OLD: 400120217,

  ERROR_CHAPI_CALCULATE_FUNDS: 401310999, // TODO: Not a GW Error. Temp solution until MOB-119035 is implemented

  ERROR_ACCESS_TOKEN_NOT_VALID: 401120721,
  ERROR_ACCESS_TOKEN_NOT_FOUND: 401120722,
  ERROR_ACCESS_TOKEN_EXPIRED: 401120723,
  ERROR_ACCESS_TOKEN_KEY_MISMATCH: 401120724,
  ERROR_ACCESS_TOKEN_LIMITED_ACCESS: 401120727,
  ERROR_ID_TOKEN_VERIFYING_MISMATCH: 401120728,
  ERROR_ID_TOKEN_EXPIRED: 401120729,
  ERROR_ID_AND_ACCESS_TOKEN_MISMATCH: 401120730
};
export const GATEWAY_RETRY_ERRORS = {
  ERROR_ELEVATED_ACCESS_TOKEN_NOT_VALID: 401120741,
  ERROR_ELEVATED_ACCESS_TOKEN_NOT_FOUND: 401120742,
  ERROR_ELEVATED_ACCESS_TOKEN_EXPIRED: 401120743,
  ERROR_ELEVATED_ACCESS_TOKEN_KEY_MISMATCH: 401120744,
  ERROR_ELEVATED_ACCESS_TOKEN_SCOPE_MISMATCH: 401120745,
  ERROR_ELEVATED_ACCESS_TOKEN_LIMITED_ACCESS: 401120747,
  ERROR_ELEVATED_ID_TOKEN_VERIFYING_MISMATCH: 401120748,
  ERROR_ELEVATED_ID_TOKEN_EXPIRED: 401120749,
  ERROR_ELEVATED_ID_AND_ACCESS_TOKEN_MISMATCH: 401120750,
  ERROR_ELEVATED_ID_TOKEN_MISMATCH: 401120751,

  ERROR_UNPROTECTED_ID_TOKEN_VERIFYING_MISMATCH: 400120701,
  ERROR_UNPROTECTED_ID_TOKEN_EXPIRED: 400120702,
  ERROR_UNPROTECTED_API_KEY_MISMATCH: 400120703
};
export const GATEWAY_SCOPE_ERRORS = {
  ERROR_ACCESS_TOKEN_SCOPE_MISMATCH_OLD: 401120359,
  ERROR_ACCESS_TOKEN_SCOPE_MISMATCH: 401120725
};
export const POSITION_ERROR = {
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3
};
export const UPGRADED_BOARDING_RESTART_FLOW_ERRORS = {
  ERROR__UPGRADED_BOARDING__INSUFFICIENT_INVENTORY: [
    400632322,
    400632323,
    404532203,
    400632345,
    400632349
  ],
  ERROR__UPGRADED_BOARDING__NO_PASSENGER_OR_BOUND_ELIGIBLE: [
    400632209,
    400632210,
    400632211
  ],
  VALIDATION__SEARCH_TOKEN__EXPIRED: [
    400308278
  ]
};
