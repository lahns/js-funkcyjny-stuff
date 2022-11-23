const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Udalo sie!");
    }, 5000);
  }).then(console.log);


const multipyAsync = (x,y) => new Promise((resolve, reject) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error("nie udalo sie");   
    }
    else{
        return resolve(x*y);
    }
});

multipyAsync(6,5)
    .then(console.log)
    .catch(console.error)

multipyAsync(6,2)
    .then(console.log)
    .catch(console.error)

multipyAsync(6,'witam')
    .then(console.log)
    .catch(console.error)
    
multipyAsync(7,2)
    .then(console.log)
    .catch(console.error)

const get = () => fetch('https://jsonplaceholder.typicode.com/posts')

get()
    .then(response => {
        if(response.status === 200){
            return response.json();
        }
        else{
            throw new Error("420")
        }
    })
    .then(posts => posts.forEach(({title, body}) => console.log('title: '+title+'\n', 'body: '+body)))
    .catch(console.error)