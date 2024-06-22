import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaLinks = [
    { icon: "facebook-f", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "linkedin-in", href: "#" },
    { icon: "github", href: "#" },
  ];

  return (
    <MDBFooter className="text-center text-white app__footer">
      <MDBContainer className="p-3">
        <section className="social-media-links">
          {socialMediaLinks.map((link, index) => (
            <MDBBtn key={index} outline color="light" floating className="m-1" href={link.href} role="button">
              <MDBIcon fab icon={link.icon} />
            </MDBBtn>
          ))}
        </section>
        <p>
          © {currentYear} Copyright:
          <a className="text-white" href="https://yourwebsite.com/">
            Martua Hutapea
          </a>
        </p>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
