const myFetch = (url, method = 'GET', body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status = 200) {
        resolve(res)
      } else {
        reject (new Error(`Ошибка загрузки ${url}, ${xhr.status}: ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => reject(new Error(`Ошибка загрузки ${url}, ${xhr.status}: ${xhr.statusText}`));
    xhr.send(body);
  })
};
