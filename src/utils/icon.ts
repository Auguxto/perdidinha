import {ImageSourcePropType} from 'react-native';

import bradesco from '@assets/images/png/bradesco.png';
import facebook from '@assets/images/png/facebook.png';
import google from '@assets/images/png/google.png';
import instagram from '@assets/images/png/instagram.png';
import inter from '@assets/images/png/inter.png';
import linkedin from '@assets/images/png/linkedin.png';
import nubank from '@assets/images/png/nubank.png';
import paypal from '@assets/images/png/paypal.png';
import spotify from '@assets/images/png/spotify.png';
import twitter from '@assets/images/png/twitter.png';
import visa from '@assets/images/png/visa.png';

export default function getIcon(iconName: IconName): ImageSourcePropType {
  switch (iconName) {
    case 'bradesco':
      return bradesco;
    case 'facebook':
      return facebook;
    case 'google':
      return google;
    case 'instagram':
      return instagram;
    case 'inter':
      return inter;
    case 'linkedin':
      return linkedin;
    case 'nubank':
      return nubank;
    case 'paypal':
      return paypal;
    case 'spotify':
      return spotify;
    case 'twitter':
      return twitter;
    case 'visa':
      return visa;
  }
}
