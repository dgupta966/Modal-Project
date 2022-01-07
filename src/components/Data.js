import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select/";
import { customStyle } from "./customStyle";

const Data = () => {
  const [resData, setResData] = useState([]);
  const [resData2, setResData2] = useState({});
  const [visible, setvisible] = useState(false);
  const [val, setVal] = useState([]);
  const dataFetch = () => {
    const res = axios.get("https://jsonplaceholder.typicode.com/todos");
    res.then((i) => {
      setResData([...i.data]);
      // console.log(i.data);
    });
  };
  const selectedData = (val) => {
    console.log("val", val?.value);
    const id = val?.value;
    const link = "https://jsonplaceholder.typicode.com/todos";
    const res = axios.get(link + "/" + id);
    res
      .then((i) => {
        console.log(i);
        setResData2(i.data);

        console.log(i.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  const dataOption = () => {
    const options = [];
    resData.map((i) => {
      options.push({ value: i.id, label: i.title });
    });
    return options;
  };
  const dataOption2 = () => {
    const options = [];
    let id = resData2.id;
    let title = resData2.title;

    options.push({ value: id, label: title });

    // console.log(resData.id)
    console.log("options", options);
    return options;
  };

  const selectHandler = (e) => {
    console.log(e);
    setVal([...val, e]);
    console.log(val);
    setvisible(true);
  };

  useEffect(() => {
    selectedData(val);
  }, [val]);

  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div>
      <Select
        value={val}
        onChange={val.length < 5 ? (e) => selectHandler(e) : null}
        options={dataOption()}
        styles={customStyle}
        // isMulti
        closeMenuOnSelect={false}
      />
      <br />
      {visible && (
        <div>
          <Select
            //   // value={val}
            options={dataOption2()}
            styles={customStyle}
            className="select"
          />
        </div>
      )}

      {val.map((i) => {
        return <span>{i.label}</span>;
      })}

      {dataOption() ? <div></div> : dataOption2() ? <div>h</div> : "b"}
    </div>
  );
};

export default Data;
