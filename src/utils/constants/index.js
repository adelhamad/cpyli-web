export const API_URL = process.browser ? `${window.location.origin}/api` : `${process.env.BASE_URL}/api`
export const SITE_NAME = 'cpy.li'

export const apiActions = {
  count: 'count',
  find: 'find',
  findOne: 'findOne',
  delete: 'delete',
  update: 'update',
  create: 'create',
}

export const statusBadgeColors = {
  pending: 'blue',
  processing: 'blue',
  approved: 'green',
  rejected: 'red',
  timed_out: 'red',
}

export const statuses = {
  pending: 'pending',
  processing: 'processing',
  approved: 'approved',
  rejected: 'rejected',
  timed_out: 'timed_out',
}

export const fieldTypes = {
  number: 'number',
  text: 'text',
  email: 'email',
  file: 'file',
}

export const rtlLanguages = ['ar']
export const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

export const recaptchaKey = '6LejIrQdAAAAAKPZAEClNf28njtEZkSE4p31TR1j'
export const recaptchaKeySecret = '6LejIrQdAAAAADOavMJI8eeyGckpWWjt5P-cxXbz'

export const seoMeta = {
  title: 'cpy.li | easiest way to share snippets',
  description: 'cpy.li - The quickest and easiest way to share code snippets or simple text.',
}

