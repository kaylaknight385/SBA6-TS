//iggght lets handle errors...customly...

export class ApiError extends Error {
  constructor(message: string) {
  super(message);
  this.name= "APIERROR!"
  }
}


//functions handles errors and logs them. tea.
export function handleError(error: unknown): void {
  if (error instanceof ApiError) {
    console.error(`Damn...API ERROR: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error("uhhhh lol idk unknown error occured")
  }
}
//That whole block is for errors. If the error is a instance of a APIError then load ApiError message and so on...