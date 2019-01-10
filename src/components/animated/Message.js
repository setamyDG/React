import React from 'react';
import '../../App.css';
import posed from "react-pose";
import PoseGroup from "react-pose/lib/components/Transition/PoseGroup";
import SplitText from "react-pose-text";

const charPoses = {
    enter: {
        y: -1,
        opacity:1,
    },

    exit: {
        y: ({ initialOffset }) => initialOffset,
        opacity: 0
    }
};
const EnterSplitText = posed.div({
    exit: {
        x: '-100%',
        opacity: 0,
    },
    enter: {
        y: '10%',
        x: '0%',
        beforeChildren: true,
        staggerChildren: 50,
        opacity: 1,
        transition: {
            x: { duration: 2000},
        }
    }});


class Message extends React.Component {

    state = { componentAfterModalVisible: true };

    render(){
        if (this.state.componentAfterModalVisible){
            return(
                <div style={{ marginBottom: '155%', left: '50%'}}>
                    <PoseGroup>
                    <EnterSplitText key='enterText' initialPose="exit" pose="enter">
                        <SplitText className="nameText" key='text' charPoses={charPoses}>DANIEL GOLA</SplitText>
                    </EnterSplitText>
                    </PoseGroup>
                </div>


            )
        }
    }
}
export default Message
