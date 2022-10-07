import axios from "@/api/axios";

export const makeRequest = (
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
