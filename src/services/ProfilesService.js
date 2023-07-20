import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
    async getProfile(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('profile', res.data)
        const newProfile = new Profile(res.data)
        AppState.activeProfile = newProfile
    }

    async editAccount(formData) {
        const res = await api.put('/account', formData)
        logger.log('account edited?', res.data)
        let updatedAccount = new Profile(res.data)
        AppState.account = updatedAccount
    }
}
export const profilesService = new ProfilesService()