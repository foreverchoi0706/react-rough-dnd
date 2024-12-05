# react-rough-dnd

The simple and easy react drag and drop library

https://www.npmjs.com/package/react-rough-dnd

## Install
```shell
npm install react-rough-dnd
```
## Usage
```typescript jsx
import React, { FC } from "react";
import { DnD } from "react-rough-dnd";

const Home: FC = () => {
  return (
    <main>
      <DnD.Container>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>          
      </DnD.Container>
    </main>
  );
};

export default Home;
```
## Props
| name          | type                                           |
|---------------|------------------------------------------------|
| draggable     | boolean , undefined                            |
| onDragAndDrop | (dragIndex: number, dropIndex: number) => void |
