import SplashScreen from 'react-native-splash-screen';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {BackHandler} from 'react-native';

export function hideSplashScreen(): void {
  SplashScreen.hide();
}

export async function authenticate(user: User): Promise<Boolean> {
  if (user.biometry) {
    return FingerprintScanner.authenticate({
      title: 'Perdidinha',
    })
      .then(() => {
        FingerprintScanner.release();

        return true;
      })
      .catch(() => {
        BackHandler.exitApp();
        return false;
      });
  } else {
    return true;
  }
}
