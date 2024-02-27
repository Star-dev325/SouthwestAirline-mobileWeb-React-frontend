module.exports = {
  flightConfirmationPage: {
    headerMessage: {
      key: 'BOOKING_CONFIRMATION',
      header: 'Your trip is booked!',
      body: 'Check in up to 24 hours in advance. The earlier you check in, the better your seat selection.',
      icon: 'POSITIVE',
      textColor: 'DEFAULT',
      backgroundColor: 'DEFAULT'
    },
    dates: { first: '2020-12-19', second: '2020-12-22' },
    destinationDescription: 'Houston',
    failedPassengers: null,
    failedEarlyBird: null,
    pnrs: [
      {
        passengers: [
          {
            displayName: 'Cypressuser Cypressmiddle Cypresslastname I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Eighthuser Middleauto Eighthlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Fifthuser Middleauto Fifthlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Fourthuser Middleauto Fourthlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Secuser Middleauto Seclastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Seventhuser Middleauto Seventhlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Sixthuser Middleauto Sixthlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          },
          {
            displayName: 'Thriduser Middleauto Thridlastauto I',
            accountNumber: null,
            specialAssistanceMessage: null,
            hasAnyEarlyBird: false
          }
        ],
        recordLocator: '3AUVG9'
      }
    ],
    bounds: [
      {
        boundType: 'DEPARTING',
        departureDate: '2020-12-19',
        flights: [{ number: '1628', wifiOnBoard: true }],
        departureTime: '06:00',
        departureAirport: { name: 'Dallas (Love Field)', state: 'TX', code: 'DAL', country: null },
        arrivalTime: '07:10',
        arrivalAirport: { name: 'Houston (Hobby)', state: 'TX', code: 'HOU', country: null },
        passengers: [{ type: 'Passengers', count: 8, fareType: 'Wanna Get Away', bookingCode: null }],
        stops: [],
        fareProductDetails: {
          label: 'Wanna Get Away',
          fareRulesUrl: 'https://mobile.dev2.southwest.com/fare-rules/wanna-get-away'
        },
        isNextDayArrival: false,
        travelTime: '1h 10m'
      },
      {
        boundType: 'RETURNING',
        departureDate: '2020-12-22',
        flights: [{ number: '1636', wifiOnBoard: true }],
        departureTime: '06:00',
        departureAirport: { name: 'Houston (Hobby)', state: 'TX', code: 'HOU', country: null },
        arrivalTime: '07:00',
        arrivalAirport: { name: 'Dallas (Love Field)', state: 'TX', code: 'DAL', country: null },
        passengers: [{ type: 'Passengers', count: 8, fareType: 'Wanna Get Away', bookingCode: null }],
        stops: [],
        fareProductDetails: {
          label: 'Wanna Get Away',
          fareRulesUrl: 'https://mobile.dev2.southwest.com/fare-rules/wanna-get-away'
        },
        isNextDayArrival: false,
        travelTime: '1h 0m'
      }
    ],
    billingInfo: {
      cardType: 'VISA',
      lastFourDigits: '4113',
      cardHolderName: 'CypressUser CypressLastName',
      amountApplied: { amount: '5,390.40', currencyCode: 'USD', currencySymbol: '$' },
      billingAddress: { streetOne: 'Dallas', streetTwo: 'Irving', location: 'Dallas, TX US 75038' }
    },
    totals: {
      pointsTotal: null,
      moneyTotal: { amount: '5,390.40', currencyCode: 'USD', currencySymbol: '$' },
      adultFare: {
        baseFare: {
          fare: { amount: '600.00', currencyCode: 'USD', currencySymbol: '$' },
          discount: null,
          totalBaseFare: null
        },
        taxesAndFees: [
          {
            code: 'AY',
            description: 'U.S. 9/11 Security Fee',
            fee: { amount: '11.20', currencyCode: 'USD', currencySymbol: '$' }
          },
          {
            code: 'US',
            description: 'U.S. Transportation Tax',
            fee: { amount: '45.00', currencyCode: 'USD', currencySymbol: '$' }
          },
          {
            code: 'ZP',
            description: 'U.S. Flight Segment Tax',
            fee: { amount: '8.60', currencyCode: 'USD', currencySymbol: '$' }
          },
          {
            code: 'XF',
            description: 'U.S. Passenger Facility Chg',
            fee: { amount: '9.00', currencyCode: 'USD', currencySymbol: '$' }
          }
        ],
        totalPerPassenger: {
          points: null,
          money: { amount: '673.80', currencyCode: 'USD', currencySymbol: '$' },
          passengerCount: 8
        },
        paxTypeTotal: {
          moneyTotal: { amount: '5,390.40', currencyCode: 'USD', currencySymbol: '$' },
          pointsTotal: null
        },
        earlyBirdPrice: null,
        earlyBirdPriceDetails: null,
        _meta: { discountedFare: false, recordLocator: '3AUVG9', failedEarlyBird: false }
      },
      _meta: { purchaseWithPoints: false, partialSuccess: false, analytics: null }
    },
    shareDetails: {
      subject: 'Southwest Flight 1628 Dallas (Love Field) to Houston (Hobby)',
      confirmationInfo: 'Confirmation #: 3AUVG9',
      passengerInfo:
        'Passenger names: Cypressuser Cypressmiddle Cypresslastname I, Eighthuser Middleauto Eighthlastauto I, Fifthuser Middleauto Fifthlastauto I, Fourthuser Middleauto Fourthlastauto I, Secuser Middleauto Seclastauto I, Seventhuser Middleauto Seventhlastauto I, Sixthuser Middleauto Sixthlastauto I, Thriduser Middleauto Thridlastauto I',
      flightInfo: [
        {
          header: 'Departing Flight: Sat, Dec 19, 2020',
          title: 'Southwest Flight 1628 Dallas (Love Field) to Houston (Hobby)',
          flightInfo: 'Flight #: 1628',
          departureInfo: 'Departs: 06:00 AM DAL',
          departureDateTime: '2020-12-19T06:00:00.000-06:00',
          stops: null,
          arrivalInfo: 'Arrives: 07:10 AM HOU',
          arrivalDateTime: '2020-12-19T07:10:00.000-06:00',
          travelTime: 'Travel time: 1hr 10 mins'
        },
        {
          header: 'Returning Flight: Tue, Dec 22, 2020',
          title: 'Southwest Flight 1636 Houston (Hobby) to Dallas (Love Field)',
          flightInfo: 'Flight #: 1636',
          departureInfo: 'Departs: 06:00 AM HOU',
          departureDateTime: '2020-12-22T06:00:00.000-06:00',
          stops: null,
          arrivalInfo: 'Arrives: 07:00 AM DAL',
          arrivalDateTime: '2020-12-22T07:00:00.000-06:00',
          travelTime: 'Travel time: 1hr 0 mins'
        }
      ]
    },
    autoProvisioningMessage: null,
    _links: {
      carBooking: {
        href: '/v1/mobile-misc/feature/cars/products',
        method: 'GET',
        query: {
          'pickup-location': 'HOU',
          'return-location': 'HOU',
          'pickup-datetime': '2020-12-19T07:30',
          'return-datetime': '2020-12-22T06:00'
        }
      }
    },
    _analytics: {
      'air.fareTypeb1': 'WGA',
      'air.fareTypeb2': 'WGA',
      'air.fareProductIdb1': 'WGA',
      'air.fareProductIdb2': 'WGA',
      'air.fareClassb1': 'V',
      'air.fareClassb2': 'V'
    }
  }
};