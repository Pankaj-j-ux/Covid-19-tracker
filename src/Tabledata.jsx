import React from 'react';

function Tabledata({state, active, confirmed, deaths, lastupdatedtime, recovered, statecode,}){
    return(
        <>
         <tr>
            <th className=""  scope="row">{state} ({statecode})</th>
            <td>{confirmed}</td>
            <td>{recovered}</td>
            <td>{deaths}</td>
            <td>{active}</td>
            <td>{lastupdatedtime}</td>
          </tr>
        </>
    );
}

export default Tabledata;