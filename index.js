//const formData = {
  //  name: " ",
    //email: " ",
//}

let name = "Steve"
let email = "steve@steve.com";

function submitData(name, email){
return fetch("http://localhost:3000/users",{

    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
    body:JSON.stringify({
        name: `${name}`,
        email: `${email}`,
    })
    })

    .then(resp => resp.json())
    .then(object => {
        console.log('New object ID:', object.id);
        let objectId = document.createElement('p');
        objectId.textContent = `New object ID: ${object.id}`;
        document.body.appendChild(objectId);
        return object;
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement); // Append the error message to the DOM
        console.error('Error:', error);
      });
    






};
