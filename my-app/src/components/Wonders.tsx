//import React from 'react'

export default function EmpSal() {
  const empData = [
    {no:"1", name: "Great Wall of China", Location: "Beijing", contry: "China", url:"https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg"},
    {no:"2", name: "Chichén Itzá", Location: " Yucatán Peninsula ", contry: "Mexico", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG/1280px-Chichen-Itza-Castillo-Seen-From-East.JPG"},
    {no:"3", name: "Petra", Location: "The Khaznah ", contry: "Petra", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/The_Monastery%2C_Petra%2C_Jordan8.jpg/1280px-The_Monastery%2C_Petra%2C_Jordan8.jpg"},
    {no:"4", name: "Machu Picchu", Location: "Machu Picchu", contry: "Peru", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1280px-Machu_Picchu%2C_Peru.jpg"},
    {no:"5", name: "Christ the Redeemer", Location: "Rio de Janeiro", contry: "Brazil", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/800px-Christ_the_Redeemer_-_Cristo_Redentor.jpg"},
    {no:"6", name: "Colosseum", Location: "Rome", contry: "Italy", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rome_Colosseum_exterior_panorama.jpg/1920px-Rome_Colosseum_exterior_panorama.jpg"},
    {no:"7", name: "Taj Mahal", Location: "Agra", contry: "India", url:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg"},
   

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
            <th scope="col">url</th>
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
                  <td><img src={x.url}/></td>
                </tr>
               )
          )}
         
        </tbody>
      </table>
    </div>
  );
}