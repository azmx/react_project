import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import Card from "./card";
import CardBody from "./cardbody";
import "./style.css";
import { getData } from "./data";

//React element
// const biodata = (
//   <div>
//     <h1>Biodata</h1>
//     <ul>
//       <li>Nama : Muhammad Azzam</li>
//       <li>Kelas : 10 PPLG 5</li>
//       <li>Alamat : Jogja</li>
//       <img src="src/gantnwg.png" alt="" width="300" height="400" />
//     </ul>
//   </div>
// );

// function header() {
//   return (
//     <div>
//       <h1>Biodata</h1>
//     </div>
//   );
// }

//React componenet


function Biodata() {
    const initialdataSiswa = getData();
    const [dataSiswa, setDataSiswa] = useState(initialdataSiswa);

    const handleDelete = (nama) => {
      const updatedDataSiswa = dataSiswa.filter((siswa) => siswa.nama !== nama);
      setDataSiswa(updatedDataSiswa);
    };
    
  return (
    <div>
      <Header />

      <div className="container">   
        {/* <Card 
     nama={dataSiswa[0].nama}
     kelas={dataSiswa[0].kelas}
     alamat={dataSiswa[0].alamat}
     image={dataSiswa[0].image} /> */}

        {/* <Card {...dataSiswa[1]}/>
     <Card {...dataSiswa[2]}/> */}

        {dataSiswa.map((siswa) => (
          <Card {...siswa} key={siswa.nama} onDelete={() => handleDelete(siswa.nama)}/>
        ))}
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Biodata />);
