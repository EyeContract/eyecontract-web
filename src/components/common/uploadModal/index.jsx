import React, { Component } from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUploadModal } from '../../../actions/uploadModal';
import { blackColor, hexToRgb } from '../../../styles/colorVariables';
import * as Styled from './styles';

const customStyles = {

  content: {
    border: 'none',
    boxShadow: `0 .75rem 2rem rgba(${hexToRgb(blackColor)}, .12)`,
    padding: '2rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class UploadModal extends Component {

  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

  closeModal = () => {
    this.props.updateUploadModal(false);
  }

  onDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected});
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <Dropzone accept="application/pdf" onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}>
          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
              return "파일을 업로드했습니다.";
            }
            if (isDragReject) {
              return "이 확장자는 지원하지 않습니다";
            }
            return acceptedFiles.length || rejectedFiles.length
              ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
              : "마우스로 PDF 파일을 끌어 올려, 업로드 하세요";
          }}
          {/* <Styled.modalText>Try dropping some files here, or click to select files to upload.</Styled.modalText> */}
        </Dropzone>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {
              this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
          <h2>Rejected files</h2>
          <ul>
            {
              this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </Modal>
    );
  };
};

const mapStateToProps = (state) => ({
  isOpen: state.isOpen
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateUploadModal,
  },
  dispatch,
);


export default connect(mapStateToProps, mapDispatchToProps)(UploadModal);