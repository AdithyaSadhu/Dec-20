//import React from 'react'

export default function EmpSal() {
    const empData = [
      {no:"1", name: "Great Wall of China", Location: "Beijing", contry: "China", Image:"https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg"},
      {no:"2", name: "Chichén Itzá", Location: " Yucatán Peninsula ", contry: "Mexico", Image:"https://cdn.britannica.com/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg"},
      {no:"3", name: "Petra", Location: "The Khaznah (“Treasury”) ", contry: "Petra", Image:"https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg"},
      {no:"4", name: "Machu Picchu", Location: "Machu Picchu", contry: "Peru", Image:"https://cdn.britannica.com/30/94530-050-99493FEA/Machu-Picchu.jpg"},
      {no:"5", name: "Christ the Redeemer", Location: "Rio de Janeiro", contry: "Brazil", Image:"https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg"},
      {no:"6", name: "Colosseum", Location: "Rome", contry: "Italy", Image:"https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"},
      {no:"7", name: "Taj Mahal", Location: "Agra", contry: "India", Image:"https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg"},
     
  
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table table-dark table-striped-columns">
          <thead>
            <tr>
            <th scope="col">no</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">contry</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                   <td>{x.no}</td>
                    <td>{x.name}</td>
                    <td>{x.Location}</td>
                    <td>{x.contry}</td>
                    <td><img src={x.Image}/></td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }