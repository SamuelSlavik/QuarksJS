# LoaderQuark for React

This quark is a simple loader plugin with adaptation for React.

<br/>

## Installation

```sh
npm install @quarks-js/loader --save
```

<br/>

## Setup
AnyComponent.jsx
```js
import { Loader } from "@quarks-js/loader"
```

<br/>

## Basic Usage
AnyComponent.jsx
```jsx
import React from "react"
import { Loader } from "@quarks-js/loader"

const AnyComponent = () => {
  const [loading, setLoading] = React.useState(false)
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
  }, [])
  
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

export default AnyComponent
```

<br/>

[//]: # (## DOCS)

[//]: # (Full docs at [https://www.quarksjs.com/library/loader-quark-react/getting-started]&#40;https://www.quarksjs.com/library/loader-quark-react/getting-started&#41;.)

[//]: # ()
[//]: # (Source code at [https://github.com/SamuelSlavik/LoaderQuarkReact]&#40;https://github.com/SamuelSlavik/LoaderQuarkReact&#41;)

[//]: # ()
[//]: # (## SUPPORT)

[//]: # (Please support us by starring the repository or donate at [https://www.quarksjs.com/donate]&#40;https://www.quarksjs.com/donate&#41; to help us maintain the project and cover hosting expenses.)