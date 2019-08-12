const qs = require('querystringify');

const crudData = (method) => (url, data) => async(e) => {
  e.preventDefault();
  console.log(data); 

  const res = await fetch(url, {
    method,
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify(data)
  }).catch(e => {
    console.log(e);
  });

  const json = await res.json().catch(e => {
    console.log(e);
  });
  console.log(json);
}

export const postData = crudData('POST');
export const putData = crudData('PUT');
export const deleteData = crudData('DELETE');

