"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
function getPath(base, file) {
    const cpath = path_1.default.join(__dirname, `${base}${file}`);
    console.log(cpath);
    return cpath;
}
const ignoredFolder = [];
async function start() {
    async function sink(newPath, el) {
        try {
            const pathEl = {
                title: el,
                files: [],
                children: [],
                hasSidebar: false,
                containsReadme: false
            };
            const pathContent = await fs_1.promises.readdir(newPath);
            const hasIgnore = pathContent.find((e) => {
                const ignore = e === '_ignore';
                if (ignore) {
                    return ignoredFolder.push(newPath);
                }
                if (e.startsWith('_sidebar.md')) {
                    pathEl.hasSidebar = true;
                }
                if (e.startsWith('README.md')) {
                    pathEl.containsReadme = true;
                }
            });
            if (hasIgnore)
                return;
            for (const element of pathContent) {
                const fpath = newPath + '/' + element;
                const pathStat = await fs_1.promises.lstat(fpath);
                if (pathStat.isDirectory()) {
                    const childrenRes = await sink(fpath, element);
                    if (childrenRes) {
                        pathEl.children.push(childrenRes);
                    }
                }
                else if (pathStat.isFile()) {
                    if (!element.startsWith('_sidebar') &&
                        !element.startsWith('README') &&
                        element.endsWith('.md') &&
                        pathStat.size > 0) {
                        pathEl.files.push({ name: element, path: fpath });
                    }
                }
            }
            // console.log(pathEl)
            if (pathEl.children.length == 0 && pathEl.files.length == 0)
                return;
            return pathEl;
        }
        catch (error) {
            //   console.log(error)
        }
    }
    const basePath = getPath('.', '');
    const result = await sink(basePath, 'Anovote');
    async function writeSidebar(tree, path) {
        await fs_1.promises.writeFile(basePath + path + '_sidebar.md', tree
            .map(function (v) {
            return v;
        })
            .join('\n'));
    }
    function cleanFilename(filename) {
        return filename.replace(/_|-/g, ' ');
    }
    const baseIndent = `  `;
    if (result) {
        async function createTree(tree, path, level, treeNodes, indent) {
            const hasChildren = tree.children.length > 0;
            const hasFiles = tree.files.length > 0;
            const currentFolderCleanName = cleanFilename(tree.title);
            const currentFolderRealName = tree.title;
            if (level >= 0) {
                path += `${currentFolderRealName}/`;
            }
            level += 1;
            let newIndent = indent + baseIndent;
            if (tree.hasSidebar) {
                newIndent = baseIndent;
            }
            let files = [];
            if (hasChildren) {
                for (const c of tree.children) {
                    // console.log(indent + c.title)
                    await createTree(c, path, level, files, newIndent);
                }
            }
            if (hasFiles) {
                for (const file of tree.files) {
                    // console.log(tree.hasSidebar ? indent + '[ SIDEBAR ]' : '')
                    // console.log(indent + path + file.name)
                    const fileName = file.name;
                    const fileNameClean = cleanFilename(fileName).replace('.md', '');
                    files.push(`${newIndent}- [${fileNameClean}](${path}${fileName})`);
                }
            }
            if (!tree.hasSidebar) {
                treeNodes.push(`${indent}- ${currentFolderCleanName}`);
                treeNodes.push(...files);
            }
            else {
                if (!tree.containsReadme) {
                    await fs_1.promises.writeFile(basePath + path + 'README.md', `# ${currentFolderCleanName}`);
                }
                if (level == 0) {
                    // treeNodes.push(`${indent}- ${currentFolderCleanName}`)
                    files.unshift(`- ${currentFolderCleanName}`);
                    treeNodes.push(...files);
                }
                else {
                    files.unshift(`- [${currentFolderCleanName}](${path})`);
                    treeNodes.push(`${indent}- [${currentFolderCleanName}](${path})`);
                }
                await writeSidebar(files, path);
            }
            return treeNodes;
        }
        let totaltree = await createTree(result, '/', -1, [], baseIndent);
        await writeSidebar(totaltree, '/');
        console.log('\n\n=====TREE=====\n\n');
        console.log(totaltree);
    }
    console.log('Ignored: ');
    for (const ignored of ignoredFolder) {
        console.log(ignored);
    }
}
start();
