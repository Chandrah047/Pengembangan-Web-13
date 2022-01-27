import React from 'react'; 
 
export default class Profil extends React.Component{     
    render(){         
        return( 
            <div> 
               <h2>Profil { this.props.match.params.nama }</h2> 
            </div> 
        ) 
    } 
} 
