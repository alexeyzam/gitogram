import axios from "@/api/axios";

export const makeRequest = (
    {
        url,
        method = 'get',
        data = {},
        headers = {},
        ...userArguments
    }
) => axios({
    url,
    method,
    data,
    headers,
    userArguments,
})
