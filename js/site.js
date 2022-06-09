"use strict";
(function () {
    const URL = `https://api.github.com/users/s-banks/repos`
    fetch(URL, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // document.querySelector('#user').innerHTML = `${data['0']['actor'].login}`,
            //     document.querySelector('#last-push').innerHTML = `${data['0']['created_at']}`,
            //     document.querySelector('#repo').innerHTML = `${data['0']['repo'].name}`
        })
        .catch(error => console.error(error));


}())