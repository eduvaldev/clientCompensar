import {
  ENLACES_LINK_ERROR,
  ENLACES_LINK_REQUESTING,
  ENLACES_LINK_SUCCESS,
  ENLACES_TYPEFORM_REQUESTING,
  ENLACES_TYPEFORM_SUCCESS,
  ENLACES_TYPEFORM_ERROR,
} from './constants';

export const enlaceLinkRequesting = (token) => ({
  type: ENLACES_LINK_REQUESTING,
  token,
});

export const enlaceLinkSuccess = (enlaces) => ({
  type: ENLACES_LINK_SUCCESS,
  enlaces,
});

export const enlaceLinkError = (error) => ({
  type: ENLACES_LINK_ERROR,
  error,
});

export const enlaceTypeFormRequesting = (token) => ({
  type: ENLACES_TYPEFORM_REQUESTING,
  token,
});

export const enlaceTypeFormSuccess = (enlaces) => ({
  type: ENLACES_TYPEFORM_SUCCESS,
  enlaces,
});

export const enlaceTypeFormError = (error) => ({
  type: ENLACES_TYPEFORM_ERROR,
  error,
});

