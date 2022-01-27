import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data_guests: [],
      open: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ open: true });
  };

  hideModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    fetch("http://localhost:8000/guests")
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          data_guests: res,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteGuest(id) {
    fetch("http://localhost:8000/guests/" + id.id, {
      method: 'DELETE',
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        this.componentDidMount();
      });
    console.log(id.id);
  }

  render() {
    	const ToAddGuest = withRouter(({ history }) => (
      <button onClick={() => history.push("/add")}>
Add Guest
</button>
    ));
	
const ToEditGuest = withRouter(({ history }) => (
      <button onClick={() => history.push("/edit/" + id)}>
Edit Guest
</button>
    ));


    return (
      <div>
<ToAddGuest/>
        <table border="1" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data_guests.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                 <ToEditGuest id={item.id}/>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={this.showModal}>
                    Delete
                  </button>
                  <Modal show={this.state.open} 
            handleClose={this.hideModal}
		handleOnClick={this.deleteGuest.bind(this, { id: item.id })}   
		/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToAddGuest />
      </div>
    );
  }
}

export default withRouter(App);


//Tambah fungsi hapus
import React, { Component } from 'react'; 
import {withRouter} from 'react-router-dom';

class App extends Component {   
  constructor(){     
    super();     
    this.state = {       
      data_guests : [] 
      } 
  }    
  
componentDidMount(){     
  fetch('http://localhost:8000/myguests') 
    .then(response => response.json()) 
    .then(res=>{       
	this.setState({         
		data_guests : res 
      }) 
    }) 
    .catch(error=>{       
		console.error(error) //error response 
    }) 
  }    

deleteGuest(){       
  fetch('http://localhost:8000/myguests', 
          {               
		  method : 'DELETE',               
          })
	  .then((response=> response.json())) 
    .then(res=>{         
	  this.props.history.goBack() 
      }) 
}    

  
render() {   
	const ToAddGuest = withRouter(({history})=>(
	<button onClick={()=> history.push('/add')}>Add Guest</button>
  ))     
  const ToEditGuest = withRouter(({history})=>(
  <button onClick={()=> history.push('/edit')}>Edit Guest</button>
  ))
  const ToDeleteGuest = withRouter(({history})=>(
  <button onClick={()=> history.push('/delete')}>Delete Guest</button>
  ))  
	
    return ( 
        <div> 
      <ToAddGuest />
      <ToEditGuest />
      <ToDeleteGuest />
          <table border="1" cellPadding="0" cellSpacing="0"> 
            <thead> 
            
	<tr><th>No</th><th>Firstname</th><th>Lastname</th><th>Email</th></tr> 
          </thead> 
          <tbody>           
            { 
            this.state.data_guests.map((item, index)=>( 
              <tr key={index}> 
                <td>{index+1}</td> 
                <td>{item.firstname}</td> 
                <td>{item.lastname}</td> 
                <td>{item.email}</td> 
              </tr> 
            )) 
          } 
          </tbody> 
        </table> 
      </div> 
    ); 
  } 
}  

export default App; 



// import React, { Component } from 'react'; 
// import {withRouter} from 'react-router-dom';

//  class App extends Component {   
//  constructor(){     
// 	super();     
// 	this.state = {       
// 		data_guests : [] 
//     } 
//   }    
  
//   componentDidMount(){     
//   fetch('http://localhost:8000/myguests') 
//     .then(response => response.json()) 
//     .then(res=>{       
// 	this.setState({         
// 		data_guests : res 
//       }) 
//     }) 
//     .catch(error=>{       
// 		console.error(error) //error response 
//     }) 
//   }    
  
//   render() {   
// 	const ToAddGuest = withRouter(({history})=>(
// 	<button onClick={()=> history.push('/add')}>Add Guest</button>
//   ))     
//   const ToEditGuest = withRouter(({history})=>(
//   <button onClick={()=> history.push('/edit')}>Edit Guest</button>
//   ))  
	
//     return ( 
//         <div> 
//       <ToAddGuest />
//       <ToEditGuest />
//           <table border="1" cellPadding="0" cellSpacing="0"> 
//             <thead> 
            
// 	<tr><th>No</th><th>Firstname</th><th>Lastname</th><th>Email</th></tr> 
//           </thead> 
//           <tbody>           { 
//             this.state.data_guests.map((item, index)=>( 
//               <tr key={index}> 
//                 <td>{index+1}</td> 
//                 <td>{item.firstname}</td> 
//                 <td>{item.lastname}</td> 
//                 <td>{item.email}</td> 
//               </tr> 
//             )) 
//           } 
//           </tbody> 
//         </table> 
//       </div> 
//     ); 
//   } 
// }  export default App; 
