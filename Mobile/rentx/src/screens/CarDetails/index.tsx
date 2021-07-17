import React from "react";

import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from "./styles";

function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://img2.gratispng.com/20180609/aqk/kisspng-audi-rs5-car-audi-a5-audi-a3-audi-rs-5-5b1b9890115d44.9152453915285351840711.jpg",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Muracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        
        <About>
        Este é automóvel desportivo. Surgiu do lendário 
        touro de lide indultado na praça Real Maestranza de Sevilla. 
        É um belíssimo carro para quem gosta de acelerar. 
        </About>

      </Content>
    </Container>
  );
}

export default CarDetails;
