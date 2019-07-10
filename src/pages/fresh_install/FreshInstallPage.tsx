import React from 'react';
import '../fresh_install/FreshInstallPage.css';
import path4 from "../../images/path4.svg";
import classNames from 'classnames';

export default class FreshInstallPage extends React.Component<{}, { selectedTemperatureScale: string }> {

    handleButtonClick = (selectedTemperatureScale: 'C' | 'F') => {
        if (this.state === null || !(this.state.selectedTemperatureScale === selectedTemperatureScale)) {
            this.setState({
                selectedTemperatureScale
            });

            localStorage.setItem('temperatureScale', selectedTemperatureScale);
        }
    }

    public moveToLocation() {
        console.log("Moving");
    }

    renderCelsiusButton = () => {
        const isClicked = this.state !== null && this.state.selectedTemperatureScale === 'C';
        const divClasses = classNames({
            ButtonActive: isClicked,
            ButtonCelsius: true,
            Button: !isClicked
        });

        const textClasses = classNames({
            TextActive: isClicked,
            Text: true,
            ButtonText: true
        });

        return (
            <div className={divClasses} onClick={((e) => this.handleButtonClick('C'))}>
                <span className={textClasses}>°C</span>
            </div>
        );
    }

    renderFahrenheit = () => {
        const isClicked = this.state !== null && this.state.selectedTemperatureScale === 'F';
        const divClasses = classNames({
            ButtonActive: isClicked,
            Button: !isClicked
        });

        const textClasses = classNames({
            TextActive: isClicked,
            Text: true,
            ButtonText: true
        });

        return (
            <div className={divClasses} onClick={((e) => this.handleButtonClick('F'))}>
                <span className={textClasses}>°F</span>
            </div>
        );
    }

    render() {
        return (
            <div className="FreshInstallPage">
                <div className="DivContent DivDescription">
                    <span className="Text Description">
                        Choose your preferred <br />
                        temperature scale:
                    </span>
                </div>
                <div className="DivContent DivButtons">
                    {this.renderCelsiusButton()}
                    {this.renderFahrenheit()}
                </div>
                <div className="DivContent DivNext" onClick={this.moveToLocation} >
                    <span className="Text Next">
                        Next
                    </span>
                    <img className="Text Path4" src={path4}></img>
                </div>
            </div>
        )
    }
}
