import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import OnboardingPage from './pages/onboarding/OnboardingPage'
import OnboardingService from './services/OnboardingService'

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={getMainPage()} />
        </Switch>
    </HashRouter>
)

const getMainPage = () => {
    const onboardingService = new OnboardingService()
    return onboardingService.isOnboardingFinished() ? HomePage : OnboardingPage
}