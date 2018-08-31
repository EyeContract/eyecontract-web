import { actionTypes } from '../constants';

export const updateUploadModal = isOpen => ({
  type: actionTypes.UPDATE_UPLOAD_MODAL,
  isOpen,
});