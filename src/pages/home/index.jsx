import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = ({ name }) => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hi, {name}!
          <br />
          Welcome to my portfolio
        </h1>
      </div>

      {/* Wrap the components inside the animate */}

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(55px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
