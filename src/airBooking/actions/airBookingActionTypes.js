import { actionCreator } from 'src/shared/redux/actionCreator';

const { createTypes, createApiActions } = actionCreator('airBooking');

const types = {
  sync: [
    'CALENDAR_STRIP',
    'CLEAR_ACCOUNT_INFO',
    'CLEAR_MULTI_SELECT_BOUND',
    'CLEAR_SELECTED_FREQUENT_TRAVELERS',
    'CLEAR_SPECIAL_ASSISTANCE',
    'CLEAR_SPLIT_PAY_OPTIONS_LIST',
    'DELETE_CURRENT_SEARCH_REQUEST',
    'FLIGHT_PRICING_RESUME_AFTER_LOGIN',
    'FLIGHT_PRICING_SET_HAS_UPSELL_ERROR',
    'GENERATE_PASSENGER_PAGE_INFO',
    'GENERATE_PURCHASE_SUMMARY_PAGE',
    'LOAD_FREQUENT_TRAVELER_PAGE',
    'LOW_FARE_CALENDAR_SELECT_INBOUND_DATE',
    'LOW_FARE_CALENDAR_SELECT_OUTBOUND_DATE',
    'PREFILL_PASSENGER_INFO',
    'REMOVE_SELECTED_FREQUENT_TRAVELER_PAX_ID',
    'RESET_AIR_BOOKING_FLOW_DATA',
    'RESET_CONTACT_METHOD',
    'RESET_FLIGHT_PRICING_PAGE_RESPONSE',
    'RESET_FLIGHT_SEARCH_REQUEST',
    'RESET_PASSENGER_PASSPORT',
    'RESET_PASSENGER',
    'RESET_PAYMENT_INFO',
    'RESET_SELECTED_PRODUCTS',
    'RESET_SPLIT_PAY_TERMS_AND_CONDITIONS',
    'RESUME_AIR_BOOKING_FLOW_DATA',
    'SAVE_CHASE_SESSION_ID',
    'SAVE_EARLY_BIRD_SELECTED',
    'SAVE_PASSENGER_COUNT',
    'SAVE_PASSENGER_PASSPORT',
    'SAVE_PASSENGER',
    'SAVE_PAYMENT_INFO',
    'SAVE_SELECTED_FLIGHT',
    'SAVE_SELECTED_PRODUCTS',
    'SAVE_SPLIT_PAY_TERMS_AND_CONDITIONS',
    'SAVE_TRAVEL_FUNDS_ADDRESS',
    'SELECT_FLIGHT_PRODUCT',
    'SELECTED_FREQUENT_TRAVELER',
    'SET_EARLY_BIRD_ELIGIBILITY',
    'SET_EARLY_BIRD_PRICING_DIFFERENCE',
    'SET_EARLY_BIRD_PRICING_TOKEN',
    'SET_ELIGIBLE_EXPRESS_CHECKOUT',
    'SET_EXPRESS_CHECKOUT_FROM_PASSENGER_PAGE',
    'SET_INTERNATIONAL_BOOKING_FLAG',
    'SET_IS_EXPRESS_CHECKOUT',
    'SET_IS_LOW_FARE_CALENDAR_ENABLED',
    'SET_IS_SPLIT_PAY_VISIBLE',
    'SET_IS_UPLIFT_VISIBLE',
    'SORT_FLIGHT_SHOPPING_PAGE_BY',
    'SPLIT_PAY_RESUME_AFTER_LOGIN',
    'UPDATE_CONTACT_METHOD',
    'UPDATE_CONTACT_TRAVEL_INFO_METHOD',
    'UPDATE_CORPORATE_BOOKING_SWITCH_INFO',
    'UPDATE_FLIGHT_INITIAL_SEARCH',
    'UPDATE_FLIGHT_SEARCH_REQUEST',
    'UPDATE_FREQUENT_TRAVELER_PAX_ID',
    'UPDATE_LOW_FARE_CALENDAR_INBOUND_ANALYTICS',
    'UPDATE_LOW_FARE_CALENDAR_OUTBOUND_ANALYTICS',
    'UPDATE_MULTI_SELECT_BOUND',
    'UPDATE_PASSENGER',
    'UPDATE_SELECTED_IRN',
    'UPDATE_SPECIAL_ASSISTANCE'
  ],
  async: [
    'FETCH_ACCOUNT_LOOK_UP',
    'FETCH_BOOKING_CONFIRMATION_PAGE',
    'FETCH_CONFIRMATION_PAGE_PLACEMENTS',
    'FETCH_EARLY_BIRD_IN_PATH_INFO',
    'FETCH_FLIGHT_PRICING_PAGE',
    'FETCH_FLIGHT_SELECT_FARE_PAGE_PLACEMENTS',
    'FETCH_FLIGHT_SELECT_PAGE_PLACEMENTS',
    'FETCH_INDEX_PAGE_PLACEMENTS',
    'FETCH_FLIGHT_SHOPPING_MULTI_SELECT_PAGE',
    'FETCH_FLIGHT_SHOPPING_PAGE',
    'FETCH_LOW_FARE_CALENDAR',
    'FETCH_NEXT_LOW_FARE_CALENDAR_INBOUND_PAGE',
    'FETCH_NEXT_LOW_FARE_CALENDAR_OUTBOUND_PAGE',
    'FETCH_PASSENGER_VALIDATIONS',
    'FETCH_PREV_LOW_FARE_CALENDAR_INBOUND_PAGE',
    'FETCH_PREV_LOW_FARE_CALENDAR_OUTBOUND_PAGE',
    'FETCH_PRICE_PAGE_PLACEMENTS',
    'FETCH_PURCHASE_PAGE_PLACEMENTS',
    'FETCH_RECENT_SEARCH_PAGE',
    'FETCH_SAVED_CREDIT_CARDS_AND_PASSENGER_INFO',
    'FETCH_SPLIT_PAY_OPTIONS_LIST',
    'FETCH_SPLIT_PAY_PAGE_PLACEMENTS'
  ]
};

export const apiActionCreator = createApiActions;
export default createTypes(types);