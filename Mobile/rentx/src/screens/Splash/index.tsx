import React from 'react';
import Animated from 'react-native-reanimated';
import { Button } from 'react-native';

import { Container } from './styles';

export function Splash() {
  return (
    <Container>
      <Animated.View />

      <Button title='Mover' onPress={() => {}} />
    </Container>
  );
}
