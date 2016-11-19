
/* eslint-env browser*/
import axios from 'axios';

const uploadFile = function uploadFile(file, signedRequest, url) {
  axios.put(signedRequest, file)
  .then(() => {
    // assign expected url to profile image
  })
  .catch((err) => {
    console.error(err);
  });
};

const getSignedRequest = function getSignedRequest(obj) {
  axios('http://localhost:3000/sign-s3', {
    params: obj,
  })
  .then((res) => {
    uploadFile('../assets/theBoot.png', res.data.signedRequest, res.data.url);
  })
  .catch((err) => { console.error('error in getSignedRequest', err); });
};

export default getSignedRequest;
