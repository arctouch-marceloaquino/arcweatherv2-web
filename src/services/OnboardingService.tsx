const ONBOARDING_STORAGE_KEY = "onboarding"

export default class OnboardingService {
    public setOnboardingFinished() {
        localStorage.setItem(ONBOARDING_STORAGE_KEY, 'done')
    }
    public isOnboardingFinished() {
        return !!localStorage.getItem(ONBOARDING_STORAGE_KEY)
    }
}