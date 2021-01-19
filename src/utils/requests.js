export const Post = async (url, body, additionalHeaders={}, isReturnJson=false) => {
  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    ...additionalHeaders,
  }

  // make request
  try {
    const response = await fetch(
      url,
      {
        method      : 'POST',
        credentials : 'include',
        mode        : 'cors',
        headers     : headers,
        body        : JSON.stringify(body),
      }
    );
    return isReturnJson ? await response.json(): response;
  } catch (error) {
    console.log('ERROR POST: ', error);
    console.log('url: ', url);
    console.log('headers: ', headers);
    console.log('body: ', body);
    console.error(error);
  }
}

export const register = async (url, body) => {
  const res = await Post(url, body)
  console.log('the register res', res);
};

export const login = async (url, body) => {
  const headers = {
    // Authorization: `JWT ${JWT}`,
    // 'X-CSRFToken': `${getCookieByKey("csrftoken")}`,
  };
  const res = await Post(url, body)
  console.log('the login res', res);
};