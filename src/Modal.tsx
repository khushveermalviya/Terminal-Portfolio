import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const Modal = ({ onYes, onNo }: { onYes: () => void; onNo: () => void }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>Do you know about the terminal?</p>
        <div>
          <Button onClick={onYes}>Yes</Button>
          <Button onClick={onNo}>No</Button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;