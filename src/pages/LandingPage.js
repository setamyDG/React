import React from 'react';
import '.././App.css';
import Modal from "../components/animated/Modal";
import Message from "../components/animated/Message";
import LogoCircle from "../components/animated/LogoCircle";

class LandingPage extends React.Component {

    state = { isModalVisible: false };

    onCloseModal = () =>{
        this.setState({
            componentAfterModalVisible: true
        })
    };

    renderAfterModal(){
        if (this.state.componentAfterModalVisible){
            return(
                <div>
                    <Message/>
                    <LogoCircle/>

                </div>

            )
        }
    }

    render() {
            return(
            <div>
                <Modal onCloseModal={this.onCloseModal}/>
                {this.renderAfterModal()}
            </div>
        );
    }
}
export default LandingPage
