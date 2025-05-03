# LoaderQuark for React

<br/>

### Quark Loader

This quark is a simple loader plugin with adaptation for React.

Provides clean design and logic for usage with or without the React Suspension component.

<br/>

## Installation

```sh
npm install @quarks-js/loader --save
```

<br/>

## Setup
Install the package and use ```import``` statement in your application
```js
import { Loader } from "@quarks-js/loader"
```

<br/>

## Basic Usage

Your ```jsx|tsx``` file:

```jsx
import { Loader } from "@quarks-js/loader";
import { useState } from "react";

function Component() {
  const [loading, setLoading] = useState(false)
    
  //...
  
  // Perform some data loading, for example some api call
  useEffect(() => {
    setLoading(true) // Set loading to true in the beginning
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Do something with the data
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false)) // After the data is loaded, set loading to false
  }, [...])
  
  return (
    <>
      <Loader loading={loading} type={"spinner"} color={"#7842f5"}>
        <div>
          {/* ...Content to show after loading is done... */}
        </div>  
      </Loader>
    </>
  ) 
}
```

<br/>

## Docs

Full docs with more examples are coming soon, sorry for the inconvenience.

Source code at [GitHub Repository](https://github.com/SamuelSlavik/QuarksJS/tree/master/packages/loader)

<br/>

## Support

If you found this Quark useful, please support us by starring its GitHub repository.