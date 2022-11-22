import moment from 'moment';

export const dateFormat = (date: string) => moment(date).format('YYYY-MM-DD HH:mm');
