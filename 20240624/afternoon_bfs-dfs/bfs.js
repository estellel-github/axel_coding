const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

function bfs(graph, startNode) {
  const visited = {};
  const queue = [];
  let outputString = "";

  queue.push(startNode);
  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);
    outputString += currentNode + " ";

    for (const neighbor of graph[currentNode]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
  return outputString;
}

console.log(bfs(graph, "A"));