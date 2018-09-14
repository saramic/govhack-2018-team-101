import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import DataVisualization from './DataVisualization';
// following 3 lines should go in a setupEnzyme.js but need to `yarn run eject`
// to allow the overrides required in package.json
// "jest": {
//   "setupTestFrameworkScriptFile": "<rootDir>src/setupEnzyme.js"
// }
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
// END section for setup Enzyme.js

describe('DataVisualization', () => {
  it('should render correctly WITHOUT visualization image', () => {
    const output = shallow(
      <DataVisualization data={
        {
          name: 'The Data Name',
          link: 'http://data.source/link',
          hackerspace_id: '999',
        }
      }/>
    )
    expect(shallowToJson(output)).toMatchSnapshot();
  })
  it('should render correctly WITH visualization image', () => {
    const output = shallow(
      <DataVisualization data={
        {
          visualisation: 'the_image_url',
          name: 'The Data Name',
          link: 'http://data.source/link',
          hackerspace_id: '999',
        }
      }/>
    )
    expect(shallowToJson(output)).toMatchSnapshot();
  })
})
