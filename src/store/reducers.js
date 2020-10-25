import * as types from "./constants"

const initialState = { greyNunsCasaHubAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_BILL_LIST:
    case types.API_V1_BILL_LIST_SUCCEEDED:
    case types.API_V1_BILL_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_BILL_CREATE:
    case types.API_V1_BILL_CREATE_SUCCEEDED:
    case types.API_V1_BILL_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_BILL_READ:
    case types.API_V1_BILL_READ_SUCCEEDED:
    case types.API_V1_BILL_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_BILL_UPDATE:
    case types.API_V1_BILL_UPDATE_SUCCEEDED:
    case types.API_V1_BILL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_BILL_PARTIAL_UPDATE:
    case types.API_V1_BILL_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_BILL_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_BILL_DELETE:
    case types.API_V1_BILL_DELETE_SUCCEEDED:
    case types.API_V1_BILL_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_LIST:
    case types.API_V1_CATEGORY_LIST_SUCCEEDED:
    case types.API_V1_CATEGORY_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_CREATE:
    case types.API_V1_CATEGORY_CREATE_SUCCEEDED:
    case types.API_V1_CATEGORY_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_READ:
    case types.API_V1_CATEGORY_READ_SUCCEEDED:
    case types.API_V1_CATEGORY_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_UPDATE:
    case types.API_V1_CATEGORY_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_PARTIAL_UPDATE:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CATEGORY_DELETE:
    case types.API_V1_CATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_CATEGORY_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_LIST:
    case types.API_V1_CONTACTINFO_LIST_SUCCEEDED:
    case types.API_V1_CONTACTINFO_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_CREATE:
    case types.API_V1_CONTACTINFO_CREATE_SUCCEEDED:
    case types.API_V1_CONTACTINFO_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_READ:
    case types.API_V1_CONTACTINFO_READ_SUCCEEDED:
    case types.API_V1_CONTACTINFO_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_UPDATE:
    case types.API_V1_CONTACTINFO_UPDATE_SUCCEEDED:
    case types.API_V1_CONTACTINFO_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_PARTIAL_UPDATE:
    case types.API_V1_CONTACTINFO_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CONTACTINFO_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CONTACTINFO_DELETE:
    case types.API_V1_CONTACTINFO_DELETE_SUCCEEDED:
    case types.API_V1_CONTACTINFO_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_LIST:
    case types.API_V1_COUNTRY_LIST_SUCCEEDED:
    case types.API_V1_COUNTRY_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_CREATE:
    case types.API_V1_COUNTRY_CREATE_SUCCEEDED:
    case types.API_V1_COUNTRY_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_READ:
    case types.API_V1_COUNTRY_READ_SUCCEEDED:
    case types.API_V1_COUNTRY_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_UPDATE:
    case types.API_V1_COUNTRY_UPDATE_SUCCEEDED:
    case types.API_V1_COUNTRY_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_PARTIAL_UPDATE:
    case types.API_V1_COUNTRY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_COUNTRY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_COUNTRY_DELETE:
    case types.API_V1_COUNTRY_DELETE_SUCCEEDED:
    case types.API_V1_COUNTRY_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_LIST:
    case types.API_V1_DRIVERORDER_LIST_SUCCEEDED:
    case types.API_V1_DRIVERORDER_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_CREATE:
    case types.API_V1_DRIVERORDER_CREATE_SUCCEEDED:
    case types.API_V1_DRIVERORDER_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_READ:
    case types.API_V1_DRIVERORDER_READ_SUCCEEDED:
    case types.API_V1_DRIVERORDER_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_UPDATE:
    case types.API_V1_DRIVERORDER_UPDATE_SUCCEEDED:
    case types.API_V1_DRIVERORDER_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_PARTIAL_UPDATE:
    case types.API_V1_DRIVERORDER_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_DRIVERORDER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERORDER_DELETE:
    case types.API_V1_DRIVERORDER_DELETE_SUCCEEDED:
    case types.API_V1_DRIVERORDER_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_LIST:
    case types.API_V1_DRIVERPROFILE_LIST_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_CREATE:
    case types.API_V1_DRIVERPROFILE_CREATE_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_READ:
    case types.API_V1_DRIVERPROFILE_READ_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_UPDATE:
    case types.API_V1_DRIVERPROFILE_UPDATE_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE:
    case types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_DRIVERPROFILE_DELETE:
    case types.API_V1_DRIVERPROFILE_DELETE_SUCCEEDED:
    case types.API_V1_DRIVERPROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_LIST:
    case types.API_V1_ITEM_LIST_SUCCEEDED:
    case types.API_V1_ITEM_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_CREATE:
    case types.API_V1_ITEM_CREATE_SUCCEEDED:
    case types.API_V1_ITEM_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_READ:
    case types.API_V1_ITEM_READ_SUCCEEDED:
    case types.API_V1_ITEM_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_UPDATE:
    case types.API_V1_ITEM_UPDATE_SUCCEEDED:
    case types.API_V1_ITEM_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_PARTIAL_UPDATE:
    case types.API_V1_ITEM_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_ITEM_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEM_DELETE:
    case types.API_V1_ITEM_DELETE_SUCCEEDED:
    case types.API_V1_ITEM_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_LIST:
    case types.API_V1_ITEMVARIANT_LIST_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_CREATE:
    case types.API_V1_ITEMVARIANT_CREATE_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_READ:
    case types.API_V1_ITEMVARIANT_READ_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_UPDATE:
    case types.API_V1_ITEMVARIANT_UPDATE_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_PARTIAL_UPDATE:
    case types.API_V1_ITEMVARIANT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ITEMVARIANT_DELETE:
    case types.API_V1_ITEMVARIANT_DELETE_SUCCEEDED:
    case types.API_V1_ITEMVARIANT_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_LIST:
    case types.API_V1_ORDER_LIST_SUCCEEDED:
    case types.API_V1_ORDER_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_CREATE:
    case types.API_V1_ORDER_CREATE_SUCCEEDED:
    case types.API_V1_ORDER_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_READ:
    case types.API_V1_ORDER_READ_SUCCEEDED:
    case types.API_V1_ORDER_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_UPDATE:
    case types.API_V1_ORDER_UPDATE_SUCCEEDED:
    case types.API_V1_ORDER_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_PARTIAL_UPDATE:
    case types.API_V1_ORDER_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_ORDER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_ORDER_DELETE:
    case types.API_V1_ORDER_DELETE_SUCCEEDED:
    case types.API_V1_ORDER_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_LIST:
    case types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_CREATE:
    case types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_READ:
    case types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_UPDATE:
    case types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_DELETE:
    case types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_LIST:
    case types.API_V1_PROFILE_LIST_SUCCEEDED:
    case types.API_V1_PROFILE_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_CREATE:
    case types.API_V1_PROFILE_CREATE_SUCCEEDED:
    case types.API_V1_PROFILE_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_READ:
    case types.API_V1_PROFILE_READ_SUCCEEDED:
    case types.API_V1_PROFILE_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_UPDATE:
    case types.API_V1_PROFILE_UPDATE_SUCCEEDED:
    case types.API_V1_PROFILE_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_PARTIAL_UPDATE:
    case types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_PROFILE_DELETE:
    case types.API_V1_PROFILE_DELETE_SUCCEEDED:
    case types.API_V1_PROFILE_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_LIST:
    case types.API_V1_REVIEW_LIST_SUCCEEDED:
    case types.API_V1_REVIEW_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_CREATE:
    case types.API_V1_REVIEW_CREATE_SUCCEEDED:
    case types.API_V1_REVIEW_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_READ:
    case types.API_V1_REVIEW_READ_SUCCEEDED:
    case types.API_V1_REVIEW_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_UPDATE:
    case types.API_V1_REVIEW_UPDATE_SUCCEEDED:
    case types.API_V1_REVIEW_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_PARTIAL_UPDATE:
    case types.API_V1_REVIEW_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_REVIEW_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_REVIEW_DELETE:
    case types.API_V1_REVIEW_DELETE_SUCCEEDED:
    case types.API_V1_REVIEW_DELETE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        greyNunsCasaHubAPI: [...state.greyNunsCasaHubAPI, action.response]
      })
    default:
      return state
  }
}
