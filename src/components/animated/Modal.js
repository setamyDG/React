import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import '../../Modal.css';

const CustomModal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 2000,

        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const Shade = posed.div({
    enter: { opacity: 1, delay: 2000},
    exit: { opacity: 0 }
});
const Text = posed.div({

});

class Modal extends React.Component {
    state = { isModalVisible: false };

    componentDidMount() {
        this.setState({
            isModalVisible: true
        });
    }

    closeModal(){
        this.setState({
            isModalVisible: false

        });
        this.props.onCloseModal()
    }

    render() {
        const { isModalVisible } = this.state;

        return (
            <PoseGroup>
                {isModalVisible && [
                    // If animating more than one child, each needs a `key`
                    <Shade key="shade" className="shade" />,
                    <CustomModal key="modal" className="modal">
                        <Text className="modalTextHeaders"> Welcome to my website</Text>
                        <p className="modalTextUnderHeaders"> Hello, I'am student of university in Zielona Góra,
                        I want to be a front-end-developer. please share this site! Enjoy!</p>

                        <div className="modalContainer">
                            <a className="modalBtn" onClick={()=> this.closeModal()}>

                                <svg width="277" height="62">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stopColor="#1b3705"/>
                                            <stop offset="25%" stopColor="#37600e"/>
                                            <stop offset="50%" stopColor ="#588c14"/>
                                            <stop offset="75%" stopColor="#7ebb16"/>
                                            <stop offset="100%" stopColor="#a8eb12"/>
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"/>
                                </svg>
                                <span>close</span>
                            </a>
                        </div>

                    </CustomModal>
                ]}
            </PoseGroup>
        );
    }
}

export default Modal
