# Changelog
All notable changes to this project will be documented in this file going forward.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Update changelog format
- Rewrite in TypeScript
- Drop Bower support

## [1.0.5] - 2017-02-27
### Fixed
- Forgot to release built files (again!)

## [1.0.4] - 2017-02-27
### Changed
- Handle state change on input event (thanks @zlatevbg!)

## [1.0.3] - 2016-10-19
### Changed
- Stop initialisation if required either input or label is not found (thanks @leptest!)

## [1.0.2] - 2016-10-05
### Fixed
- Actually release built files, whoops!

## [1.0.1] - 2016-10-05
### Changed
 - Properly assign regex variable in `removeClass` function, fix #16 (thanks @martinothamar!)

## [1.0.0] - 2016-07-13
### Added
- Start using changelog
- Include globally built floatl.global.js

### Changed
- Change default Webpack output to commonjs2 module
- Remove Gulp in favour of NPM scripts
