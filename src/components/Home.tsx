import React from "react";
import PerformDrawComponent from "./PerformDrawComponent";
import DisplayDrawComponent from "./DisplayDrawComponent";


interface HomeProps {
    isDrawPerformed: boolean;
  }
class Home extends React.Component<HomeProps, {name: string , match_name: string}>{
    constructor(props: HomeProps) {
        super(props);
      }

    render() {
        if(!this.props.isDrawPerformed){
            return <PerformDrawComponent/>
        }else{
            return <DisplayDrawComponent/>
        }
    }
}
export default Home;
