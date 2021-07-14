import React, { useEffect, useState } from 'react';
import Dot from '@material-ui/icons/FiberManualRecord';
import Card from './Card.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import Tabledata from './Tabledata';


function App() {

  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);

  const getdata = async () =>{
    const url = `https://api.covid19india.org/data.json`;
    const res = await fetch(url);
    const data = await res.json();
    const actualData = data.statewise[0];
    const tempTableData = data.statewise;
    tempTableData.splice(0,1);
    
    console.log(tempTableData);
    setData(actualData);
    setData2(tempTableData);
  }

  useEffect(()=>{
    getdata();
  },[]);



  // const getRandomColor = ()=>{
  //   var color = "#";
  //   var symbol = "0123456789ABCDEF";
    
  //   for (let i = 0; i < 6; i++){
  //     color = color + symbol[Math.floor(Math.random()*16)]
  //   } 
  //   return color;
  // }


// active: "423619"
// confirmed: "30942146"
// deaths: "411403"
// deltaconfirmed: "37412"
// deltadeaths: "587"
// deltarecovered: "40106"
// lastupdatedtime: "13/07/2021 22:00:34"
// migratedother: "12260"
// recovered: "30094864"
// state: "Total"
// statecode: "TT"
// statenotes: ""


  return (
    <>
    <header className="d-flex flex-row px-4 py-4 mb-5 text-white " style={{fontFamily : "'Alfa Slab One', cursive", fontFamily : "'Fjalla One', sans-serif"}}>
      <AddAlertIcon style={{ fontSize : 50 }}/> <h1 className="ms-2 py-1 mb-0" >Covid-19 Tracker</h1>
      <div className=" ms-auto d-flex flex-row py-1"><Dot className="align-middle live mt-2 text-danger"/><h3 className="mb-0 live py-1">LIVE</h3></div>
    </header>
    
    <section className="container mb-5 mar">
    
    <div className="row">
      <div className="col-md-4"><Card key='1' subHead="Our" head="Country" body="INDIA" color="#993366"/></div>
      <div className="col-md-4"><Card key='2' subHead="Total" head="Recovered" body={data.recovered} color="#0d6efd"/></div>
      <div className="col-md-4"><Card key='3' subHead="Total" head="Confirmed" body={data.confirmed} color="#fd7e14"/></div>
    </div>
    <div className="row">
      <div className="col-md-4"><Card key='1' subHead="Total" head="Death" body={data.deaths}  color="#ffc107"/></div>
      <div className="col-md-4"><Card key='2' subHead="Total" head="Active" body={data.active} color="#20c997"/></div>
      <div className="col-md-4"><Card key='3' subHead="Last" head="Update" body={data.lastupdatedtime} color="#6f42c1"/></div>
    </div>
  
    </section>


    <section className="my-5">
      <div className="d-flex flex-row justify-content-center" >
      <p className="fs-lighter text-light mt-2 me-2 fs-3 text-decoration-underline" style={{fontFamily : "'Heebo', sans-serif"}}>STATEWISE</p>
      <h2 className="text-light fs-bolder  fs-1" style={{fontFamily : "'Fjalla One', sans-serif"}}>DASHBOARD</h2>
      </div>
      <div className="mx-5 my-4 px-2 py-1">
      <table className="table table-dark table-bordered table-hover">
        <thead className="">
          <tr className="table-active">
            <th scope="col" className="text-uppercase" >State</th>
            <th scope="col" className="text-uppercase">Confirmed</th>
            <th scope="col" className="text-uppercase">Recovered</th>
            <th scope="col" className="text-uppercase">Deaths</th>
            <th scope="col" className="text-uppercase">Active</th>
            <th scope="col" className="text-uppercase">Late Update</th>
          </tr>
          {
            data2.map((val)=>{
              return(
                <Tabledata
                  state = {val.state}
                  active = {val.active}
                  confirmed = {val.confirmed}
                  deaths = {val.deaths}
                  lastupdatedtime = {val.lastupdatedtime}
                  recovered = {val.recovered}
                  statecode = {val.statecode}
                />
              );
            })
          }
          <Tabledata/>         
        </thead>  
      </table>
      </div>
      
    </section>
    </>
  );
}

export default App;