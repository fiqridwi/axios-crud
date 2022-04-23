import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Read() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6260945592df0bc0f345caea.mockapi.io/api")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const getData = () => {
    axios
      .get("https://6260945592df0bc0f345caea.mockapi.io/api")
      .then((response) => {
        setData(response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6260945592df0bc0f345caea.mockapi.io/api/${id}`)
      .then(() => {
        getData();
      });
  };

  const setId = (item) => {
    localStorage.setItem("ID", item.id);
    localStorage.setItem("FirstName", item.firstName);
    localStorage.setItem("LastName", item.lastName);
  };

  return (
    <div>
      <Button onClick={() => navigate("/")} style={{ marginBottom: "2rem" }}>
        Create
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="warning"
                      style={{ marginRight: "1rem" }}
                    >
                      Delete
                    </Button>
                    <Link to="update">
                      <Button onClick={() => setId(item)} variant="danger">
                        Update
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
