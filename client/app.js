async function getData() {
    // fetch("http://localhost:4000/api/user", {
    //     credentials: 'include'
    // }).then(data => {
    //     document.getElementById('info').innerHTML = JSON.stringify(data);
    // })



    axios.get("http://localhost:4000/api/user", {
        withCredentials: true
    }).then(data => { document.getElementById('info').innerHTML = JSON.stringify(data); })
        .catch(err => console.log)

    // try {
    //     const data = await axios.get("http://localhost:4000/api/user", {
    //         withCredentials: true,
    //     });
    //     console.log("got the data", data);
    //     document.getElementById("info").innerHTML = JSON.stringify(data);
    // } catch (e) {
    //     console.error(e);
    // }
}
