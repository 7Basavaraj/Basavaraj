import React, { Component } from 'react';


export class ProdForm extends Component{

    constructor(props){
        super(props);
        this.state={
            product:'',
            price:''
        }
    }
    handleChange=(evt)=>{
        this.setState ({
            [evt.target.name]:evt.target.value
     
        })
     }

     resetForm=()=>{
         this.setState({
            product:'',
            price:''
         })
     }



     handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(this.state)
        this.props.addProduct(this.state);
        this.resetForm();
    }



    render() {

        
        return (
            <form onSubmit={ this.handleSubmit } >
            <label>Product</label>
            <input type="Text" 
                name="product"
               value={this.state.product}
               onChange={this.handleChange} />
            <br/>

            <label>price</label>
            <input type="Text"
                name="price" 
               value={this.state.price}
               onChange={this.handleChange} />
            <br/>

            

            
            <button>Add Product</button>
            </form>
           
           
        );
    }
}

