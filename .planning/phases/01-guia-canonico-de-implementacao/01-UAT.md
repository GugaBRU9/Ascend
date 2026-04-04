---
status: complete
phase: 01-guia-canonico-de-implementacao
source:
  - 01-01-SUMMARY.md
  - 01-02-SUMMARY.md
  - 01-03-SUMMARY.md
  - 01-04-SUMMARY.md
started: 2026-04-04T00:15:53Z
updated: 2026-04-04T00:28:25Z
---

## Current Test

[testing complete]

## Tests

### 1. Abertura e framing do guia canonico
expected: Ao abrir , voce deve encontrar um titulo claro, rastreabilidade inicial (, , , , ), as secoes 1-5 preenchidas e uma matriz de normalizacao que classifica blocos como , ,  e  nos buckets definidos pela fase.
result: pass

### 2. Mapa de dominio do core minimo
expected: Nas secoes 6-9 de , voce deve encontrar namespaces como , , , ,  e , tipos representativos como ,  e , a separacao entre  e , e regras descritas no formato .
result: pass

### 3. Arquitetura, baseline e trilha didatica
expected: Nas secoes 10-12 de , voce deve ver fronteiras arquiteturais claras, dependencias proibidas, baseline tecnica com , , , , USAGE: clang-tidy [options] <source0> [... <sourceN>]

OPTIONS:

Generic Options:

  --help                          - Display available options (--help-hidden for more)
  --version                       - Display the version of this program

clang-tidy options:

  --checks=<string>               - Comma-separated list of globs with optional '-'
                                    prefix. Globs are processed in order of
                                    appearance in the list. Globs without '-'
                                    prefix add checks with matching names to the
                                    set, globs with the '-' prefix remove checks
                                    with matching names from the set of enabled
                                    checks. This option's value is appended to the
                                    value of the 'Checks' option in .clang-tidy
                                    file, if any.
  --config=<string>               - Specifies a configuration in YAML/JSON format:
                                      -config="{Checks: '*',
                                                CheckOptions: {x: y}}"
                                    When the value is empty, clang-tidy will
                                    attempt to find a file named .clang-tidy for
                                    each source file in its parent directories.
  --config-file=<string>          - Specify the path of .clang-tidy or custom config file:
                                     e.g. --config-file=/some/path/myTidyConfigFile
                                    This option internally works exactly the same way as
                                     --config option after reading specified config file.
                                    Use either --config-file or --config, not both.
  --dump-config                   - Dumps configuration in the YAML format to
                                    stdout. This option can be used along with a
                                    file name (and '--' if the file is outside of a
                                    project with configured compilation database).
                                    The configuration used for this file will be
                                    printed.
                                    Use along with -checks=* to include
                                    configuration of all checks.
  --enable-check-profile          - Enable per-check timing profiles, and print a
                                    report to stderr.
  --enable-module-headers-parsing - Enables preprocessor-level module header parsing
                                    for C++20 and above, empowering specific checks
                                    to detect macro definitions within modules. This
                                    feature may cause performance and parsing issues
                                    and is therefore considered experimental.
  --explain-config                - For each enabled check explains, where it is
                                    enabled, i.e. in clang-tidy binary, command
                                    line or a specific configuration file.
  --export-fixes=<filename>       - YAML file to store suggested fixes in. The
                                    stored fixes can be applied to the input source
                                    code with clang-apply-replacements.
  --extra-arg=<string>            - Additional argument to append to the compiler command line
  --extra-arg-before=<string>     - Additional argument to prepend to the compiler command line
  --fix                           - Apply suggested fixes. Without -fix-errors
                                    clang-tidy will bail out if any compilation
                                    errors were found.
  --fix-errors                    - Apply suggested fixes even if compilation
                                    errors were found. If compiler errors have
                                    attached fix-its, clang-tidy will apply them as
                                    well.
  --fix-notes                     - If a warning has no fix, but a single fix can
                                    be found through an associated diagnostic note,
                                    apply the fix.
                                    Specifying this flag will implicitly enable the
                                    '--fix' flag.
  --format-style=<string>         - Style for formatting code around applied fixes:
                                      - 'none' (default) turns off formatting
                                      - 'file' (literally 'file', not a placeholder)
                                        uses .clang-format file in the closest parent
                                        directory
                                      - '{ <json> }' specifies options inline, e.g.
                                        -format-style='{BasedOnStyle: llvm, IndentWidth: 8}'
                                      - 'llvm', 'google', 'webkit', 'mozilla'
                                    See clang-format documentation for the up-to-date
                                    information about formatting styles and options.
                                    This option overrides the 'FormatStyle` option in
                                    .clang-tidy file, if any.
  --header-filter=<string>        - Regular expression matching the names of the
                                    headers to output diagnostics from. Diagnostics
                                    from the main file of each translation unit are
                                    always displayed.
                                    Can be used together with -line-filter.
                                    This option overrides the 'HeaderFilterRegex'
                                    option in .clang-tidy file, if any.
  --line-filter=<string>          - List of files with line ranges to filter the
                                    warnings. Can be used together with
                                    -header-filter. The format of the list is a
                                    JSON array of objects:
                                      [
                                        {"name":"file1.cpp","lines":[[1,3],[5,7]]},
                                        {"name":"file2.h"}
                                      ]
  --list-checks                   - List all enabled checks and exit. Use with
                                    -checks=* to list all available checks.
  --load=<pluginfilename>         - Load the specified plugin
  -p <string>                     - Build path
  --quiet                         - Run clang-tidy in quiet mode. This suppresses
                                    printing statistics about ignored warnings and
                                    warnings treated as errors if the respective
                                    options are specified.
  --store-check-profile=<prefix>  - By default reports are printed in tabulated
                                    format to stderr. When this option is passed,
                                    these per-TU profiles are instead stored as JSON.
  --system-headers                - Display the errors from system headers.
                                    This option overrides the 'SystemHeaders' option
                                    in .clang-tidy file, if any.
  --use-color                     - Use colors in diagnostics. If not set, colors
                                    will be used if the terminal connected to
                                    standard output supports colors.
                                    This option overrides the 'UseColor' option in
                                    .clang-tidy file, if any.
  --verify-config                 - Check the config files to ensure each check and
                                    option is recognized.
  --vfsoverlay=<filename>         - Overlay the virtual filesystem described by file
                                    over the real file system.
  --warnings-as-errors=<string>   - Upgrades warnings to errors. Same format as
                                    '-checks'.
                                    This option's value is appended to the value of
                                    the 'WarningsAsErrors' option in .clang-tidy
                                    file, if any. e sanitizers, alem da ordem didatica  e o papel da CLI como ferramenta de estudo.
result: pass

### 4. Handoff da milestone 02
expected: Ao abrir , voce deve ver apenas decisoes ainda legitimas, anti-patterns proibidos, a milestone 02 quebrada em  a  com , ,  e , e um  sem reabrir  a .
result: pass

### 5. Fechamento do tracking global da fase
expected: Os artefatos globais devem refletir o fechamento da fase:  com Phase 1 em  e ,  com , , ,  e  marcados como concluidos,  com itens validados e proximos passos ativos, e  indicando que a fase 01 esta completa.
result: pass

## Summary

total: 5
passed: 5
issues: 0
pending: 0
skipped: 0
blocked: 0

## Gaps

none yet
