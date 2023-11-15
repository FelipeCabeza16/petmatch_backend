/**
 * Get default user role
 */

import { role } from "../../models/init-models";

export const getDefaultUserRole = async (): Promise<role> => {


    try {
        const defaultRole = await role.findOne({
            where: {
                role: 'USER'
            }
        })
    
        return defaultRole;
            
    } catch (error) {
        // Throw error
        return null;        
    }

}