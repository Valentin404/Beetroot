// https://swapi.dev/documentation

// #region Setup
const URL = "http://swapi.dev/api/";
const output = document.getElementById("output");
const spinner = document.getElementById('spinner');

// output.innerHTML = "Loading ...";
// //#endregion
//  fetch(URL + 'films')
// .then( r => r.json())
// // .then(response=>{console.log(response)})
// .then(({results: films})=> {
//     output.innerHTML = getTitles(films)
// })


// function getTitles(films) {
// return films.sort((a,b)=> a.episode_id - b.episode_id)
// .map(film => `<div>${film.episode_id} -  ${film.title}</div>`)
// .join('')  //все елементы масива в один

// }




// const URL = "http://swapi.dev/api/";
// const output = document.getElementById("output");
// const spinner = document.getElementById('spinner');

// output.innerHTML = "Loading ...";
// //#endregion
// fetch(URL + 'films')
// .then(response => {
//     if(!response.ok) {
//         throw Error('doasdpasdpasod respon')
//     }
//     return response.json()
// })
// // .then( r => r.json())
// // .then(response=>{console.log(response)})
// .then(({results: films})=> {
//     output.innerHTML = getTitles(films)
// })
// .catch(error => {
//     console.log(error);
//     output.textContent = "Opps!"
// })
// .finally(()=>{
//     spinner.remove();
// })


// function getTitles(films) {
// return films
// .sort((a,b)=> a.episode_id - b.episode_id)
// .map(film => `<div>${film.episode_id} -  ${film.title}</div>`)
// .join('')  //все елементы масива в один

// }


////////////
//!
function queryApi(endepoint) {
    return fetch(URL + endepoint)
    .then(response => {
        return response.ok ? response.json() : Promise.reject('Unsdasdas rereer')
    })
}


// queryApi('films')
// .then(({results: films}) => {
//     queryApi('planets')
//     .then(({planets}) =>{
//         output.innerHTML = `Films ${films.length},  Planet ${planets.length}`;

//     })
//     .finally(()=>{
//         spinner.remove();
//     })
// })


// Promise.all([
//     queryApi('films'),
//     queryApi('plamets')
// ])
///////////////

//?
async function main() {
    const {results: films} = await queryApi('films');
    const {results: planets} = await queryApi('planets');

    output.innerHTML = `Films ${films.length},  Planet ${planets.length}`;
}
main()   
.finally(()=>{
    spinner.remove();
})

/////////

// async function main() {
//     try{
// const  [{results: films},  {results: planets}] = await Promise.all([
//     queryApi('films'),
//     queryApi('planets')

// ])

//     output.innerHTML = `Films ${films.length},  Planet ${planets.length}`;
// } catch (error)  {
// console.log(error)
// output.textContent = 'Opps'
// }}
// main()   
// .finally(()=>{
//     spinner.remove();
// })