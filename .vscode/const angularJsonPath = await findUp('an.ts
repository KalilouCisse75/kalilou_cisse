const angularJsonPath = await findUp('angular.json', { cwd: projectRoot });
  125 |     if (!angularJsonPath) {
> 126 |         throw new Error(`Could not find angular.json. Looked in ${projectRoot} and up.`);
      |               ^
  127 |     }
  128 |     const angularJson = await fs.readFile(angularJsonPath, 'utf8');
  129 |     return JSON.parse(angularJson);
  130 | }
  