## Azure Function NodeJs

### Prerequisites:
- NodeJs
- Install the Azure Functions Core Tools
- Quick Creating a New Function Project

#### Install the Azure Functions Core Tools

1. Install the Microsoft package repository GPG key, to validate package integrity:

```Bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
```

2. Set up the APT source list before doing an APT update:

```Bash
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-$(lsb_release -cs)-prod $(lsb_release -cs) main" > /etc/apt/sources.list.d/dotnetdev.list'
```

3. APT Source Update:

```Bash
sudo apt update
```
4. Install the Core Tools package:

```Bash
sudo apt install azure-functions-core-tools-4
```
5. Changing Core Tools versions:

```Bash
npm install -g azure-functions-core-tools@3 --unsafe-perm true
```

##### Create Local Function Project

- It's creating a default javascript project
```
func init node-azure-api
```

- with Javascript,
```
func init node-azure-api --javascript
```

- with Typescript
```
func init node-azure-api --typescript
```

To create a TypeScript function app project using Core Tools, you must specify the TypeScript language option when you create your function app. You can do this in one of the following ways:

- Run the `func init` command, select `node` as your language stack, and then select typescript.

- Run the `func init --worker-runtime typescript` command.

##### Create a Function

```
func new
```

Specify the function name and template in the func new command.

Ex, uses the `--template` option to create an HTTP trigger named `createUser`:

```
func new --template "Http Trigger" --name createUser
```

It is for Blob Trigger
```
func new --template "Azure Blob Storage trigger" --name update-pro
```


Ex, creates a Queue Storage trigger named MyQueueTrigger:

```
func new --template "Azure Queue Storage Trigger" --name MyQueueTrigger
```

##### Run Function App Locally

- JavaScript
    ```
   func start
    ```

- TypeScript
    ```
    npm install
    npm start
    ```
##### Run Function in Production

```
npm run build:production
```

##### Install All Extensions

```
func extensions install
```

##### Install Specific Extensions

```
func extensions install --package <package-name>
```
###### ---------------------------------------------------------------------

#### Quick Creating a New Function Project

```
func init node-azure-api --typescript
```

Then Click on `Azure Icon` in the VSCode -> And Click `WORKSPACE`

![Screenshot](/createFunction.png)

- If select `Create Function`

    THEN Select `Template` eg, `HTTP Trigger`
    THEN Give `Function Name` eg, `createPost`
    THEN Select `Authorization Level` eg, `Anonymous`

    THEN Successfully created http function.

- If select `Create Http Function`

    THEN Give `Function Name` eg, `createPost`
    THEN Successfully created http function.

### Install Packages

```
npm install
```

### Run Application

```
npm start
```

### Result

![Screenshot](/result.png)# azure-functions-nodejs
