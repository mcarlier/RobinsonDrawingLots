import React from "react";
import ConfigureDrawComponent from "./ConfigureDrawComponent";
import DisplayDrawComponent from "./DisplayDrawComponent";
import { connect } from "react-redux";
import { AppState } from "../store";

interface HomeProps {
    isDrawPerformed: boolean;
  }

class Home extends React.Component<HomeProps>{
    render() {
        if(!this.props.isDrawPerformed){
            return <ConfigureDrawComponent/>
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
  