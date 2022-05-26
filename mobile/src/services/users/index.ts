import config from '../../config';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getUserAccount = async (token: string) => {
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    myHeaders.append("Authorization", "Bearer " + token)
    const request = await fetch(config.API + '/api/accounts/' + '123', requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('GetUserAccountService: ', err);
  }
}