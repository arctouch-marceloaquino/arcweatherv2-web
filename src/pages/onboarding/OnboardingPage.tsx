import React from "react";
import { Redirect } from "react-router-dom";
import Carousel from "nuka-carousel";

import "./OnboardingPage.css";
import ArrowToRightIcon from "../../images/arrow-right.svg";
import OnBoardingImage01 from "../../images/onboarding-image-01.png";
import OnBoardingImage02 from "../../images/onboarding-image-02.png";
import OnBoardingImage03 from "../../images/onboarding-image-03.png";

import OnboardingService from "../../services/OnboardingService";

type Props = {};

type State = {
  currentIndexCarousel: number;
  shouldFinishOnboarding: boolean;
};

type OnboardingStep = {
  title: string;
  description: string;
  imageSrc: string;
};

const OnboardingSteps: OnboardingStep[] = [
  {
    title: "Welcome to ArcWeather",
    description:
      "Your new favorite weather app, with all the features you need to have the best information available.",
    imageSrc: OnBoardingImage01
  },
  {
    title: "Follow different places",
    description: "You can easily add as many different locations as you wish.",
    imageSrc: OnBoardingImage02
  },
  {
    title: "Never forget your umbrella",
    description:
      "Accurate weather forecast that you can trust to never get caught in the rain again.",
    imageSrc: OnBoardingImage03
  }
];

export default class OnboardingPage extends React.Component<Props, State> {
  onboardingService: OnboardingService;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentIndexCarousel: 0,
      shouldFinishOnboarding: false
    };
    this.onboardingService = new OnboardingService();
  }

  setCurrentIndex(currentIndexCarousel: number) {
    this.setState({ currentIndexCarousel });
  }

  isInTheLastStep() {
    return this.state.currentIndexCarousel === OnboardingSteps.length - 1;
  }

  moveToNextStep() {
    if (this.isInTheLastStep()) {
      this.finishOnboarding();
    } else {
      this.setState({
        currentIndexCarousel: this.state.currentIndexCarousel + 1
      });
    }
  }

  finishOnboarding() {
    this.onboardingService.setOnboardingFinished();
    this.setState({ shouldFinishOnboarding: true });
  }

  renderOnboardingSteps() {
    return OnboardingSteps.map((step, index) => (
      <img
        key={index}
        src={step.imageSrc}
        alt={step.title}
        title={step.title}
      />
    ));
  }

  renderStepText() {
    return (
      <div className="OnboardingPage-content">
        <span className="OnboardingPage-textContent OnboardingPage-stepTitle">
          {OnboardingSteps[this.state.currentIndexCarousel].title}
        </span>
        <span className="OnboardingPage-textContent OnboardingPage-stepDescription">
          {OnboardingSteps[this.state.currentIndexCarousel].description}
        </span>
      </div>
    );
  }

  renderNextButton() {
    let nextButtonText = "Next";

    if (this.isInTheLastStep()) nextButtonText = "Done";

    return (
      <div
        className="OnboardingPage-content OnboardingPage-content--flex"
        onClick={() => this.moveToNextStep()}
      >
        <span className="OnboardingPage-textContent OnboardingPage-textButton">
          {nextButtonText}
        </span>
        <img
          className="OnboardingPage-arrowToRight"
          src={ArrowToRightIcon}
          alt="Arrow to Right"
        />
      </div>
    );
  }

  renderRedirect() {
    if (this.state.shouldFinishOnboarding) {
      return <Redirect to="/fresh-install" />;
    }
  }

  render() {
    return (
      <div className="OnboardingPage">
        {this.renderRedirect()}

        <span
          className="OnboardingPage-textContent OnboardingPage-skipButton"
          onClick={() => this.finishOnboarding()}
        >
          Skip
        </span>
        <Carousel
          className="OnboardingPage-carousel"
          renderCenterRightControls={null}
          renderCenterLeftControls={null}
          slideIndex={this.state.currentIndexCarousel}
          afterSlide={currentIndexCarousel =>
            this.setCurrentIndex(currentIndexCarousel)
          }
        >
          {this.renderOnboardingSteps()}
        </Carousel>

        {this.renderStepText()}

        {this.renderNextButton()}
      </div>
    );
  }
}
