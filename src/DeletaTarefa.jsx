import axios from 'axios';

const deletaTarefaID = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default deletaTarefaID;
