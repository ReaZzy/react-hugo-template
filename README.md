# Getting Started with React Hugo

![react-hugo](static/images/react-hugo.webp)

## Introduction

Simple react-hugo template with typescript and tailwindcss for your gorgeous projects.

## How to start

> ### Develop
> ```npm install```\
> ```npm run start:dev```
>
> ### Production
> ```npm install```\
> ```npm run build```\
> ```npm run start```


## Adding a `component` in Hugo

For adding react component into Hugo we only need to specify ```<component></component>``` tag with id prop (```id="pathToComponent"```)

`{{< rawhtml >}}`\
`<component id="MyComponent"></component>`\
`{{< /rawhtml >}}`

and render our React Component

Also, you can pass props and children into component\
`{{< rawhtml >}}`\
`<component id="MyComponent" prop="Hello world">123</component>`\
`{{< /rawhtml >}}`

