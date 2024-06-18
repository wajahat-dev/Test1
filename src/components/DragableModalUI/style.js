const draggableModalPaperStyle = {
  width: "500px",
  overflow: "auto",
};

const modalHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  background: 'var(--primary)', // Blue header
  color: 'white', // White text for contrast
  cursor: 'move',
};

const modalContentStyle = {
  padding: '16px',
  fontSize: "small",
};

const modalFooterStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px',
  gap: '8px', // Space between buttons
};

const modalButtonStyle = {
  background: 'var(--primary)', // Blue header
  color: 'white', // White text for contrast
};

const smallPaper = {
  width: '300px', // Adjust width for small modal
};

const mediumPaper = {
  width: '60%', // Adjust width for medium modal
  maxWidth: '800px', // Maximum width for medium modal
  maxHeight: '80vh', // Maximum height for medium modal
  overflowY: 'auto', // Enable vertical scrolling if content exceeds modal height
};
const largePaper=  {
  width: '80%', // Adjust width for large modal
  maxWidth: '1200px', // Maximum width for large modal
};


export {
  smallPaper, mediumPaper, largePaper,
  draggableModalPaperStyle,
  modalHeaderStyle,
  modalContentStyle,
  modalFooterStyle,
  modalButtonStyle,
};
