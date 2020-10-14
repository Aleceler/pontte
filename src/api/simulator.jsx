import axios from 'axios'

const getSimulatorValues = async () => {
    const response = await axios.get("https://testfrontend.pontte.com.br", {
    });
    return response.data;
};

export default {
    getSimulatorValues,
};
  