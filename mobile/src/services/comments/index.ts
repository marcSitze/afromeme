import config from '../../config';
import {CommentDto} from '../../types/comments';
// var myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json');

export const createComment = async (token: string, payload: CommentDto) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    author: payload.author,
    message: payload.message,
    post: payload.post,
  });

  var requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
  };

  try {
    myHeaders.append('Authorization', 'Bearer ' + token);
    const request = await fetch(config.API + '/api/comments/', requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('CreateCommentService: ', err);
  }
};

export const getComments = async (token: string, post: string) => {
  try {
    var myHeaders = new Headers();
    console.log({"post": post, token});
    myHeaders.append('Authorization', 'Bearer ' + token);
    var requestOptions: any = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const request = await fetch(`${config.API}/api/comments/query/q?post=${post}`, requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('GetCommentsErrSer: ', err);
  }
};

