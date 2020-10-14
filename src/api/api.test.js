import * as api from './index.jsx';

test('test api request', () => {
    return api.simulator.getSimulatorValues().then(res => {
      expect(res.prazos[0]).toBe(60);
    });
});
