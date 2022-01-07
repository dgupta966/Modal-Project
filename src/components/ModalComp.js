import React, { useState } from "react";
import { Modal, ModalHeader, Button, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Comp from "./Comp";

function ModalComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(1);
  function toggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
    setTab(1);
  }
  function nextHandler() {
    setTab(tab + 1);
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Create Report
      </Button>
      <Modal toggle={toggle} isOpen={isOpen} centered>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        {tab == 1 && (
          <ModalBody>
            <Comp />
          </ModalBody>
        )}
        {tab == 2 && <ModalBody>Deepak</ModalBody>}

        <ModalFooter>
          {tab == 1 && (
            <Button color="primary" onClick={nextHandler}>
              Next
            </Button>
          )}
          {tab == 2 && (
            <>
              <Button color="primary">Submit</Button>
              <Button onClick={() => setTab(tab - 1)}>Previous</Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComp;
