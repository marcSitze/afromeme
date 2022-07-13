import config from '../../config';
import { LoginDto, RegisterDto } from '../../types/auth';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const login = async ({email, password}: LoginDto) => {
  console.log('Login service....')
  var raw = JSON.stringify({
    email,
    password
  });

  var requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const result = await fetch(config.API + '/api/users/login', requestOptions);
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('err: ', err);
  }
};


export const getUserAccount = async (userId: string) => {
  try {
    const request = await fetch(config.API + '/api/accounts/' + userId);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('GetUserAccountService: ', err);
  }
}

export const logoutUser = () => {
  return true;
}

export const register = async (payload: RegisterDto) => {
  console.log('Login service....')
  var raw = JSON.stringify(payload);

  var requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const result = await fetch(config.API + '/api/users', requestOptions);
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('Register err: ', err);
  }
}