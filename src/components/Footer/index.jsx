import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="text-center text-white" style={{ backgroundColor: "#333", position: "fixed", bottom: 0, width: "100%" }}>
      <MDBContainer className="p-3">
        <section className="">
          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-white" href="https://yourwebsite.com/">
          {" "}
          Martua Hutapea
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
