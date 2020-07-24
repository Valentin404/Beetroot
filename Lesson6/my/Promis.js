const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});

promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

///////////
function getFirstUser () { 
    return getUsers (). then (function (users) { 
        return users [0] .name; 
    }); 
}

// поймать ошибки из цепочки  catch
function getFirstUser () { 
    return getUsers (). then (function (users) { 
        return users [0] .name; 
    }). catch (function (err) { 
        return { 
          name: 'default user' 
        }; 
    }); 
}

// Catch///////////////
async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}
//   возвращает a Promise, 

function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v)  // returns a promise
      }) 
  }

//   асинхронной функцией

async function getProcessedData(url) {
    let v;
    try {
      v = await downloadData(url)
    } catch(e) {
      v = await downloadFallbackData(url)
    }
    return processDataInWorker(v)
  }


//////////////
let foo = await getFoo (); 
let bar = await getBar ();

let [foo, bar] = await * [getFoo (), getBar ()]; //very bad

let [foo, bar] = await Promise.all ([getFoo (), getBar ()]);

//! ///////////        //!

function getFirstUser (callback) { 
    return getUsers (). then (function (users) { 
        return callback (null, users [0] .name); 
    }). catch (function (err) { 
        return callback (err); 
    }); 
}
//?//?
function getFirstUser (callback) { 
    return getUsers (). then (function (users) { 
        return users [0] .name; 
    }). nodeify (callback); 
}

//?
function callbackToPromise(method, ...args) {
    return new Promise(function(resolve, reject) {
        return method(...args, function(err, result) {
            return err ? reject(err) : resolve(result);
        });
    });
}

//
async function getFirstUser() {
    let users = await callbackToPromise(getUsers);
    return users[0].name;
}