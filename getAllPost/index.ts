import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/post.service";
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const response = await postService.getAllPost()
  context.res = {
    body: response
  };

};

export default httpTrigger;