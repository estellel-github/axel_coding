export const logServerMessage = (message: string): void => {
  console.log(new Date().toISOString() + "|" + message);
}