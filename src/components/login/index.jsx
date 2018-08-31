import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import * as globalStyled from '../../styles/globalStyles';
import * as Styled from './styles';


const LoginInput = ({...props}) => {
  <globalStyled.pageInput>
  </globalStyled.pageInput>
}
class LoginPage extends Component {
  render() {
    return (
      <Styled.loginWrapper>
        <Styled.loginCard>
          <Row>
            <Col md={6}>
              <globalStyled.pageTitle>
                로그인
              </globalStyled.pageTitle>
              <LoginInput type="phone"/>
              <LoginInput type="password"/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Styled.loginCard>
      </Styled.loginWrapper>
    )
  }
}

export default LoginPage;
