import React, { Component } from 'react';
import ProdDetails from './product-details'; 
import { ProdForm } from './product-form';


class ProdList extends Component{

    constructor(props) {
        super(props);
        this.state ={
         
        products:[
            {
                slno:1,
                product:'Watch',
                price:5000,
                
               
            },
            {
                slno:2,
                product:'LED ',
                price:25000,
                
            },
            {
                slno:3,
                product:'Lap Top',
                price:10000,
                
            }
        ],
        latestId:4,
        selectedProduct:null
    }
}
   
    
        showDetails=(selectedProduct)=>{
        console.log(selectedProduct);
    
        this.setState({
            selectedProduct:selectedProduct
        })
    }

    addProduct =(prodObj) => {
        let newProduct=Object.assign({},prodObj,{id:this.state.latestId});
        

    let newList = [...this.state.products,newProduct];
      this.setState({
        products: newList,
          latestId:this.state.latestId +1
      });
   }



    render() {
    const prodRows=this.state.products.map(e=>{
        return(
            <tr>
                <td>{e.slno}</td>
                <td>{e.product}</td>
                <td>{e.price}</td>
                
                <td>
                    <button onClick={()=>this.showDetails(e)}>show details</button>
                </td>

            </tr>
        )
    })  
        return (
           <div>
               <h3>Product List</h3>
               <table>
                   <thead>
                       <tr>
                       <th>Sl.No.</th>
                       <th>Product</th>
                       <th>Price</th>
                       <th>Details</th>
                       

                       </tr>
                       </thead>
                    <tbody>
                        {
                         prodRows   
                        }
            
                    </tbody>

               </table>
               <div >
                <div >
                <div >
                <ProdForm addProduct={this.addProduct}/>
                </div>
                <div >
                {
                   this.state.selectedProduct &&
             <ProdDetails product={this.state.selectedProduct}/>
               }
                </div>
                </div>
                </div>
               
               
         </div>
           
        );
    }
}

export default ProdList;