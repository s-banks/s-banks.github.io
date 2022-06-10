"use strict";
(function () {
    const URL = `https://api.github.com/users/s-banks/repos`
    fetch(URL, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}})
        .then((resp) => resp.json())
        .then((repos) => {
            buildRepos(repos);
        })
        .catch(error => console.error(error));


    function buildRepos(repos) {
        $("#repos").empty()
        repos.forEach(repo => {
            let localTimeandDate = new Date(`${repo.pushed_at}`).toLocaleString();
            let datePushed = localTimeandDate.slice(0, -12)
                $("#repos").append(`
         <tr>
             <th scope="row">1</th>
             <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
             <td>${repo.language}</td>
             <td>${repo.description}</td>
             <td>${datePushed}</td>
         </tr>`)
        })
    }







}())