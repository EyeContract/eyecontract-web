import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system';
import * as globalStyled from '../../styles/globalStyles';
import * as Styled from './styles';
import MaterialIcon from 'material-icons-react';


const LoginInput = ({ icon, ...props }) => (
  <globalStyled.pageInput>
    <MaterialIcon icon={icon} />
    <input {...props} />
  </globalStyled.pageInput>
);

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
            </Col>
          </Row>
          <Row>
            <Col>
              <LoginInput type="tel" icon="phone" placeholder="010-1234-7890"
                pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
              <LoginInput type="password" icon="lock" placeholder="8~20 자리의 비밀번호" />
              <globalStyled.pageCtaButton>로그인 하기</globalStyled.pageCtaButton>
            </Col>
          </Row>
          <Styled.loginDesc>혹시 계정이 없으신가요? <a href="#">회원 가입하기</a></Styled.loginDesc>
        </Styled.loginCard>
        <Styled.logo src={require('../../assets/logo_gray.svg')} />
      </Styled.loginWrapper>
    )
  }
}

export default LoginPage;
