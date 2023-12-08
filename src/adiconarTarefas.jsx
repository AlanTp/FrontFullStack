import axios from 'axios';

const adicionarTarefa = async (title, description, dueDate) => {
  const dados = {
    title: title,
    description: description,
    dueDate: dueDate
  };

  console.log(dados);

  try {
    const response = await axios.post('http://localhost:8080/tasks', dados);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default adicionarTarefa;
