// @flow
import { actionCreator } from 'src/shared/redux/actionCreator';

const { createTypes, createApiActions } = actionCreator('wcm');

const types = {
  sync: ['EXPIRE_HOME_NAV_MENU'],
  async: [
    'FETCH_APPLICATION_PROPERTIES',
    'FETCH_HAZARDOUS_MATERIALS_OVERLAY',
    'FETCH__TAXES_AND_FEES',
    'FETCH__BAGGAGE_RESTRICTIONS',
    'FETCH_FARE_RULES',
    'FETCH_PRIVACY_POLICY',
    'FETCH_TERMS_AND_CONDITIONS',
    'FETCH_FORMS_OF_PAYMENT',
    'FETCH_CANCELLATION_POLICY',
    'FETCH_CARRIAGE_CONTRACT',
    'FETCH_CHECKIN_AND_REFUND',
    'FETCH_CAR_LIMIT_OF_LIABILITY',
    'FETCH_STANDBY_POLICIES',
    'FETCH_EARLYBIRD_INTRODUCTION',
    'FETCH_FARE_RULES_FOR_FARE_TYPE',
    'FETCH_IN_THE_AIR',
    'FETCH_FLYING_SOUTHWEST',
    'FETCH_AT_THE_AIRPORT',
    'FETCH_BOARDING_THE_PLANE',
    'FETCH_ABOUT_RAPID_REWARDS',
    'FETCH_FARE_DETAILS',
    'FETCH_CONTACT_US',
    'FETCH_TIER_BENEFITS',
    'FETCH_EARLYBIRD_BANNER',
    'FETCH_RAPID_REWARDS_PROMOTIONS',
    'FETCH_CAR_VENDOR_IMAGES',
    'FETCH_SPECIAL_ASSISTANCE',
    'FETCH_TRAVEL_FUNDS_TERMS_CONDITIONS',
    'FETCH_BOOKING_TEASER',
    'FETCH_HOMEPAGE_PROMOTIONS',
    'FETCH_LEARN_MORE_SWABIZ',
    'FETCH_LEARN_MORE_SWABIZ_NOT_ASSOCIATED',
    'FETCH_SPECIAL_DETAIL',
    'FETCH_EXCLUSIVE_PROMOTION_INFO',
    'FETCH_HOME_NAV_MENU',
    'FETCH_RAPID_REWARDS_INFO',
    'FETCH_ERROR_MESSAGES',
    'FETCH_FOOTER',
    'FETCH_YOUNG_TRAVELER_PARENT_CONSENT'
  ]
};

export const apiActionCreator = createApiActions;
export default createTypes(types);