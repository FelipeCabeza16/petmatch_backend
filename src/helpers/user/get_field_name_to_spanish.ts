/**
 * @param {string} field value of the field for user model
 * @returns
 */
export const getFieldNameToSpanish = (field: string) => {

    console.log(field)
    switch (field) {
        case 'name':
            return 'nombres'
        case 'last_name':
            return 'apellidos'
        case 'phone':
            return 'teléfono'
        case 'email':
            return 'email'
        case 'password':
            return 'contraseña'
        case 'document': 
            return 'documento'
        default:
            return 'campo'
    }

}