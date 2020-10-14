import * as api from '../../api';

const initialState = {
    simulatorList: '',
    currentValue: ''
};

const simulator = {
  state: initialState,
  reducers: {
    setSimulatorList(state, simulatorList) {
      return { ...state, simulatorList };
    },
    setCurrentValue(state, currentValue){
      return { ...state, currentValue };
    },
  },
  effects: (dispatch) => ({
    async getSimulatorList(){
        const response = await api.simulator.getSimulatorValues();
        dispatch.simulator.setSimulatorList(response)
    },
    async getCurrentValue(value) {
        await dispatch.simulator.setCurrentValue(value)
    },
  }),
};

export default simulator;

  