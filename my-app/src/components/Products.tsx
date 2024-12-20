//import React from 'react'

export default function EmpSal() {
    const empData = [
      { name: "Sai", email: "Sai@gmail.com", dept: "IT", rollno: 45 ,age:20 },
      { name: "Abhi", email: "Abhi@gmail.com", dept: "CSE", rollno: 35 ,age:21 },
      { name: "Praveen", email: "Praveen@gmail.com", dept: "AI&ML", rollno: 25 ,age:26 },
      { name: "Chandu", email: "Chandu@gmail.com", dept: "CSD", rollno: 65 ,age:22 },
      { name: "Nihanth", email: "Nihanth@gmail.com", dept: "EEE", rollno: 55 ,age:25 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">dept</th>
              <th scope="col">rollno</th>
              <th scope="col">age</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.dept}</td>
                    <td>{x.rollno}</td>
                    <td>{x.age}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }