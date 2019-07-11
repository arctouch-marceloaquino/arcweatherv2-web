import React from 'react';
import '../fresh_install/FreshInstallPage.css';
import path4 from "../../images/path4.svg";
import classNames from 'classnames';
import TemperatureScaleService from '../../services/TemperatureScaleService';

type Props = {};
type State = { selectedTemperatureScale: string };

export default class FreshInstallPage extends React.Component<Props, State> {

    temperatureService: TemperatureScaleService;

    constructor(props: Props) {
        super(props);
        this.state = { selectedTemperatureScale: '' };
        this.temperatureService = new TemperatureScaleService();
    }

    handleButtonClick = (selectedTemperatureScale: 'C' | 'F') => {
        if (!(this.state.selectedTemperatureScale === selectedTemperatureScale)) {
            this.setState({
                selectedTemperatureScale
            });

            this.temperatureService.setSelectedTemperature(selectedTemperatureScale);
        }
    }

    public moveToLocation() {
        console.log("Moving");
    }

    renderNextButton = () => {
        const isClicked = this.state.selectedTemperatureScale === '';
        const divClasses = classNames({'FreshInstallPage-nextButton--disabled': isClicked}, 
        'FreshInstallPage-content', 'FreshInstallPage-next');
        return (
            <div className={divClasses} onClick={this.moveToLocation} >
                <span className="FreshInstallPage-nonButtonText--default FreshInstallPage-text--default">
                    Next
                </span>
                <img className="FreshInstallPage-nextArrow" src={path4}></img>
            </div>);
    }

    renderCelsiusButton = () => {
        const isClicked = this.state.selectedTemperatureScale === 'C';
        const divClasses = classNames('FreshInstallPage-celsiusButton', {
            'FreshInstallPage-button--active': isClicked,
            'FreshInstallPage-button--default': !isClicked
        });

        const textClasses = classNames('FreshInstallPage-text--default', 'FreshInstallPage-buttonText--default', { 'FreshInstallPage-text--active': isClicked });

        return (
            <div className={divClasses} onClick={(e) => this.handleButtonClick('C')}>
                <span className={textClasses}>°C</span>
            </div>
        );
    }

    renderFahrenheitButton = () => {
        const isClicked = this.state.selectedTemperatureScale === 'F';
        const divClasses = classNames({
            'FreshInstallPage-button--active': isClicked,
            'FreshInstallPage-button--default': !isClicked
        });

        const textClasses = classNames('FreshInstallPage-text--default', 'FreshInstallPage-buttonText--default', 
        { 'FreshInstallPage-text--active': isClicked });

        return (
            <div className={divClasses} onClick={(e) => this.handleButtonClick('F')}>
                <span className={textClasses}>°F</span>
            </div>
        );
    }

    render() {
        return (
            <div className="FreshInstallPage">
                <div className="FreshInstallPage-content FreshInstallPage-description">
                    <span className="FreshInstallPage-nonButtonText--default FreshInstallPage-text--default">
                        Choose your preferred <br />
                        temperature scale:
                    </span>
                </div>
 
                <div className="FreshInstallPage-content FreshInstallPage-buttons">
                    {this.renderCelsiusButton()}
                    {this.renderFahrenheitButton()}
                </div>

                {this.renderNextButton()}
            </div >
        )
    }
}
