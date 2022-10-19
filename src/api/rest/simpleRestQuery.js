import axios from "axios";
export const simpleRequest = (
    {
        url,
        method = 'get',
        data = {},
        headers = {}
    }
) => axios({
    url,
    method,
    data,
    headers
})
