import React, { useState, useEffect } from "react";

function Table() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [unique, setUnique] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [row, setRow] = useState([]);
  const [detail, setDetail] = useState({});

  const [add, setAdd] = useState("");

  useEffect(() => {
    setDetail({
      Name: `${name}`,
      DateOfBirth: `${birth}`,
      AadharNumber: `${unique}`,
      MobileNumber: `${mobile}`,
      Age: `${age}`
    });
  }, [name, birth, unique, mobile, age]);

  useEffect(() => {
    if (birth === "") {
    } else {
      let birthDay = new Date(birth);
      let newDate = Date.now();
      let month_diff = newDate - birthDay.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      console.log(Age);
      setAge(Age);
    }
  }, [birth]);

  const save = () => {
    if (name === "" || birth === "" || unique === "" || mobile === "") {
      alert("Fill all the inputs!");
    } else if (unique.length !== 12) {
      alert("Aadhar Number should be 12 digits long.");
    } else if (mobile.length !== 10) {
      alert("Mobile Number should be 10 digits long.");
    } else {
      setRow([...row, detail]);
      setAdd("none");
    }
  };

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(row));
  }, [row]);

  function handleDelete(name) {
    if (name.length > 2) {
      alert("Your items will be removed...");
      console.log(name);
      const newDetails = row.filter((item) => item.Name !== name);
      setRow(newDetails);
    } else {
      alert("first add complete details");
    }
  }

  const del = () => {
    setName("");
    setBirth("");
    setUnique("");
    setMobile("");
    setAge("");
  };

  const show = () => {
    setAdd("");
    setName("");
    setBirth("");
    setUnique("");
    setMobile("");
    setAge("");
  };
  return (
    <div className="main-div" style={{position:"relative",height:"200px"}}>
      <div className="table" >
        <table frame='box' style={{width:"80%",textAlign:"center"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>

              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {row.length === 0 ? (
              <>
              </>
            ) : (
              row.map((item, index) => {
                return (
                  <tr key={item.Name}>
                    <td>
                      <input  defaultValue={item.Name} type={"text"} />
                    </td>
                    <td>
                      <input defaultValue={item.DateOfBirth} type={"date"} />
                    </td>
                    <td>
                      <input defaultValue={item.AadharNumber} type={"number"} />
                    </td>
                    <td>
                      <input defaultValue={item.MobileNumber} type={"number"} />
                    </td>

                    <td><h4>{item.age}</h4></td>
                    <td>
                      <button className="action">save</button>
                      <button
                        className="action"
                        onClick={() => handleDelete(item.Name)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
            <tr style={{ display: add }}>
              <td>
                <input
                  value={name}
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  value={birth}
                  className="input-date"
                  type={"date"}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={unique}
                  type={"number"}
                  onChange={(e) => setUnique(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input-num"
                  value={mobile}
                  type={"number"}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </td>
              <td>{age}</td>
              <td className="btns">
                <button className="save" onClick={() => save()}>
                  Save
                </button>
                <button className="del" onClick={() => del()}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          
        </table>
        
      </div>
      <div className="button">
      <button style={{position:"absolute" ,bottom:"1px" ,right:"20px" ,backgroundColor:"blue",color:"white",padding:"20px",width:"100px"}} className="btn" onClick={() => show()}>
        Add
      </button>
      </div>
    </div>
  )
}

export default Table;