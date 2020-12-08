const myFetch = (url, method = 'GET', body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => resolve(res);
    xhr.onerror = () => reject(new Error(`Ошибка загрузки ${url}`));
    xhr.send(body);
  })
};
