import axios from 'axios';

const buscaTarefas = async () => {
  try {
    const response = await axios.get('http://localhost:8080/tasks');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default buscaTarefas;
