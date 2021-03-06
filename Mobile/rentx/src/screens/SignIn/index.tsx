import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../styles/theme';
import { useAuth } from '../../hooks/auth';

import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Container, Header, SubTitle, Title, Form, Footer } from './styles';

import { database } from '../../database';

export function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate({ email, password });

      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Error na autenticação',
          'Ocorre um erro ao fazer login, verifique as credenciais!'
        );
      }
    }
  }

  function handleSignUp() {
    navigation.navigate('SignUpFirstStep');
  }

  useEffect(() => {
    async function loadData() {
      const usersCollection = database.get('users');
      const users = await usersCollection.query().fetch();

      console.log(users);
    }

    loadData();
  });

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>Estamos {'\n'}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar {'\n'}uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />

            <Button
              title='Criar conta gratuita'
              onPress={handleSignUp}
              enabled={true}
              loading={false}
              color={theme.colors.background_secondary}
              light={true}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
