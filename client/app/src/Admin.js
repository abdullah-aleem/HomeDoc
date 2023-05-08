import React from 'react'
  
function Admin() {
    return (
        <div className='mainn' style={{backgroundColor: 'black'}}>
        <table className='tablee' style={{backgroundColor: 'inherit'}}>
            <thead className='headd'>
                <tr>
                <th>UnVerified Doctors</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <label htmlFor="item1">Name</label>
                    <label htmlFor="item1" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item1" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item2">Name</label>
                    <label htmlFor="item2" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item2" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item3">Name</label>
                    <label htmlFor="item3" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item3" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item4">Name</label>
                    <label htmlFor="item4" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item4" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item5">Name</label>
                    <label htmlFor="item5" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item5" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item6">Name</label>
                    <label htmlFor="item6" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item6" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item7">Name</label>
                    <label htmlFor="item7" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item7" style={{marginLeft: '400px'}} />
                </td>
                </tr>
                <tr>
                <td>
                    <label htmlFor="item8">Name</label>
                    <label htmlFor="item8" style={{marginLeft: '150px'}}>PNC no.</label>
                    <input type="checkbox" id="item8" style={{marginLeft: '400px'}} />
                </td>
                </tr>
            </tbody>
        </table>
        <button className='save'>Save</button>
        </div>
    )
}

export default Admin