export const modalOverlay = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
};

export const modalContent = {
  width: '100%',
  maxWidth: 640,
  maxHeight: '100%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
}

export const modalHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const modalTitle = {
  padding: 16,
  margin: 0,
  zIndex: 10,
}

export const closeModal = {
  border: 'none',
  padding: 16,
  fontSize: 30,
  color: '#aaa',
  display: 'inline-block',
  backgroundColor: 'transparent'
}