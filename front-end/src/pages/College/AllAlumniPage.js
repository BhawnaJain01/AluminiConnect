import React, { useLayoutEffect, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import { Location, useLocation } from "react-router-dom";

// import './index.css';

export default function AllAlumniPage() {
  const Location = useLocation();
  console.log("college Data => ", Location.state.recordData);
  const [collegeData, setCollegeData] = useState(Location.state.recordData);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  // let year = new Date().getFullYear();
  // let year;
  // let y ;

  let y = new Date().getFullYear();

  // console.log("year is " , y);
  // y ? year = y : year = new Date().getFullYear() ;

  useLayoutEffect(() => {
    fetch(
      `http://localhost:3045/api/SearchAlumniYear_CollegeWise/${collegeData.CollegeId}/${y}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log("get all users for Admin => ",resp)
        // console.log("state => ",data)

        setData(resp.user);

        console.log("data=>", data);
      });
  }, []);

  const Search = (e) => {
    e.preventDefault();
    let year = document.getElementById("yearFilter").value;

    fetch(
      `http://localhost:3045/api/SearchAlumniYear_CollegeWise/${collegeData.CollegeId}/${year}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log("get all users for Admin => ",resp)
        // console.log("state => ",data)

        setData(resp.user);

        console.log("data=>", data);
      });
  };

  return (
    <div style={{ marginLeft: "400px", marginTop: "50px" }}>
      <form onSubmit={Search}>
        <div style={{ display: "flex" }}>
          <input
            type="integer"
            id="yearFilter"
            placeholder="Search Year"
            style={{ width: "200px" }}
          />
          <button
            type="submit"
            style={{ borderRadius: "10px", marginLeft: "10px" }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
      </form>

      <Table
        onRow={(record) => {
          return {
            onClick: (e) => {
              let lastCellIndex = document.querySelector(
                "table tr:last-child td:last-child"
              ).cellIndex;
              console.log("in ant table", record, lastCellIndex);
              navigate("/college/profile", { state: { record } });
            },
          };
        }}
        style={{
          width: "1000px",
          boxShadow: "0 10px 10px 10px lightgrey",
          borderRadius: "10px",
        }}
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </div>
  );
}

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Enrollment Number",
    dataIndex: "EnrollmentNo",
    key: "EnrollmentNO",
  },
  {
    title: "Email Id",
    dataIndex: "EmailId",
    key: "EmailId",
  },

  {
    title: "Year Of Passing",
    key: "YearOfPassing",
    dataIndex: "YearOfPassing",
  },
];

const dataold = [
  {
    key: "1",
    name: "John Brown",
    rollNo: 36762,
    email: "abc@gmail.com",
    year: 2022,

    // tags: ['nice', 'developer'],
  },
  {
    key: "2",
    name: "John Brown",
    rollNo: 36762,
    email: "abx@gmail.com",
    year: 2022,
  },
  {
    key: "3",
    name: "John Brown",
    rollNo: 36762,
    email: "xyz@gmail.com",
    year: 2022,
  },
];

// ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);
