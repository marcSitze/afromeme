import config from '../../config';


export const getUserAccount = async (token: string, accountId: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    myHeaders.append("Authorization", "Bearer " + token)
    const request = await fetch(`${config.API}/api/accounts/${accountId ?? 1234}`, requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('GetUserAccountService: ', err);
  }
}

export const viewProfile = async (token: string, accountId: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    myHeaders.append("Authorization", "Bearer " + token)
    const request = await fetch(`${config.API}/api/accounts/query/q?_id=${accountId}`, requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('ViewProfileErr: ', err);
  }
}

export const getUsersAccounts = async (token: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    myHeaders.append("Authorization", "Bearer " + token)
    const request = await fetch(`${config.API}/api/accounts/`, requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('GetUsersAccountsService: ', err);
  }
}