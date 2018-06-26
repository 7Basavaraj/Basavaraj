import React from 'react'

function ProdDetails (props){
    return (
        <div>
        
    
        <h3>
            Issue Datails of id: {props.product.slno}
        </h3>
      
        <div>
        <div class="ui card">
       

        <p><strong>Issue ID:</strong>{props.product.slno}</p>
        <p><strong>Issue Summary:</strong>{props.product.product}</p>
        <p><strong>Issue  Status:</strong>{props.product.price}</p>
        <p><strong>Created Date:</strong>{props.product.details}</p>
        
        </div>
        </div>
        </div>
       
    )

}
export default ProdDetails;