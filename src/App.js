import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {

    toggleSkill = () => {
        $('.button span').css({

        });
    }

    constructor(props){
        super(props);
        this.state={
            time:null
        }

    }

    componentDidMount(){
        var t = new Date();
        var time = `${t.getHours()}:${t.getMinutes()}`;
        
       // console.log(t.getHours(),t.getMinutes(),t.getSeconds());
    }

    setTime = () =>{

        setInterval(()=>{
            var t = new Date();
            var time = `${t.getHours()}:${t.getMinutes()}`;
        this.setState({
            time:time
        });
        //console.log(this.state.time);
        //console.log(t.getHours(),t.getMinutes(),t.getSeconds());
        },1000);
    }


    render() {
        this.setTime();
        return (
            <div>
                <div class="statusBar">
                    <div class="myNetwork">Projects</div>
        <div class="myTime">{this.state.time}</div>
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

                    <div class="button" onClick={() => {
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

                        <input placeholder="Your Name" />
                        <input type='email' placeholder="Your Email" />
                        <textarea placeholder="Send me a message"></textarea>

                    </form>
                    <div class="buttons">
                        <span onClick={() => {
                            $('.contact-modal').toggle(500);

                            $('.skills-modal').css({
                                display: 'none'
                            });


                        }}>Cancel</span>
                        <span>Send</span>
                    </div>

                </div>

                <div class="about-modal">
                    
                    <div className='socials'>
                        
                    <div className='socialCard'>
                            <div className='social-icon'></div>
                            
                        </div>
                        <div className='socialDetails'>
                            <span>Github</span>
                                <span>@i1d9</span>
                            </div>

                        <div className='socialCard'>
                            <div className='social-icon'></div>
                            
                        </div>
                        <div className='socialDetails'>
                                <span>Twitter</span>
                                <span>@_i1d9</span>
                            </div>
                        <div className='socialCard'>
                            <div className='social-icon'></div>
                            
                        </div>
                        <div className='socialDetails'>
                            <span>Instagram</span>
                            <span>@i1d9</span>
                        </div>

                    </div>
                    <div class="buttons">
                        <span onClick={() => {
                            $('.about-modal').toggle(500);

                            $('.skills-modal').css({
                                display: 'none'
                            });
                            $('.contact-modal').css({
                                display: 'none'
                            });


                        }}>Ok</span>
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

                        <div onClick={() => {
                            $('.contact-modal').toggle(500);
                            $('.skills-modal').css({
                                display: 'none'
                            });
                            $('.about-modal').css({
                                display: 'none'
                            });
                        }}>

                        </div>
                        <div onClick={() => {
                            $('.skills-modal').toggle(500);
                            $('.contact-modal').css({
                                display: 'none'
                            });
                            $('.about-modal').css({
                                display: 'none'
                            });
                        }}>

                        </div>
                        <div onClick={()=>{
                              $('.about-modal').toggle(500);
                              $('.skills-modal').css({
                                display: 'none'
                            });
                            $('.contact-modal').css({
                                display: 'none'
                            });
                        }}>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default App;
