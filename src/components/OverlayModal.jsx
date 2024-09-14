/* eslint-disable react/prop-types */
const OverlayModal = ({ toggleSidebar }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 h-screen bg-black/20 z-40 flex-1"
      onClick={toggleSidebar}
    ></div>
  );
};

export default OverlayModal;
