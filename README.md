# react-type-count
Input restriction for textarea elements. 

## Usage
```javascript
import React from 'react';
import TypeCount from 'react-type-count';

export default class Form extends React.Component {
    render() {
        return (
            <form>
                <TypeCount max={100} showAt={15} warnAt={5} />
            </form>
        );  
    }
}
```
