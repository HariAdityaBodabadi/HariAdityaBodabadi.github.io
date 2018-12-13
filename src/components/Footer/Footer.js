import React,{Component} from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends Component{

    render(){
        return(
            <StickyFooter
            bottomThreshold={50}
            normalStyles={{
                            backgroundColor: "rgb(18, 104, 10)",
                            color:"white",
                            padding: "2rem",
                            position:"absolute",
                            bottom:0,
                            
                                    
                          }}
             stickyStyles={{
                             backgroundColor: "rgb(18, 104, 10)",
                             padding: "2rem", 
                             position:"absolute",
                             left:0,
                             right:0,
                             bottom:0,
                             color:"white"
                             
                           }}
>   
<center><p><a href="https://www.instagram.com/hariadityanaidu/" target="_blank" rel="noopener noreferrer">Hari Aditya Bodabadi</a></p></center>
<center >All Rights Reserverd.</center>
<p text-align="left">
<a href="mailto:hariadityab@pavo-tusker.com" target="_blank" rel="noopener noreferrer">Mail Me</a>
</p>
</StickyFooter>
        );
    }
}

export default Footer;