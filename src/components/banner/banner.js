import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import BannerImg from '../../assets/images/4inarow.png';
import Play from '../../assets/images/play.png';
import './banner.css';

let Banner = () => {
    return(
        <Row>
        <Col className="d-flex justify-content-center" md={6} sm={12}>
        <div className="d-flex play-button align-items-center justify-content-center">
          <div className="text-center">
            <img src={Play} alt="Play" width="30" />
            <p>Play</p>
          </div>
        </div>
        </Col>         
        <Col className="Banner" md={6} sm={12}>
          <img src={BannerImg} alt="Banner" width="400" />
        </Col>
      </Row>
    )
}

export default Banner;