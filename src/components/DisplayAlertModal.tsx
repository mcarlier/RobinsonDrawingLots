import React from "react";
import "./css/DisplayAlertModal.scss";

export interface alertInterface{
    showAlert:boolean,
    text: string,
    id: number | undefined
  }

export default class DisplayAlertModal extends React.Component<{onClose:() => void,show:boolean}> {
    constructor(props: Readonly<{ onClose: () => void; show: boolean; }>) {
        super(props);
        this.onClose = this.onClose.bind(this);
            }
    
    onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.props.onClose && this.props.onClose();
          };

    render() {
      if (!this.props.show) {
        return null;
      }
    return (
        <div className="alert-bg">
          <div className="modal">
              <div className="content">{this.props.children}</div>
              <div className="actions">
                <button className="toggle-button" onClick={this.onClose}>
                  Ok
                </button>
              </div>
            </div>
        </div>

      );
    }
  }