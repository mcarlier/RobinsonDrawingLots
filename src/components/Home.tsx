import React from "react";
import PerformDrawComponent from "./PerformDrawComponent";
import DisplayDrawComponent from "./DisplayDrawComponent";
import { connect } from "react-redux";
import { AppState } from "../store";

interface HomeProps {
    isDrawPerformed: boolean;
  }

class Home extends React.Component<HomeProps>{
    render() {
        if(!this.props.isDrawPerformed){
            return <PerformDrawComponent/>
        }else{
            return <DisplayDrawComponent/>
        }
    }
}
const mapStateToProps = (state: AppState) => ({
    isDrawPerformed: state.draw.isDrawPerformed
  });
export default connect(
mapStateToProps,
{}
)(Home);
  