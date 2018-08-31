import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUploadModal } from '../../../actions/uploadModal';
import MaterialIcon from 'material-icons-react';

import * as Styled from './styles';
import { whiteColor } from '../../../styles/colorVariables';


const NavbarLinkItem = ({ to, children, ...rest }) => (
  <NavLink exact to={to}>
    <MaterialIcon {...rest} />
    {children}
  </NavLink>
);

const Navbar = (props) => (
  <Styled.navbarWrapper >
    <Styled.logo src={require('../../../assets/logo.svg')} alt="eyeContract" />
    <Styled.linkIcon>
      <NavbarLinkItem to="/" icon="description" >내 문서</NavbarLinkItem>
      <NavbarLinkItem to="/template" icon="subject" >템플릿</NavbarLinkItem>
      <NavbarLinkItem to="/chat" icon="forum" >채팅</NavbarLinkItem>
      <NavbarLinkItem to="/info" icon="person" >내 정보</NavbarLinkItem>
    </Styled.linkIcon>
    <Styled.ctaButton onClick={() => props.updateUploadModal(true)}><MaterialIcon icon="add" color={whiteColor}/>새로운 문서 생성</Styled.ctaButton>
  </Styled.navbarWrapper>
);

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateUploadModal,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(Navbar);