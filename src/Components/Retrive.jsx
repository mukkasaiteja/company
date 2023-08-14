import { useState } from "react";
import Header from "./Header";

function Retrive() {
  const [input, setInput] = useState();

  const [retrive, setRetrive] = useState([]);

  let str = localStorage.getItem("info");
  let info =JSON.parse(str);

  const check = () => {
    let word = input;
    let filteredList = [];
    info.forEach((item) => {
      for (let key in item) {
        if (item[key].toString().includes(word)) filteredList.push(item);
      }
    });
    setRetrive(filteredList);
    console.log(filteredList)
  };

  return (
    <div className="main-div">
      <Header/>
      <div className="single-data">
        <div className="main">
        <h3 className="add">Retrieve Information</h3>
        
        <div className="input">
          <input
            className="text"
            type={"number"}
            placeholder='Enter Aadhar Number'
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="find" onClick={check}>
            Find
          </button>
        </div>
        <div
          style={{
            // border: "1px solid black",
            marginTop: "10px",
            padding: "0px 30px"
          }}
        >
          {retrive.length === 0 ? (
            
            <h1 className="data">NO DATA</h1>
          ) : (
            retrive.map((retrive) => {
              return (
                <div className="detail">
                  <h3 className="h3">
                    Name:{" "}
                    <span style={{ padding: "0px 60px" }}>{retrive.Name} </span>
                  </h3>
                  <h3 className="h3">
                    DOB:{" "}
                    <span style={{ padding: "0px 70px" }}>
                      {retrive.DateOfBirth}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Aadhar:{" "}
                    <span style={{ padding: "0px 40px" }}>
                      {retrive.AadharNumber}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Mobile No:{" "}
                    <span style={{ padding: "0px 0px" }}>
                      {retrive.MobileNumber}{" "}
                    </span>
                  </h3>
                  <h3 className="h3">
                    Age:{" "}
                    <span style={{ padding: "0px 80px" }}>{retrive.Age} </span>
                  </h3>
                </div>
              );
            })
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Retrive;