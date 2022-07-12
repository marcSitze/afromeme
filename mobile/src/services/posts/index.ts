import config from '../../config';

export const getPosts = async () => {
  console.log('getPostsService...');
  try {
    const result = await fetch(config.API + '/api/posts');
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('GetPostsServicee: ', err);
  }
};

type PostType = {
  author: string;
  description: string;
  photo: any;
};

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const createPost = async (payload: PostType) => {
  try {
    console.log('payloadSe: ', payload);
    const media: any = await createMedia({
      author: payload.author,
      photo: payload.photo,
    });
    console.log('medIaS: ', media);

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      author: payload.author,
      description: payload.description,
      media: media.data._id,
    });

    var requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

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

const createMedia = async (payload: mediaType) => {
  // myHeaders.append('Accept', 'multipart/form-data');
  // myHeaders.append('Content-Type', 'multipart/form-data');
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
      redirect: 'follow',
    };

    const request = await fetch(config.API + '/api/media', requestOptions);
    const result = await request.json();
    console.log('Result: ', result);
    return result;
  } catch (error) {
    console.log('error Media service', error);
  }
};
