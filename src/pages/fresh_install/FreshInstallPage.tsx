import React from "react";
import "../fresh_install/FreshInstallPage.css";
import path4 from "../../images/path4.svg";
import classNames from "classnames";
import TemperatureScaleService from "../../services/TemperatureScaleService";
import { TemperatureScale } from "../../models/Types/Common";

type Props = {};
type State = { selectedTemperatureScale: TemperatureScale | null };

export default class FreshInstallPage extends React.Component<Props, State> {
  temperatureService: TemperatureScaleService;

  constructor(props: Props) {
    super(props);
    this.state = { selectedTemperatureScale: null };
    this.temperatureService = new TemperatureScaleService();
  }

  handleButtonClick = (temperatureScale: TemperatureScale) => {
    const { selectedTemperatureScale } = this.state;
    if (
      !selectedTemperatureScale ||
      selectedTemperatureScale.toString() !== temperatureScale.toString()
    ) {
      this.setState({
        selectedTemperatureScale: temperatureScale
      });

      this.temperatureService.setSelectedTemperature(temperatureScale);
    }
  };

  public moveToLocation() {
    console.log("Moving");
  }

  renderNextButton = () => {
    const divClasses = classNames(
      {
        "FreshInstallPage-nextButton--disabled": this.state.selectedTemperatureScale === null
      },
      "FreshInstallPage-content",
      "FreshInstallPage-next"
    );
    return (
      <div className={divClasses} onClick={this.moveToLocation}>
        <span className="FreshInstallPage-nonButtonText--default FreshInstallPage-text--default">
          Next
        </span>
        <img className="FreshInstallPage-nextArrow" src={path4} />
      </div>
    );
  };

  renderButton = (selectedTemperatureScale: TemperatureScale) => {
    const isCelsius = selectedTemperatureScale === TemperatureScale.Celsius;
    const isClicked = this.state.selectedTemperatureScale === selectedTemperatureScale;
    const unitLabel = isCelsius ? '°C' : '°F';

    const divClasses = classNames({"FreshInstallPage-celsiusButton" : isCelsius}, {
      "FreshInstallPage-button--active": isClicked,
      "FreshInstallPage-button--default": !isClicked
    });

    const textClasses = classNames(
      "FreshInstallPage-text--default",
      "FreshInstallPage-buttonText--default",
      { "FreshInstallPage-text--active": isClicked }
    );

    return (
      <div className={divClasses} onClick={() => this.handleButtonClick(selectedTemperatureScale) }>
        <span className={textClasses}>{unitLabel}</span>
      </div>
    );
  };

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
          {this.renderButton(TemperatureScale.Celsius)}
          {this.renderButton(TemperatureScale.Fahrenheit)}
        </div>

        {this.renderNextButton()}
      </div>
    );
  }
}
