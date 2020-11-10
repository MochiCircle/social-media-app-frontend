import axios from 'axios';

export const getCurrentUserInfo = async (input: string) => {
  const pid = "http://localhost:8080/MochiCircle/api/users/find/" + input;
  const response = await axios.get(pid);
  // document.getElementById('asd').value="asd";
  const text = JSON.stringify(response.data);
  return response.data;
};