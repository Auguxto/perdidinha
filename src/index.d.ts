export type AuthenticateIOS = {
  description?: string;
  fallbackEnabled?: boolean;
};
export type AuthenticateAndroid = {
  title?: string;
  subTitle?: string;
  description?: string;
  cancelButton?: string;
  onAttempt?: (error: FingerprintScannerError) => void;
};

export type Biometrics = 'Touch ID' | 'Face ID' | 'Biometrics';

export type FingerprintScannerError = {biometric: Biometrics} & Errors;

export type Errors =
  | {name: 'AuthenticationNotMatch'; message: 'No match'}
  | {
      name: 'AuthenticationFailed';
      message: 'Authentication was not successful because the user failed to provide valid credentials';
    }
  | {
      name: 'AuthenticationTimeout';
      message: 'Authentication was not successful because the operation timed out.';
    }
  | {
      name: 'AuthenticationProcessFailed';
      message: 'Sensor was unable to process the image. Please try again.';
    }
  | {
      name: 'UserCancel';
      message: 'Authentication was canceled by the user - e.g. the user tapped Cancel in the dialog';
    }
  | {
      name: 'UserFallback';
      message: 'Authentication was canceled because the user tapped the fallback button (Enter Password)';
    }
  | {
      name: 'SystemCancel';
      message: 'Authentication was canceled by system - e.g. if another application came to foreground while the authentication dialog was up';
    }
  | {
      name: 'PasscodeNotSet';
      message: 'Authentication could not start because the passcode is not set on the device';
    }
  | {
      name: 'FingerprintScannerNotAvailable';
      message: '	Authentication could not start because Fingerprint Scanner is not available on the device';
    }
  | {
      name: 'FingerprintScannerNotEnrolled';
      message: '	Authentication could not start because Fingerprint Scanner has no enrolled fingers';
    }
  | {
      name: 'FingerprintScannerUnknownError';
      message: 'Could not authenticate for an unknown reason';
    }
  | {
      name: 'FingerprintScannerNotSupported';
      message: 'Device does not support Fingerprint Scanner';
    }
  | {
      name: 'DeviceLocked';
      message: 'Authentication was not successful, the device currently in a lockout of 30 seconds';
    }
  | {
      name: 'DeviceLockedPermanent';
      message: 'Authentication was not successful, device must be unlocked via password.';
    }
  | {
      name: 'DeviceOutOfMemory';
      message: 'Authentication could not proceed because there is not enough free memory on the device.';
    }
  | {
      name: 'HardwareError';
      message: 'A hardware error occurred.';
    };
