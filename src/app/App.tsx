import { withProviders } from './providers';

import { ReturnComponentType } from 'shared/types/ReturnComponentType';

const App: () => ReturnComponentType = () => {
  return <div />;
};

export default withProviders(App);
