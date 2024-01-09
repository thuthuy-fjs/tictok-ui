import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = request.get('/', {
            params: {
                q,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
