function CardBody({ nama, kelas, alamat, onDelete  }) {
  return (
    <div className="cardBody">
      <ul>
        <li>Nama : {nama}</li>
        <li>Kelas : {kelas}</li>
        <li>Alamat : {alamat}</li>
      </ul>
      <button className="btn update">Update</button>
      <button className="btn delete" onClick={onDelete} >Delete</button>
    </div>
  );
}

export default CardBody;