export const supportedSyntax = [
  { label: 'Normal Text', value: 'txt' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'C-like', value: 'clike' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'ActionScript', value: 'actionscript' },
  { label: 'Ada', value: 'ada' },
  { label: 'Apache Configuration', value: 'apacheconf' },
  { label: 'APL', value: 'apl' },
  { label: 'AppleScript', value: 'applescript' },
  { label: 'Arduino', value: 'arduino' },
  { label: 'ASP.NET (C#)', value: 'aspnet' },
  { label: '6502 Assembly', value: 'asm6502' },
  { label: 'AutoHotkey', value: 'autohotkey' },
  { label: 'AutoIt', value: 'autoit' },
  { label: 'Bash', value: 'bash' },
  { label: 'BASIC', value: 'basic' },
  { label: 'Batch', value: 'batch' },
  { label: 'Bicep', value: 'bicep' },
  { label: 'Brainfuck', value: 'brainfuck' },
  { label: 'BrightScript', value: 'brightscript' },
  { label: 'Bro', value: 'bro' },
  { label: 'C', value: 'c' },
  { label: 'C#', value: 'dotnet' },
  { label: 'C++', value: 'cpp' },
  { label: 'ChaiScript', value: 'chaiscript' },
  { label: 'CIL', value: 'cil' },
  { label: 'Clojure', value: 'clojure' },
  { label: 'CMake', value: 'cmake' },
  { label: 'COBOL', value: 'cobol' },
  { label: 'CoffeeScript', value: 'coffeescript' },
  { label: 'Content-Security-Policy', value: 'csp' },
  { label: 'Coq', value: 'coq' },
  { label: 'Crystal', value: 'crystal' },
  { label: 'CSS Extras', value: 'css-extras' },
  { label: 'CSV', value: 'csv' },
  { label: 'Cypher', value: 'cypher' },
  { label: 'D', value: 'd' },
  { label: 'Dart', value: 'dart' },
  { label: 'DataWeave', value: 'dataweave' },
  { label: 'Diff', value: 'diff' },
  { label: 'Docker', value: 'docker' },
  { label: 'EditorConfig', value: 'editorconfig' },
  { label: 'EJS', value: 'ejs' },
  { label: 'Elixir', value: 'elixir' },
  { label: 'Elm', value: 'elm' },
  { label: 'ERB', value: 'erb' },
  { label: 'Erlang', value: 'erlang' },
  { label: 'Excel Formula', value: 'excel-formula' },
  { label: 'F#', value: 'fsharp' },
  { label: 'Flow', value: 'flow' },
  { label: 'Fortran', value: 'fortran' },
  { label: 'FreeMarker Template Language', value: 'ftl' },
  { label: 'GAP (CAS)', value: 'gap' },
  { label: 'G-code', value: 'gcode' },
  { label: 'Git', value: 'git' },
  { label: 'Go', value: 'go' },
  { label: 'GraphQL', value: 'graphql' },
  { label: 'Groovy', value: 'groovy' },
  { label: 'Handlebars', value: 'handlebars' },
  { label: 'Haskell', value: 'haskell' },
  { label: 'HCL', value: 'hcl' },
  { label: 'HLSL', value: 'hlsl' },
  { label: 'HTTP', value: 'http' },
  { label: '.ignore', value: 'ignore' },
  { label: 'Ini', value: 'ini' },
  { label: 'Java', value: 'java' },
  { label: 'JavaDoc', value: 'javadoc' },
  { label: 'JSDoc', value: 'jsdoc' },
  { label: 'JSON', value: 'json' },
  { label: 'JSON5', value: 'json5' },
  { label: 'JSONP', value: 'jsonp' },
  { label: 'JS stack trace', value: 'jsstacktrace' },
  { label: 'JS Templates', value: 'js-templates' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'LaTeX', value: 'latex' },
  { label: 'Less', value: 'less' },
  { label: 'Lisp', value: 'lisp' },
  { label: 'LiveScript', value: 'livescript' },
  { label: 'Log file', value: 'log' },
  { label: 'Lua', value: 'lua' },
  { label: 'Makefile', value: 'makefile' },
  { label: 'Markdown', value: 'markdown' },
  { label: 'MATLAB', value: 'matlab' },
  { label: 'MAXScript', value: 'maxscript' },
  { label: 'MongoDB', value: 'mongodb' },
  { label: 'Monkey', value: 'monkey' },
  { label: 'nginx', value: 'nginx' },
  { label: 'Objective-C', value: 'objectivec' },
  { label: 'OCaml', value: 'ocaml' },
  { label: 'OpenCL', value: 'opencl' },
  { label: 'Parser', value: 'parser' },
  { label: 'Pascal', value: 'pascal' },
  { label: 'Perl', value: 'perl' },
  { label: 'PHP', value: 'php' },
  { label: 'PHPDoc', value: 'phpdoc' },
  { label: 'PHP Extras', value: 'php-extras' },
  { label: 'PL/SQL', value: 'plsql' },
  { label: 'PowerShell', value: 'powershell' },
  { label: 'Processing', value: 'processing' },
  { label: 'Prolog', value: 'prolog' },
  { label: '.properties', value: 'properties' },
  { label: 'Pug', value: 'pug' },
  { label: 'Puppet', value: 'puppet' },
  { label: 'Pure', value: 'pure' },
  { label: 'Python', value: 'python' },
  { label: 'Q#', value: 'qsharp' },
  { label: 'Q (kdb+ database)', value: 'q' },
  { label: 'R', value: 'r' },
  { label: 'Razor C#', value: 'cshtml' },
  { label: 'React JSX', value: 'jsx' },
  { label: 'React TSX', value: 'tsx' },
  { label: 'Reason', value: 'reason' },
  { label: 'Regex', value: 'regex' },
  { label: 'Rego', value: 'rego' },
  { label: 'Rip', value: 'rip' },
  { label: 'Roboconf', value: 'roboconf' },
  { label: 'Robot Framework', value: 'robotframework' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Rust', value: 'rust' },
  { label: 'SAS', value: 'sas' },
  { label: 'Sass (Sass)', value: 'sass' },
  { label: 'Sass (Scss)', value: 'scss' },
  { label: 'Scala', value: 'scala' },
  { label: 'Scheme', value: 'scheme' },
  { label: 'Smarty', value: 'smarty' },
  { label: 'Solidity (Ethereum)', value: 'solidity' },
  { label: 'Solution file', value: 'solution-file' },
  { label: 'SPARQL', value: 'sparql' },
  { label: 'SQL', value: 'sql' },
  { label: 'Stylus', value: 'stylus' },
  { label: 'Swift', value: 'swift' },
  { label: 'Twig', value: 'twig' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'TypoScript', value: 'typoscript' },
  { label: 'URI', value: 'uri' },
  { label: 'V', value: 'v' },
  { label: 'VB.Net', value: 'vbnet' },
  { label: 'vim', value: 'vim' },
  { label: 'Visual Basic', value: 'visual-basic' },
  { label: 'WebAssembly', value: 'wasm' },
  { label: 'Wiki markup', value: 'wiki' },
  { label: 'XML doc (.net)', value: 'xml-doc' },
  { label: 'XQuery', value: 'xquery' },
  { label: 'YAML', value: 'yaml' },
]
