import config from '../../config';

export const searchByTerm = async (token: string, term: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    myHeaders.append("Authorization", "Bearer " + token)
    const request = await fetch(`${config.API}/api/search/?term=${term}`, requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('searchByTerm: ', err);
  }
}