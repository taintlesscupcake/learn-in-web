import * as child_process from "child_process";
import * as fs from "fs";

export class Runner {
  type: string;
  input: Array<string>;
  output: Array<string> = [];
  time: Date = new Date();
  constructor(req: any) {
    this.type = req.body.type;
    this.input = req.body.input;
    fs.writeFileSync("tmp." + this.type, req.body.code);
  }
  run() {
    switch (this.type) {
      case "c": {
        this.c();
      }
      case "c++": {
        this.cpp();
      }
      case "js": {
        this.js();
      }
      case "go": {
        this.go();
      }
      case "ts": {
        this.ts();
      }
    }
  }
  c() {
    if ((this.input = [])) {
      const test = child_process.spawnSync("gcc", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stderr);
      const result = child_process.spawnSync("~/OSS/main/a.out", {
        encoding: "utf8",
        shell: true,
      });
      console.log(result.stdout);
      this.output.push(fix(result.stdout));
    }
    for (let ip of this.input) {
      const test = child_process.spawnSync("gcc", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stderr);
      const result = child_process.spawnSync("~/OSS/main/a.out", {
        encoding: "utf8",
        shell: true,
        input: ip,
      });
      console.log(result.stdout);
      this.output.push(fix(result.stdout));
    }
  }
  cpp() {
    if (this.input = []) {
      const test = child_process.spawnSync("gcc", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stderr);
      const result = child_process.spawnSync("~/OSS/main/a.out", {
        encoding: "utf8",
        shell: true,
      });
      console.log(result.stdout);
      this.output.push(fix(result.stdout));
    }
    for (let ip of this.input) {
      const test = child_process.spawnSync("gcc", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stderr);
      const result = child_process.spawnSync("~/OSS/main/a.out", {
        encoding: "utf8",
        shell: true,
        input: ip,
      });
      console.log(result.stdout);
      this.output.push(fix(result.stdout));
    }
  }
  js() {
    if (this.input = []) {
      const test = child_process.spawnSync("node", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
    for (let ip of this.input) {
      const test = child_process.spawnSync("node", ["~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
        input: ip,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
  }
  go() {
    if (this.input = []) {
      const test = child_process.spawnSync("go", ["run", "~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
    for (let ip of this.input) {
      const test = child_process.spawnSync("go", ["run", "~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
        input: ip,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
  }
  ts() {
    if (this.input = []) {
      const test = child_process.spawnSync("ts-node", ["run", "~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
    for (let ip of this.input) {
      const test = child_process.spawnSync("ts-node", ["run", "~/OSS/main/tmp.c"], {
        encoding: "utf8",
        shell: true,
        input: ip,
      });
      console.log(test.stdout);
      this.output.push(fix(test.stdout));
    }
  }
}

const fix = (a: any): string => {
  if (typeof a === "string") {
    return a;
  }
  return "";
};
