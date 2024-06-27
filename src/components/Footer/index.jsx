import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaLinks = [
    { icon: "facebook-f", href: "https://www.facebook.com/sudung.hutapea.9?mibextid=ZbWKwL " },
    { icon: "instagram", href: "https://www.instagram.com/hasudungan_hutapea?igsh=MWptZzNiZGs3djFsZg== " },
    { icon: "linkedin-in", href: "https://www.linkedin.com/in/martua-ibrahim-6b58a31b2/" },
    { icon: "github", href: "https://github.com/martuahutapea" },
  ];

  return (
    <MDBFooter className="text-center text-white app__footer">
      <MDBContainer className="p-3">
        <section className="social-media-links">
          {socialMediaLinks.map((link, index) => (
            <MDBBtn key={index} outline color="light" floating className="m-1" href={link.href} role="button" target="_blank" rel="noopener noreferrer">
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
