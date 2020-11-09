export const getAllUsers = async () => {
    const response = await fetch("http://localhost:8080/users.json");
    const json = await response.json();
    return json;
}

//you'll then create a state for the pizzas, then have a second 
// async function to populate the state using ^this function. 