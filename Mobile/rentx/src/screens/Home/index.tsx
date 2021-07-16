import { ReactNode } from "react";

import { Container } from "./styles";

interface HomeProps {
  children: ReactNode;
}

export function Home({ children }: HomeProps) {
  return (
    <Container>
      <h1>Home</h1>
      {children}
    </Container>
  );
}
