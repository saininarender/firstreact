import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
// import Gjt from '../assets/GT.png'
import Gj from '../assets/Gujarat_Titans_logo.png'
import '../Cards.scss'


export default function Cards(props) {
    let a = props.seconddivision ? 'maindivision' : 'seconddivision';
    return (
        <div className='maindivision'>
            <div className={a}>
                <Row className='seconddivisionrow1'>
                    <Col>
                        <h5 className='topeventsheading'>TOP EVENTS</h5>
                    </Col>
                    <Col className='row1col2'>
                        <a href='#' className='row1col2link'>All matches</a>
                    </Col>
                </Row>
                <div className='divsionforline' />

                <Row className='row2'>
                    <Col className='row2col1' lg={6} sm={6} md={6}>
                        <Row>
                            <p className='row2col1row1p'>RESULT</p>
                        </Row>
                        <Row>
                            <div style={{ display: "flex" }}>
                                <p style={{ fontSize: '11px', marginTop: '0px', opacity: '0.5' }}>35th Match(D/N), DY Patil, April 23, 2022, </p>
                                <span style={{ fontSize: '11px', marginTop: '0px', opacity: '1' }}>&nbsp;Indian Premier League</span>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: "flex" }}>
                                    <img src={Gj} alt="Gujrat Team Logo" width='25px' height="30px" />
                                    <p><strong>&nbsp;Gujarat Titans</strong></p>
                                </div>
                            </Col>
                            <Col style={{ textAlign: 'right' }}>
                                <p><strong>156/9</strong></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <div style={{ display: 'flex' }}>
                                    <img src={require('../assets/ds.png')} height="25px" width="30px" />
                                    <p style={{ opacity: '0.5' }}><strong>&nbsp;Kolkata Knight Riders</strong></p>
                                </div>
                            </Col>
                            <Col style={{ textAlign: 'right', float: 'right' }}>
                                <div style={{ display: 'flex', justifyContent: 'right' }}>
                                    <p style={{ opacity: '0.3' }}><strong >(20 ov. T:157)</strong></p>
                                    <p style={{ opacity: '0.5' }}><strong >148/8</strong></p>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <p style={{ fontSize: '15px' }}>Titans won by 8 runs</p>
                        </Row>
                        <div style={{ backgroundColor: '#EDEEF0', height: '1px', margin: '0' }} />
                        <Row style={{ marginTop: '17px', fontSize: '15px', fontWeight: '500' }}>
                            <div style={{ display: 'flex' }}>
                                <p>Preview</p>
                                <p className="px-2">Live</p>
                                <p>Series Home</p>
                            </div>


                        </Row>




                    </Col>
                    <Col className='rightSide' lg={6} sm={6} md={6} style={{ paddingLeft: '30px' }}>
                        <Row>
                            <p style={{ marginBottom: '0px' }}>RESULT</p>
                        </Row>
                        <Row>
                            <p style={{ fontSize: '10px', marginTop: '0px' }}>"35th Match(D/N), DY Patil, April 23, 2022, Indian Premier League </p>
                        </Row>
                        <Row>
                            <Col>
                                <p><strong>Gujarat Titans</strong></p>
                            </Col>
                            <Col>
                                <p><strong>156/9</strong></p>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <p>Kolkata Knight Riders</p>
                            </Col>
                            <Col>
                                <p>(20 ov. T:157) 148/8</p>
                            </Col>

                        </Row>
                        <Row>
                            <p>Titans won by 8 runs</p>
                        </Row>
                        <div style={{ backgroundColor: '#EDEEF0', height: '1px', margin: '1rem 0' }} />
                        <Row>
                            <Col>
                                <p >Preview</p>
                            </Col>
                            <Col>
                                <p>Live</p>
                            </Col>
                            <Col>
                                <p>Series Home</p>
                            </Col>


                        </Row>




                    </Col>

                </Row>

            </div>
        </div>
    )
}
