//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Photos() {

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
        res=>(//import React from 'react'

            export default function photos() {
                const empData = [
                  { name: "Taj Mahal", loaction: "Agra", countrty: "india", url:"//en.wikipedia.org/wiki/New_7_Wonders_of_the_World#/media/File:Taj_Mahal_in_March_2004.jpg"},
                  { name: "Machu Picchu", location: "peru", country: "cuzco", url:"//en.wikipedia.org/wiki/New_7_Wonders_of_the_World#/media/File:Machu_Picchu,_Peru.jpg"},
                  { name: "Christ The Redeemer", location: "Brazil", country: "Rio de Janeiro", url:"//en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)#/media/File:Christ_the_Redeemer_-_Cristo_Redentor.jpg"},
                  { name: "Great Wall of China", location: "Beijing", country: "china", url:"//en.wikipedia.org/wiki/New_7_Wonders_of_the_World#/media/File:The_Great_Wall_of_China_at_Jinshanling.jpg"},
                  { name: "Colosseum", location: " Italy", country: "Rome", url:"//en.wikipedia.org/wiki/New_7_Wonders_of_the_World#/media/File:Rome_Colosseum_exterior_panorama.jpg"},
                  { name: "Giza pyramids", location: "ezypt", country: "Giza Necropolis", url:"//en.wikipedia.org/wiki/New_7_Wonders_of_the_World#/media/File:Pyramids_of_the_Giza_Necropolis.jpg "},
                  { name: "Chichén Itzá", location: "Mexico", country: "YucatánS", url:"//upload.wikimedia.org/wikipedia/commons/7/7a/Chichen-Itza-Castillo-Seen-From-East.JPG "},
            
                
                ];
              
                // () => ()
              
                return (
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">location</th>
                          <th scope="col">Country</th>
                          <th scope="col">url</th>
                        </tr>
                      </thead>
                      <tbody>
                        {empData.map(
                            (x)=>( 
                            <tr>
                                <td>{x.name}</td>
                                <td>{x.location}</td>
                                <td>{x.country}</td>
                                <td>{x.url}</td>
                              </tr>
                             )
                        )}
                       
                      </tbody>
                    </table>
                  </div>
                );
              }
              
            setPhotData(res.data)
        )
    );
},[]);


    const [Photo,setPhotData] = useState([]);
  
    // () => ()
  
    return (
      <div>
        <table className="table table-dark table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">albumId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">url</th>
              <th scope="col">thumbnailUrl</th>
            </tr>
          </thead>
          <tbody>
            {Photo.map(
                (x)=>( 
                <tr>
                    <td>{x.albumId}</td>
                    <td>{x.id}</td>
                    <td>{x.title}</td>
                    <td>{x.url}</td>
                    <td>{x.thumbnailUrl}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }