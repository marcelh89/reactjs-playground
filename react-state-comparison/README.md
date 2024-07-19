<!--
# react-state-examples old

These examples show some examples of different approaches to state-management with React Framework.
As a basis the ``` npx create-react-app ``` has been used.

Install dependencies with ``` yarn ```


You can find the examples within packages folder.
This project uses yarn3 workspaces.
See a list of all workspaces with ``` yarn workspaces list ```

State Examples are
- mobx (updated 07/2024) ``` yarn workspace mobx start  ```
- zustand ``` yarn workspace zustand start  ```
- redux ``` yarn workspace redux start  ```
- context (react) ``` yarn workspace context start  ```
- recoil ``` yarn workspace recoil start  ```
- jotai ``` yarn workspace jotai start  ```
-->

# react-state-examples

Install dependencies with ``` npm ```

You can find the examples within packages folder.
This project uses yarn3 workspaces.
See a list of all workspaces with ``` npm --workspaces list ```

State Examples are
- zustand ``` npm run start --workspace=jotai  ```  <!-- source https://tutorial.jotai.org/examples/todolist -->



## created this repository (using workspaces) with
`npm init`

## create new workspace with name "jotai"
`npm init -w ./packages/jotai`

## init app inside packages with typescript template
`npx create-react-app --template typescript .`

## install dependencies inside package
`npm install jotai --workspace=jotai`

