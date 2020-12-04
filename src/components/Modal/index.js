import Portal from '../Portal';

import { modalContent, modalOverlay, closeModal, modalHeader, modalTitle } from './styles';

const Modal = ({ title, children, onClose }) => {
  return (
    <Portal>
      <div style={modalOverlay}>
        <div style={modalContent}>
          <div style={modalHeader}>
            <h3 style={modalTitle}>{title}</h3>
            <button type="button" style={closeModal} onClick={onClose}>
              🅧
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
