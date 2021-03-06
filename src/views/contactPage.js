import React from "react"
import styled from "styled-components"

import {
  PageContainer,
  PageTitle,
  PageSubtitle,
  Text,
} from "../components/globalStyles"

const CardWrapper = styled.div`
  width: 60%;
  padding: 60px;
  box-sizing: border-box;
  margin: 10px;
  background: white;
  min-height: 450px;
  box-shadow: 12px 20.785px 69px 0px rgba(141, 167, 199, 0.86);
  margin: 60px auto;
  @media (max-width: 1300px) {
    width: 80%;
    padding: 40px;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    min-width: 300px;
    padding: 10px;
  }
`

const ContactPage = () => {
  return (
    <PageContainer>
      <PageTitle>Contact</PageTitle>
      <CardWrapper>
        <PageSubtitle>How to contact me</PageSubtitle>
        <Text>
          I'm always checking my email, if you want to use the phone number,
          please send a text message I have been getting too many robocalls.
        </Text>
        <PageSubtitle>Email</PageSubtitle>
        <Text>nkaosartor@gmail.com</Text>
        <PageSubtitle>Phone</PageSubtitle>
        <Text>(323) 614-5568</Text>
      </CardWrapper>
    </PageContainer>
  )
}

export default ContactPage
