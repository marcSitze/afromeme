import config from '../../config';

export const getPosts = async (token: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token)

  var requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };


  try {
    const result = await fetch(config.API + '/api/posts', requestOptions);
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('GetPostsServicee: ', err);
  }
};

type PostType = {
  author: string;
  description: string;
  tags?: string;
  photo: any;
};

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const createPost = async (token: string, payload: PostType) => {

  try {
    const media: any = await createMedia(token, {
      author: payload.author,
      photo: payload.photo,
    });

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append("Authorization", "Bearer " + token)

    var raw = JSON.stringify({
      author: payload.author,
      description: payload.description,
      media: media.data._id,
      tags: payload.tags,
      tag: payload.tags,
    });

    var requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const tagsReq = await fetch(config.API + '/api/tags', requestOptions);
    const tagsRes = await tagsReq.json()
    const request = await fetch(config.API + '/api/posts', requestOptions);
    const result = await request.json();
    return result;
  } catch (err) {
    console.error('CreatePost: ', err);
  }
};

type mediaType = {
  author: string;
  photo: any;
  name?: string;
};

const createMedia = async (token: string, payload: mediaType) => {
  // myHeaders.append('Accept', 'multipart/form-data');
  // myHeaders.append('Content-Type', 'multipart/form-data');
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token)
  try {
    var formdata = new FormData();
    // formdata.append("photo", fileInput.files[0], "real-estate-6688945_1920.jpg");
    formdata.append('photo', payload.photo);
    formdata.append('author', payload.author);
    formdata.append('name', payload?.name?? 'John Doe');
    // console.log('input: ', payload.photo)
    var requestOptions: any = {
      method: 'POST',
      body: formdata,
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(config.API + '/api/media', requestOptions);
    const result = await request.json();
    return result;
  } catch (error) {
    console.log('error Media service', error);
  }
};


export const likePost = async (token: string, payload: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  // var raw = JSON.stringify({
  //   author: payload.author,
  //   description: payload.description,
  //   media: media.data._id,
  // });
  var requestOptions: any = {
    method: 'POST',
    // body: raw,
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const request = await fetch(config.API + '/api/posts/' + payload.post + '/like', requestOptions);
    const result = await request.json();
    return result;
  } catch (error) {
    console.error('LikeServiceErr: ', error);
  }
}