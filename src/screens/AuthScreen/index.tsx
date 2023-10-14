import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {StoreDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {setIsAuthenticated} from '../../redux/slice/authSlice';
import styles from './styles';

enum AuthResultEnum {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

const AuthScreen = (): JSX.Element => {
  const dispatch = useDispatch<StoreDispatch>();
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuthResultEnum>();

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
        ),
      );
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT),
      );
    }
  };

  const authenticate = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const results = await LocalAuthentication.authenticateAsync();

      if (results.success) {
        setResult(AuthResultEnum.SUCCESS);
        dispatch(setIsAuthenticated({isAuthenticated: true}));
      } else if (results.error === 'unknown') {
        setResult(AuthResultEnum.DISABLED);
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(AuthResultEnum.CANCELLED);
      }
    } catch (error) {
      setResult(AuthResultEnum.ERROR);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      {facialRecognitionAvailable || fingerprintAvailable ? (
        <Button onPress={authenticate} title="Authenticate" />
      ) : null}
    </View>
  );
};

export default AuthScreen;
