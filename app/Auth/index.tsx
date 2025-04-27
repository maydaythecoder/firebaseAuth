import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { FormErrorMessage } from '@/components/FormErrorMessage';
import { useTogglePasswordVisibility } from '@/hooks/useTogglePasswordVisibility';

export default function AuthScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { passwordVisibility, handlePasswordVisibility, rightIcon } = useTogglePasswordVisibility();

  const handleSignIn = async () => {
    if (email && password) {
      setIsLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
      <Text style={[styles.title, { color: Colors[colorScheme ?? 'light'].text }]}>
        Welcome to Firebase Auth
      </Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoComplete="email"
        handlePasswordVisibility={() => {}}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisibility}
        rightIcon={rightIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />

      {errorMessage ? <FormErrorMessage error={errorMessage} visible={!!errorMessage} /> : null}

      <Button
        title="Sign In"
        onPress={handleSignIn}
        style={styles.button}
      >
        <Text style={[styles.buttonText, { color: Colors[colorScheme ?? 'light'].background }]}>
          Sign In
        </Text>
      </Button>

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => {/* Navigate to forgot password */}}
      >
        <Text style={[styles.forgotPasswordText, { color: Colors[colorScheme ?? 'light'].tint }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 16,
  },
});
