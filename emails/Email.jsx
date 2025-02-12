import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";
import Footers from "./components/Footers";

const Email = ({
  name = "John Doe",
  loginUrl = "https://bits-apogee.org/login",
  username = "john.doe",
  password = "ap0g33_2025",
  contactNumber = "+91-9876543210",
}) => (
  <Html>
    <Head>
      <title>APOGEE 2025 - College Representative Registration</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Preview>APOGEE 2025 Registration Confirmation</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading as="h2" style={h2}>
          Hello {name}!
        </Heading>

        <Text style={paragraph}>Thank you for registering!</Text>

        <Text style={paragraph}>Greetings from BITS Pilani!</Text>

        <Text style={paragraph}>
          It gives me immense pleasure in inviting your institute to the 43rd
          edition of APOGEE, the annual technical fest of Birla Institute of
          Technology & Science, Pilani, India. This year, APOGEE will be held
          from 28th March to 31st March.
        </Text>

        <Text style={paragraph}>
          You have been selected as the College Representative for your college.
          You can now login{" "}
          <Link href={loginUrl} style={link}>
            here
          </Link>{" "}
          using the following credentials:
        </Text>

        <Container style={credentialsContainer}>
          <Text style={credentialsTitle}>Your Credentials</Text>
          <Text style={credentials}>
            Username: <strong>{username}</strong>
          </Text>
          <Text style={credentials}>
            Password: <strong>{password}</strong>
          </Text>
        </Container>

        <Text style={paragraph}>
          We look forward to seeing you at APOGEE 2025.
        </Text>

        <Text style={importantNote}>
          P.S: THIS EMAIL DOES NOT CONFIRM YOUR PRESENCE AT APOGEE 2025. YOU
          WILL BE RECEIVING ANOTHER EMAIL FOR THE CONFIRMATION OF YOUR
          PARTICIPATION.
        </Text>

        <Text style={signature}>
          Regards,
          <br />
          Harnoor Singh
          <br />
          CoStAAn (Head)
          <br />
          Dept. of Publications & Correspondence, APOGEE 2025
          <br />
          BITS Pilani
          <br />
          <Link href="mailto:pcr@bits-apogee.org" style={link}>
            pcr@bits-apogee.org
          </Link>
          <br />
          <Link href="tel:+919876543210" style={link}>
            {contactNumber}
          </Link>
        </Text>

        <Text style={alerNote}>
          <strong>NOTE:</strong> PLEASE CHECK YOUR SPAM FOLDER FOR UPDATES.
        </Text>
        <Hr
          style={{
            marginTop: 16,
            borderColor: "rgb(209,213,219)",
            marginBottom: 16,
            borderTopWidth: 2,
          }}
        />
        <Footers />
      </Container>
    </Body>
  </Html>
);

export default Email;

const color = {
  themeColor: "#7C340E",
};

const main = {
  backgroundColor: color.themeColor,
  fontFamily: "'Roboto', sans-serif",
  fontSize: "16px",
  color: color.themeColor,
  lineHeight: "1.6",
  padding: "2%",
};

const container = {
  margin: "0",
  maxWidth: "100%",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "4.5% 5%",
  boxShadow: "border-box",
};

const h2 = {
  color: color.themeColor,
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0  0 20px 0",
  textAlign: "left",
  borderBottom: "2px solid #E5E5E5",
  paddingBottom: "10px",
};

const paragraph = {
  fontSize: "16px",
  color: "#555555",
  marginBottom: "20px",
  textAlign: "left",
};

const link = {
  color: color.themeColor,
  fontWeight: "bold",
};


const credentialsContainer = {
  backgroundColor: "#f9f9f9",
  borderLeft: `4px solid ${color.themeColor}`,
  borderRadius: "6px",
  padding: "5px",
  marginBottom: "20px",
  textAlign: "center",
};

const credentialsTitle = {
  fontSize: "18px",
  color: color.themeColor,
  marginBottom: "15px",
  textAlign: "center",
};

const credentials = {
  fontSize: "15px",
  color: "#555",
  margin: "2px",
};

const alerNote = {
  borderRadius: "8px",
  fontWeight: "500",
  color: "rgb(225, 18, 18)",
  textAlign: "center",
};

const signature = {
  fontSize: "14px",
  color: "#555555",
  textAlign: "left",
  marginBottom: "20px",
};

const importantNote = {
  backgroundColor: "#FFF3CD",
  border: "1px solid rgb(219, 198, 137)",
  borderRadius: "6px",
  padding: "10px",
  color: "#856404",
  textAlign: "left",
};
