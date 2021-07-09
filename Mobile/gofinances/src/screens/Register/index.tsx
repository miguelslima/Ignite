import React from "react";
import { View } from "react-native";
import { Input } from "../../components/Forms/Input";

import { Container, Header, Title, Form } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Registro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  );
}

export default Register;
