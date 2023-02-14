import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("/api/data");
    setData(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/data/${id}`);
    getData();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Año</th>
            <th>Duración</th>
            <th>Idioma</th>
            <th>Fecha</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.mov_title}</td>
              <td>{item.mov_year}</td>
              <td>{item.mov_time}</td>
              <td>{item.mov_lang}</td>
              <td>{item.mov_dt_rel}</td>
              <td>{item.mov_rel_country}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;