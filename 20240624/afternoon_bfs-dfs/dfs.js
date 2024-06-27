const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

function dfs(graph, startNode) {
  const visited = {};
  const stack = [];

  let outputString = "";

  stack.push(startNode);
  visited[startNode] = true;
  
  while (stack.length > 0) {
      const currentNode = stack.pop();
      outputString += currentNode + " ";
      console.log(currentNode);
      for (let i = graph[currentNode].length - 1; i >= 0; i--) {
          const neighbor = graph[currentNode][i];
          if (!visited[neighbor]) {
              stack.push(neighbor);
              visited[neighbor] = true;
          }
      }
  }
  return outputString;
}

console.log(dfs(graph, "A"));;