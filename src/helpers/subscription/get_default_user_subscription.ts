/**
 * Get default user subscription
 */

import { subscription } from "../../models/init-models";

export const getDefaultUserSubscription = async (): Promise<subscription> => {

    try {
        const defaultSubscription = await subscription.findOne({
            where: {
                subscription: 'Freemium'
            }
        })

        return defaultSubscription;
    
    }catch(error) {
        // Throw error
        return null;
    }

}