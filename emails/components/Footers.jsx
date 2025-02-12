import React from "react";
import { Section, Img, Text, Row, Column, Link } from "@react-email/components";

const Footers = () => {
  return (
    <>
      <Section style={{ textAlign: "center" }}>
        <table style={{ width: "100%" }}>
          <tr style={{ width: "100%" }}>
            <td align="center">
              <Img
                alt="React Email logo"
                height="42"
                src="https://github.com/pranjalgupta4/Chess.com/blob/main/img/apogeeLogo.jpg?raw=true"
              />
            </td>
          </tr>
          <tr style={{ width: "100%" }}>
            <td align="center">
              <Text
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(17,24,39)",
                }}
              >
                APOGEE 2025
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  marginBottom: "0px",
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "rgb(107,114,128)",
                }}
              >
                Revved-up Rhapsody
              </Text>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Row
                style={{
                  display: "table-cell",
                  height: 44,
                  width: 56,
                  verticalAlign: "bottom",
                }}
              >
                <Column style={{ paddingRight: 8, filter: "grayscale(100%)" }}>
                  <Link href="https://www.bits-apogee.org/">
                    <Img
                      alt="APOGEE"
                      height="36"
                      src="https://github.com/dvm-bitspilani/APOGEE-2024/blob/main/public/images/apogee.png?raw=true"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column style={{ paddingRight: 8 }}>
                  <Link href="https://x.com/BITSApogee">
                    <Img
                      alt="X"
                      height="36"
                      src="https://react.email/static/x-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.instagram.com/bitsapogee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <Img
                      alt="Instagram"
                      height="36"
                      src="https://react.email/static/instagram-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
              </Row>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Text
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(107,114,128)",
                }}
              >
                Birla Institute of Technology and Science, Pilani
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  marginBottom: "0px",
                  fontSize: 16,
                  lineHeight: "24px",
                  fontWeight: 600,
                  color: "rgb(107,114,128)",
                }}
              >
                Pilani, Rajasthan 333031
              </Text>
            </td>
          </tr>
        </table>
      </Section>
    </>
  );
};

export default Footers;
