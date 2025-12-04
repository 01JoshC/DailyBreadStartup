import React from 'react';

import { Messages_c } from './messages_c';
import { Read_c } from './read_c';

export function Read(props) {
  return (
    <main>
      <Messages_c userName={props.userName} />
      <Read_c userName={props.userName} />
    </main>
  );
}
