import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

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
            <br />
            Password: <strong>{password}</strong>
          </Text>
        </Container>

        <Text style={paragraph}>
          We look forward to seeing you at APOGEE 2025.
        </Text>

        <Text style={psNote}>
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
          {contactNumber}
        </Text>

        <Text style={importantNote}>
          <strong>NOTE:</strong> PLEASE CHECK YOUR SPAM FOLDER FOR UPDATES.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: "#F4F4F4",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "16px",
  color: "#333333",
  lineHeight: "1.6",
  padding: "20px",
};

const container = {
  margin: "0 auto",
  maxWidth: "95%",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "5%",
  boxShadow: "border-box",
};

const h2 = {
  color: "#2E86AB",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
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
  color: "#3498DB",
  textDecoration: "none",
  fontWeight: "bold",
};

const credentialsContainer = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #e0e0e0",
  borderRadius: "6px",
  padding: "10px",
  marginBottom: "20px",
  textAlign: "left",
  display: "flex",
  justifyContent: "center",
};

const credentialsTitle = {
  fontSize: "18px",
  color: "#2E86AB",
  marginBottom: "10px",
  textAlign: "center",
};

const credentials = {
  fontSize: "15px",
  color: "#555",
  lineHeight: "1.4",
};

const psNote = {
  fontSize: "14px",
  color: "#777777",
  fontStyle: "italic",
  marginBottom: "20px",
  textAlign: "left",
  paddingBottom: "20px",
  borderBottom: "2px solid #E5E5E5",
};

const signature = {
  fontSize: "14px",
  color: "#555555",
  textAlign: "left",
  marginBottom: "20px",
};

const importantNote = {
  backgroundColor: "#FFF3CD",
  border: "1px solid #FFC107",
  borderRadius: "6px",
  padding: "10px",
  color: "#856404",
  textAlign: "left",
};
