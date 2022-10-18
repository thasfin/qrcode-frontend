import { api } from './api';

export const sendUrl = () => {
  api.post(
    `qrcode` /* <= Pode ter params */,
    {
      /* Seu Body */
    },
    {
      headers: {},
    }
  );
};
