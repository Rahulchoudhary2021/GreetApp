import React, {Component} from 'react';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import {Operations} from '../components/Operations';
import {Output} from '../components/Output';
import { Footer } from '../components/Footer';




export class Greet extends Component{
        constructor(){
                super();
                this.firstName='';
                this.lastName='';
                this.fullname='';
                this.state={msg:this.fullname};

        }
        clearALL(){
                this.firstName='';
                this.lastName='';
                this.setState({msg:''});

                

        }       
       
        makeFullname(){
        
                this.fullname=this.initCap(this.firstName)+ ' ' +this.initCap(this.lastName)+'';
                console.log("Full Name Is",this.fullname);
                this.setState({...this.state,msg:this.fullname});
        }
      
        initCap(str){
              return  str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

       }
       takeFirstName(event){
               console.log("Iam called........",event.target.value)
               this.firstName=event.target.value;
               console.log("First Name ",this.firstName);
               this.setState({...this.state});
        }
        takeLastName(event){
                console.log("Iam called........",event.target.value)
                this.lastName=event.target.value;
                console.log("Last Name ",this.lastName);
                this.setState({...this.state});
         }
        render(){
                console.log("Render call")
return(
        <div>
               
             <Title/>
      
             <br/>
             <Input val={this.firstName} change={this.takeFirstName.bind(this)} title="First Name"/>
             <br/>
             <br/>
             <Input val={this.lastName} change={this.takeLastName.bind(this)} title="Last Name"/>
             <br/>
             <br/>
             <Operations cssClass="btn btn-primary" click={this.makeFullname.bind(this)} title="GREET"/>
            <Operations cssClass="btn btn-danger" click={this.clearALL.bind(this)} title="CLEAR"/>
            <br/>
            <br/>
            <Output result={this.state.msg}/>
            {/* we can aslo use this.fullName */}
            <Footer/>
             
</div>

);
}}