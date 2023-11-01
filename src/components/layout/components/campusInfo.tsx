const CampusInfo = async() => {
    const response = await fetch("https://endpoint.free.mockoapp.net/campus-teste-01")
    //const response = await fetch("https://magister-2.free.mockoapp.net/teste1")
    const campusInfo = await response.json()

    return (
        <div className="container">
        {campusInfo.map((campus: any) => (
          <div className="row">
            <div className="col-md-6">
              <h3>{campus.campus}</h3>
              <p>{campus.address}</p>
              <p>{campus.city}</p>
              <p>Telefone: {campus.phone}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default CampusInfo