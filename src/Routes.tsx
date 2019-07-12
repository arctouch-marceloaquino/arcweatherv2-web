import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import OnboardingPage from './pages/onboarding/OnboardingPage'
import OnboardingService from './services/OnboardingService'
import FreshInstallPage from "../src/pages/fresh_install/FreshInstallPage";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={getMainPage()} />
            <Route exact path='/fresh-install' component={FreshInstallPage} />
        </Switch>
    </HashRouter>
)

const getMainPage = () => {
    const onboardingService = new OnboardingService()
    return onboardingService.isOnboardingFinished() ? FreshInstallPage : OnboardingPage
}