const BASE_URL =
    'http://103.151.63.87:8006';  

async function requestAPI(
    endpoint,
    method = 'GET',
    bodyData = null
) {

    const token =
        localStorage.getItem(
            'access_token'
        );

    const headers = {
        'Content-Type':
            'application/json'
    };

    if (token) {

        headers[
            'Authorization'
        ] = `Bearer ${token}`;

    }

    console.log(
        headers
    );

    const config = {
        method,
        headers
    };

    if (bodyData) {

        config.body =
            JSON.stringify(
                bodyData
            );

    }

    const response =
        await fetch(
            `${BASE_URL}${endpoint}`,
            config
        );

    console.log('Endpoint:', endpoint);
    console.log('Status:', response.status);   

    if (
        response.status === 401
    ) {

        console.log('401 dari endpoint:', endpoint);

        localStorage.clear();

        window.location.hash =
            '#login';
    }

    return response;

}