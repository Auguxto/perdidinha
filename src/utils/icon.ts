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
import americanas from '@assets/images/png/americanas.png';
import bancodobrasil from '@assets/images/png/bancodobrasil.png';
import carteirademotorista from '@assets/images/png/carteirademotorista.png';
import carteiradetrabalho from '@assets/images/png/carteiradetrabalho.png';
import casasbahia from '@assets/images/png/casasbahia.png';
import clue from '@assets/images/png/clue.png';
import magalu from '@assets/images/png/magalu.png';
import mastercard from '@assets/images/png/mastercard.png';
import mercadolivre from '@assets/images/png/mercadolivre.png';
import netshoes from '@assets/images/png/netshoes.png';
import pinterest from '@assets/images/png/pinterest.png';
import primevideo from '@assets/images/png/primevideo.png';
import serasa from '@assets/images/png/serasa.png';
import shopee from '@assets/images/png/shopee.png';
import tiktok from '@assets/images/png/tiktok.png';
import vsco from '@assets/images/png/vsco.png';

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
    case 'americanas':
      return americanas;
    case 'bancodobrasil':
      return bancodobrasil;
    case 'carteirademotorista':
      return carteirademotorista;
    case 'carteiradetrabalho':
      return carteiradetrabalho;
    case 'casasbahia':
      return casasbahia;
    case 'clue':
      return clue;
    case 'magalu':
      return magalu;
    case 'mastercard':
      return mastercard;
    case 'mercadolivre':
      return mercadolivre;
    case 'netshoes':
      return netshoes;
    case 'pinterest':
      return pinterest;
    case 'primevideo':
      return primevideo;
    case 'serasa':
      return serasa;
    case 'shopee':
      return shopee;
    case 'tiktok':
      return tiktok;
    case 'vsco':
      return vsco;
  }
}
