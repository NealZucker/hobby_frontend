import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

class Hobbies extends Component {

  componentDidMount() {
    // axios.post('/getHobbies').then((res)=>{
    //   console.log(res);
    // });
  }

  render() {
     let hobbies// = this.props.hobbyReducer.hobbies.map((h) => {
    //   <tr>
    //     <td>{h.name}</td>
    //     <td>{h.skillLevel}</td>
    //   </tr>
    // });

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skill Level </th>
            </tr>
          </thead>
          <tbody>
            {hobbies}                        
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect((state) => (state))(Hobbies);