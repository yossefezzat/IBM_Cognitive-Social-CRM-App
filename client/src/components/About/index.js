import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import mahmoud from "./assets/mahmoud.jpeg";
import muhammedsheriff from "./assets/muhammedsheriff.jpeg";
import youseefezzat from "./assets/youseefezzat.jpeg";
import youssefwaled from "./assets/youssefwaleed.jpeg";
import hala from"./assets/hala.png";
import marwa from"./assets/marwa.jpg";
import one from"./assets/1.jpg";
import two from"./assets/2.png";
import three from"./assets/3.png";
import four from"./assets/4.png";
import five from"./assets/5.jpeg";
import Typing from 'react-typing-animation';
export default class About extends React.Component {

  
    render(){
        return (
<section>
<div id="home" class="pt-5">
<div class="background">
    	<div class="container">
		 <div class="row">
	 		<div class="col-sm-12">
			 <div class="pen">
       <Typing loop={true}>
    <span className="typing">IBM EGYPT.</span>
    <span className="typing" > CSC App To Analyze Everything Related to #IBM in Social Media</span>
    <Typing.Backspace count={"IBM EGYPT. CSC App To Analyze Everything Related to #IBM in Social Media".length} delay={500} />
  </Typing>  
            </div>
           </div>
        </div>
	    </div>
</div>
</div>

<div class="slider container-fluid bg-light text-center py-5">
<h1 class="pt-2 "> Used Tools</h1>
<div id="carouselExampleIndicators" class="carousel slide py-5" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" id="sl" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" id="sl"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" id="sl"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3" id="sl"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4" id="sl"></li>
  </ol>
  <div class="carousel-inner mb-5">
    <div class="carousel-item active">
      <div class="sora" style={{backgroundImage: `url('${one}')`}}> </div>
    </div>
    <div class="carousel-item">
        <div class="sora" style={{backgroundImage: `url('${two}')`}}> </div>
    </div>
    <div class="carousel-item">
        <div class="sora" style={{backgroundImage: `url('${three}')`}}> </div>
    </div>
    <div class="carousel-item">
        <div class="sora" style={{backgroundImage: `url('${four}')`}}> </div>
    </div>
    <div class="carousel-item">
        <div class="sora" style={{backgroundImage: `url('${five}')`}}> </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>


<div id="projects" class="bg-light text-center">       
          
     <h1 class=" pt-5 py-2 "> OUR TEAM</h1>
    
    <p class="mb-4"> </p>     
    
    < div class="container my-5">
          
          <div class="row">
                
          <div class="col-md-12 text-center">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
<li class="nav-item col-sm-3 text-center">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ALL</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">FRONT-END</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">BACK-END</a>
  </li>
  <li class="nav-item col-sm-3 text-center">
    <a class="nav-link " id="pills-MENTORS-tab" data-toggle="pill" href="#pills-MENTORS" role="tab" aria-controls="pills-MENTORS" aria-selected="false">MENTORS</a>
  </li>
</ul>
</div>
</div>
</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  
 < div class="container">
          
            <div class="row">
                  
            <div class="col-md-4">
        <img class="img-fluid" src={hala} width="400" height="400"/>      
        <h3> Hala Aziz </h3>
        <p class="mb-4"> Mentor</p>
                </div>
                <div class="col-md-4">
        <img class="img-fluid" src={marwa} width="400" height="400"/>      
        <h3> Marwa Arafa</h3>
        <p class="mb-4"> Mentor</p>
                </div>
                <div class="col-md-4">
        <img class="img-fluid" src={muhammedsheriff} width="400" height="400"/>      
        <h3> Muhammed Sheriff </h3>
        <p class="mb-4"> Front-end Developer</p>
                </div>
                <div class="col-md-4">  
        <img class="img-fluid" src={mahmoud} width="400" height="400"/>      
        <h3> Mahmoud Atwa </h3>
        <p class="mb-4"> Front-end Developer</p>
                </div>
                
                <div class="col-md-4">
        <img class="img-fluid" src={youssefwaled} width="400" height="400"/>
        <h3> Youseef Waleed </h3>      
        <p class="mb-4"> Back-end Developer</p>
                </div>            
                
                <div class="col-md-4">  
        <img class="img-fluid" src={youseefezzat} width="400" height="400"/>      
        <h3> Youseef Ezzat</h3>
        <p class="mb-4"> Back-end Developer</p>
                </div>

              </div>
          
          </div>
  
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  <div class="container">
          
            <div class="row">

                 <div class="col-md-6">
                    <img class="img-fluid" src={muhammedsheriff} width="400" height="400"/>      
                    <h3> Muhammed Sheriff </h3>
                    <p class="mb-4"> Front-end Developer</p>
                </div>

               <div class="col-md-6">  
                   <img class="img-fluid" src={mahmoud} width="400" height="400"/>      
                   <h3> Mahmoud Atwa </h3>
                   <p class="mb-4"> Front-end Developer</p>
                </div> 

              </div>
          
          </div>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  
  <div class="container">
          
            <div class="row">
              
            
            <div class="col-md-6">
        <img class="img-fluid" src={youssefwaled} width="400" height="400"/>
        <h3> Youseef Waleed </h3>      
        <p class="mb-4"> Back-end Developer</p>
                </div>            
                
                <div class="col-md-6">  
        <img class="img-fluid" src={youseefezzat} width="400" height="400"/>      
        <h3> Youseef Ezzat </h3>
        <p class="mb-4"> Back-end Developer</p>
                </div>
              </div>
          
          </div>
  </div>
  <div class="tab-pane fade" id="pills-MENTORS" role="tabpanel" aria-labelledby="pills-MENTORS-tab">
  
  <div class="container">
          
            <div class="row">
              
            
            <div class="col-md-6">
        <img class="img-fluid" src={hala} width="400" height="400"/>      
        <h3> Hala Aziz </h3>
        <p class="mb-4"> Mentor</p>
                </div>
                <div class="col-md-6">
        <img class="img-fluid" src={marwa} width="400" height="400"/>      
        <h3> Marwa Arafa</h3>
        <p class="mb-4"> Mentor</p>
                </div>
              </div>
          
          </div>
  </div>
</div>

      </div>

      
  </section>        
     
        )
    }
}