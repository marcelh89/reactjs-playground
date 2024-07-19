# react-state-examples (updated 07/2024)

Install dependencies with ``` npm ```

You can find the examples within packages folder.
This project uses yarn3 workspaces.
See a list of all workspaces with ``` npm --workspaces list ```

State Examples are
- jotai ``` npm run start --workspace=jotai  ```
- jotai-typescript ``` npm run start --workspace=jotai-typescript  ```
- mobx ``` npm run start --workspace=mobx  ```
- 


## created this repository (using workspaces) with
`npm init`

## create new workspace with name "jotai"
`npm init -w ./packages/jotai`

## init app inside packages with typescript template
`npx create-react-app --template typescript .`

## install dependencies inside package
`npm install jotai --workspace=jotai`

