# @quarks-js/button

<br/>

### Quark Button:
Simple React component plugin with typescript support.

Easily customizable. You can set your own preferences for color, background.

Comes in 2 variants: Basic and Accent with switched colors. 
But you can still customize it according to your needs as you want!

<br/>

## Installation 

```shell
npm install @quarks-js/button --save
```

<br/>

## Setup
Install the package and use ```import``` statement in your application
```tsx
import { Button } from '@quarks-js/button';
```

<br/>

## Basic Usage

Your ```jsx|tsx``` file:

```tsx
import { Button } from '@quarks-js/button';

function Component() {
    const handleClick = () => {...}
    
    return (
        <div>
            {/* Basic usage */}
            <Button onClick={handleClick}/>

            {/* For example change some props and customize as you want */}
            <Button color={'#FFFFFF'} background={'#000000'} />

            {/* Set accent to true if you wanna have more visible button */}
            <Button accent />
        </div>
    )
}
```

<br/>

## Docs 

Full docs with more examples are coming soon, sorry for the inconvenience.

Source code at [GitHub Repository](https://github.com/SamuelSlavik/QuarksJS/tree/master/packages/button)

<br/>

## Support

If you found this Quark useful, please support us by starring its GitHub repository.




