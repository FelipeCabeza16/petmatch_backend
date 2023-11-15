/**
 * Returns the current date in the format  October 13th 2023, 3:52:50 pm
 */

import moment from 'moment';

export const getCurrentDateMoment = () => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}