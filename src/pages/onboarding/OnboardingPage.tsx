import React from 'react';
import Carousel from "nuka-carousel";

import "./OnboardingPage.css"
import ArrowToRightIcon from "../../images/path4.svg";

import OnboardingService from '../../services/OnboardingService'

type Props = {};

type State = {
    currentIndexCarousel: number
}

type OnboardingStep = {
    title: string,
    description: string,
    imageSrc: string
}

const OnboardingSteps: OnboardingStep[] = [
    {
        title: 'Welcome to ArcWeather',
        description: 'Your new favorite weather app, with all the features you need to have the best information available.',
        imageSrc: 'assets/onboarding-image-01.png'
    },
    {
        title: 'Follow different places',
        description: 'You can easily add as many different locations as you wish.',
        imageSrc: 'assets/onboarding-image-02.png'
    },
    {
        title: 'Never forget your umbrella',
        description: 'Accurate weather forecast that you can trust to never get caught in the rain again.',
        imageSrc: 'assets/onboarding-image-03.png'
    }
]

export default class OnboardingPage extends React.Component<Props, State> {

    onboardingService: OnboardingService

    constructor(props: Props) {
        super(props)
        this.moveToNextStep = this.moveToNextStep.bind(this)
        this.finishOnboarding = this.finishOnboarding.bind(this)
        this.onboardingService = new OnboardingService()
    }

    state = {
        currentIndexCarousel: 0
    }

    moveToNextStep() {
        if (this.state.currentIndexCarousel < (OnboardingSteps.length - 1)) {
            this.setState({
                currentIndexCarousel: this.state.currentIndexCarousel + 1
            })
        } else {
            this.finishOnboarding()
        }
    }

    finishOnboarding() {
        this.onboardingService.setOnboardingFinished()
        //TODO: Go to the Fresh Install Page
    }

    renderOnboardingSteps(): JSX.Element[] {
        return OnboardingSteps.map((step, index) => (
            <img key={index}
                src={step.imageSrc}
                alt={step.title}
                title={step.title}
            />
        ))
    }

    renderStepText(): React.ReactNode {
        return (
            <div className="OnboardingPage-content">
                <span className="OnboardingPage-stepTitle">{OnboardingSteps[this.state.currentIndexCarousel].title}</span>
                <span className="OnboardingPage-stepDescription">{OnboardingSteps[this.state.currentIndexCarousel].description}</span>
            </div>
        )
    }

    renderNextButton(): React.ReactNode {

        let nextButtonText = "Next"

        if (this.state.currentIndexCarousel === (OnboardingSteps.length - 1))
            nextButtonText = "Done"

        return (
            <div className="OnboardingPage-content OnboardingPage-content--flex" onClick={this.moveToNextStep} >
                <span className="OnboardingPage-text">
                    {nextButtonText}
                </span>
                <img className="OnboardingPage-arrowToRight" src={ArrowToRightIcon} alt="Arrow to Right"></img>
            </div>
        )
    }

    render() {
        return (<div className="OnboardingPage">
            <span className="OnboardingPage-skipButton" onClick={this.finishOnboarding}>Skip</span>
            <Carousel
                className="OnboardingPage-carousel"
                renderCenterRightControls={null}
                renderCenterLeftControls={null}
                slideIndex={this.state.currentIndexCarousel}
                afterSlide={currentIndexCarousel => this.setState({ currentIndexCarousel })}
            >
                {this.renderOnboardingSteps()}
            </Carousel>

            {this.renderStepText()}

            {this.renderNextButton()}
        </div>);
    }

}