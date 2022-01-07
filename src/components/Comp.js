import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "./second.json";
import api2 from "./first.json";
import Select from "react-select";
import { Modal, ModalHeader, Button, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { customStyle } from "./customStyle";

const Comp = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [name, setName] = useState();
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [item3, setItem3] = useState();
  const [visible, setVisible] = useState(false);
  const [visibleChild, setVisibleChild] = useState(false);

  const [childs, setChilds] = useState([]);
  const [parentId, setParentId] = useState();
  const [childId, setChildId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(1);
  function toggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
    setTab(1);
    setVisible(false);
    setVisibleChild(false);
  }
  function nextHandler() {
    setTab(tab + 1);
  }

  function store() {
    setData([...api.data]);
  }
  function secApi() {
    setData1([...api2.data.therapeutic.data]);
    setVisibleChild(true);
  }
  function grandChild() {
    const options = [];
    data1.map((i) => {
      return options.push({ value: i.id, label: i.name });
    });
    return options;
  }
  // secApi();
  console.log(data1);
  // console.log(api2);
  function setOptions() {
    const options = [];
    data.map((i) => {
      return options.push({ value: i.id, label: i.name });
    });
    return options;
  }
  function selectHandler(e) {
    setVisible(false);
    setVisibleChild(false);
    setItem1(e);
    const pid = e.value;
    console.log(pid);
    data.map((i) => {
      // console.log(i);
      if (i.childs.length > 0 && pid == i.id) {
        setChilds([...i.childs]);
        setVisible(true);
        setVisibleChild(false);
        setVisibleChild(false);
      } else if (i.childs.length === 0) {
        setParentId(i.id);
        secApi();
        // console.log(i.title);
        // console.log("parent");
      }
    });
  }
  function childHandler() {
    const options = [];
    childs.map((i) => {
      return options.push({ value: i.id, label: i.display_name });
    });
    return options;
  }
  function childHandle(e) {
    setItem2(e);
    setVisibleChild(false);
  }
  function grandChildHandler(e) {
    setItem3(e);
  }
  console.log(childs);
  useEffect(() => {
    store();
  }, []);

  // console.log(data);
  return (
    <div className="select">
      <Button color="danger" onClick={toggle}>
        Create Report
      </Button>
      <Modal toggle={toggle} isOpen={isOpen} centered>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        {tab == 1 && (
          <ModalBody>
            <Select
              value={item1}
              options={setOptions()}
              styles={customStyle}
              onChange={(e) => selectHandler(e)}
              className="select"
            />
            {visible && childs.length > 0 && (
              <Select
                value={item2}
                styles={customStyle}
                options={childHandler()}
                onChange={(e) => childHandle(e)}
              />
            )}

            {visibleChild && (
              <Select
                value={item3}
                options={grandChild()}
                styles={customStyle}
                onChange={(e) => grandChildHandler(e)}
              />
            )}
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
              <Button color="primary" onClick={toggle}>
                Submit
              </Button>
              <Button onClick={() => setTab(tab - 1)}>Previous</Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Comp;
