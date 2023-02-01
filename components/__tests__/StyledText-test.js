import * as React from 'react';
import renderer from 'react-test-renderer';

import { BarlowCondensedText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<BarlowCondensedText>Snapshot test!</BarlowCondensedText>).toJSON();

  expect(tree).toMatchSnapshot();
});
