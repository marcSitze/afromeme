import makeTodo from "./todo.entity";

export default function makeTodosEndpointHandler({ todosRepository }: any) {
  return async function handle(httpRequest: any) {
    switch (httpRequest.method) {
      case "POST":
        console.log('Post called')
        return createTodoService(httpRequest);

      case "GET":
        console.log('get service');
        return getTodosService(httpRequest);
      default:
        throw new Error("Unhandled http request");
    }
  };

  async function createTodoService(httpRequest: any) {
    const todoInfo = httpRequest.body;
    console.log('httpRequestService: ', httpRequest);
    if (!todoInfo) {
      throw new Error("enter valid informations");
    }

    try {
      const todo = makeTodo(todoInfo);
      const result = await todosRepository.add(todo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        data: JSON.stringify(result),
      };
    } catch (error) {
      throw new Error("Unable to create todo, service");
    }
  }

  async function getTodosService(httpRequest: any) {
    try {
      const todos = await todosRepository.getTodos();
    } catch (error) {
      throw new Error("Unable to create todo, service");
    }
  }
}
