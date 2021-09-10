const axios = require("axios").default;

function getDirFiles(user, repo, tree_sha="main") {
  let url = `https://api.github.com/repos/${user}/${repo}/git/trees/${tree_sha}`;
}
