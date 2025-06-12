/*
  @license
	Rollup.js v4.43.0
	Wed, 11 Jun 2025 05:22:04 GMT - commit 72858cb1474b81c91902794ab7d28c79f34b8ca8

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
