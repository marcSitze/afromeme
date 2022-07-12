import config from "../../config";
import image from '../../assets/images/meme1.jpg';

export const getPosts = async () => {
  console.log('getPostsService...');
  try {
    const result = await fetch(config.API + '/api/posts');
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('GetPostsServicee: ', err);
  }
}

type PostType = {
  author: string;
  description: string;
  photo: any;
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const createPost = async (payload: any) => {
const img = 'data:image/jpeg;base64,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'

  try {
    console.log('payloadSe: ', payload)
    const media = await createMedia({
      author: payload.author,
      photo: img,
    });
    console.log('medIaS: ', media);
  } catch (err) {
    console.error('CreatePost: ', err);
  }
}

type mediaType = {
  author: string;
  photo: any;
  name?: string
};
const img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bhaktiphotos.com%2Fmahadev-images%2F&psig=AOvVaw194iaFzQWOVJIXC8wCYlPH&ust=1653899797077000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDM0YWnhPgCFQAAAAAdAAAAABAD';

const createMedia = async (payload: mediaType) => {
  myHeaders.append('Accept', 'multipart/form-data');
  myHeaders.append('Content-Type', 'multipart/form-data');

  const formData = new FormData();
  formData.append('author', "623ec37dd65ad319c55093cf");
  formData.append('photo', img);
  formData.append('name', 'some name');
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8'
    },
    body: formData
  };

  console.log('createMedia: ', payload)
  try {
    const media = await fetch(config.API + '/api/media', requestOptions);
    const result = await media.json();
    return result;
  } catch (err) {
    console.error('CreateMedia: ', err);
  }
}
  
  
// export const createPost = () => {
//   const formdata = new FormData();
//   // formdata.append("photo", img, "file");
//   formdata.append("author", "623ec37dd65ad319c55093cf");
//   formdata.append("name", "this is the name");
  
//   var requestOptions = {
//     method: 'POST',
//     body: JSON.stringify({
//       author: '623ec37dd65ad319c55093cf',
//       name: 'sfsdfdsf'
//     }),
//     redirect: 'follow'
//   };
  
//   fetch("http://localhost:5000/api/media", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }