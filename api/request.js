


export const request = async (url, params = {}) => {
  
  try {
    const response = await fetch(url, params);

    if (response.status !== 200) {
      return response.text(error => {
        throw new Error(error);
      })
    }

    return response.json();
  } catch(err) {
    console.warn(`Failed fetch to url: ${url}`)
  }

}