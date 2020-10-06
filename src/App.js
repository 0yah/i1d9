import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {

  toggleSkill = ()=>{
    $('.button span').css({

    });
  }


  render() {
    return (
      <div>
            <div class="statusBar">
        <div class="myNetwork">Projects</div>
        <div class="myTime">11:41 PM</div>
        <div class="myBattery"><span></span></div>

    </div>

    <div class="skills-modal">
        <span class="title">Skills</span>
        <div class="skill">
            HTML5
            <span></span>
        </div>
        <div class="skill">
            Css
            <span></span>
        </div>
        <div class="skill">
            Javascript
            <span></span>
        </div>
        <div class="skill">
            Python
            <span></span>
        </div>
        <div class="skill">
            React
            <span></span>
        </div>

        <div class="skill">
            Django
            <span></span>
        </div>

        <div class="button" onClick={()=>{
          $('.skills-modal').toggle(500);
        }}>
            <span>
                Ok
            </span>
            
        </div>


    </div>

    <div class="contact-modal">
        <form>
            <span></span>
       
            <input placeholder="Your Name"/>
            <input type='email' placeholder="Your Email" />
            <textarea  placeholder="Send me a a message"></textarea>

        </form>
        <div class="buttons">
            <span onClick={()=>{
          $('.contact-modal').toggle(500);

          $('.skills-modal').css({
            display:'none'
          });


        }}>Cancel</span>
            <span>Send</span>
        </div>

    </div>

    <div class="main">
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>

        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>

        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
        <div class="card">
            <div class="content">
                
            </div>
            <span class="footer">
                Title
            </span>
        </div>
    </div>

    <div class="dock">
        

        <div class="dock-bg"></div>

        <div class="items">

            <div onClick={()=>{
          $('.contact-modal').toggle(500);
          $('.skills-modal').css({
            display:'none'
          });
        }}>

            </div>
            <div onClick={()=>{
          $('.skills-modal').toggle(500);
          $('.contact-modal').css({
            display:'none'
          });
        }}>

            </div>
            <div>

            </div>
            
        </div>
    </div>

      </div>
    );
  }
}

export default App;
