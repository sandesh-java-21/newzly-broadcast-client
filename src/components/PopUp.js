import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Popup.css";

const PopUp = ({ onHide = () => {}, show, title, image }, props) => {
  console.log("data: ", title, image);
  return (
    <Modal
      {...props}
      size="xl"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{
      //   margin: "0 auto",
      //   height: "84vh",
      //   width: "150vw",
      // }}
    >
      <Modal.Header
        style={{
          justifyContent: "center",
          borderBottom: "none",
        }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            fontWeight: "bold",
            fontFamily: "Montserrat, sans-serif",
            color: "#192e51",
            overflowWrap: "break-word",
          }}
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={image}
          alt=""
        />
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
