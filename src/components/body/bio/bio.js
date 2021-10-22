import * as React from 'react'

import './bio.sass'

import { Row, Col} from 'react-bootstrap'

import who1 from '../../../images/who_1.png'
import who2 from '../../../images/who_2.png'
import who3 from '../../../images/who_3.png'

export const Bio = (props) =>{
    
return(
    <Row className="my-5">

    <Col lg={12}>
      <h1>Who are Leaf.com?</h1>
        <Row className="bioItemWrapper m-0">

          <Col className="d-flex flex-column align-items-center">
            <img src={who1} />
            <p>Database</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={who2} />
            <p>Preservation</p>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <img src={who3} />
            <p>Knowledge</p>
          </Col>

        </Row>
    </Col>
  </Row>
)

}

export default Bio;