import { Suspense } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter } from 'react-router-dom';

import { ReturnComponentType } from 'shared/types/ReturnComponentType';

export const withRouter = (component: () => ReturnComponentType) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>{component()}</Suspense>
    </BrowserRouter>
  );
