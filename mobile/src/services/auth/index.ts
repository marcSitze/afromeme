import config from '../../config';
import { LoginDto, RegisterDto } from '../../types/auth';

export const login = async (data: LoginDto) => {
  console.log('Login service....')
  try {
    const result = await fetch(config.API + '/api/posts', {
      method: 'GET',
      // body: JSON.stringify(data),
    });
    console.log('result: ', result);
    return result;
  } catch (err) {
    console.error('err: ', err);
  }
};