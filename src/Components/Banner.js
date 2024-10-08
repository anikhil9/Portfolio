import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../assets/img/header-img.svg";
//import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';
//import Nikhil from "../assets/img/Alla_Nikhil_PP_White_BG.jpg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer","Web Developer", "UI/UX Designer","Tech Enthusiast" ];
  const period = 2000;

  useEffect(() => {

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
      console.log("Updated index:", index);
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, isDeleting, loopNum, text, toRotate, period, index])

  /*const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/alla-nikhil-96214217b/', '_blank');
  }*/

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <br></br>
                {/*<span className="tagline">Welcome to my Portfolio</span>*/}
                <h2>{`Hi! I'm`} <h1>{`Nikhil Alla`}</h1>{`I'm a `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer","Web Developer", "UI/UX Designer","Tech Enthusiast" ]'><span className="wrap">{text}</span></span></h2>
                  {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}
                  {/*<button onClick={handleConnectClick}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={''} alt=""/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
