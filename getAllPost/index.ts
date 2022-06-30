import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const responseMessage = "This HTTP triggered function executed successfully.";
  context.res = {
    body: responseMessage
  };

};

export default httpTrigger;