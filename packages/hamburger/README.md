# @quarks-js/hamburger

### Quark Hamburger:
Simple React component plugin with typescript support.

<br/>

## Installation 

```shell
npm install @quarks-js/hamburger --save
```

<br/>

## Setup
Install the package and use ```import``` statement in your application
```tsx
import { Hamburger } from '@quarks-js/hamburger';
```

<br/>

## Basic Usage

Your ```jsx|tsx``` file:

```tsx
import { Hamburger } from '@quarks-js/hamburger';
import { useState } from "react";

function Component() {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div>
            {/* Basic usage require no props at all */}
            <Hamburger />

            {/* But you can for example provide your own state like this */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} />

            {/* Or change some of its props */}
            <Hamburger size={20} color={'#F356A9'} />
        </div>
    )
}
```




