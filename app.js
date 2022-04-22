const express = require("express");
const pug = require("pug");
const hljs = require("highlight.js");
const app = express();
const port = 8000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

// Index view
app.get("/", async (_, res) => {
  console.log("[DEBUG] Index");
  res.render("index");
});

// Repo view
app.get("/:user/:repo", function (req, res) {
  console.log("[DEBUG] Repo: " + req.params.user + "/" + req.params.repo);
  res.render("repo", {
    user: req.params.user,
    repo: req.params.repo,
    folders: [".config", ".github", "views"],
    files: [".gitignore", ".replit", "LICENSE", "README.md", "app.js", "package-lock.json", "package.json", "replix.nix"]
  });
});

// Codeview
app.get("/:user/:repo/blob/:branch/:file", function (req, res) {
  console.log("[DEBUG] Codeview " + req.params.user + "/" + req.params.repo + ": " + req.params.file);
  res.render("codeview", {
    user: req.params.user,
    repo: req.params.repo,
    branch: req.params.branch,
    file: {
      name: req.params.file,
      content: hljs.highlightAuto("if True:\n\tprint('this is a test statement')").value
    }
  });
});

app.listen(port, () => {
  console.log("Server is running")
});
