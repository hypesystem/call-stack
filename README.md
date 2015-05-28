call-stack
==========

Provides an easy-to-use `CallStack` abstraction, that can be used for code reflection.

### Notes

Use kuebk/node-stack as an optional-dependency: this dep gives access to v8::StackTrace.

If that dependency is not present, use Error for introspection.

Each stack frame should have some info:

- function
- functionName
- fileName
- fileDir
- filePath (file{Name + Dir})
- ... more?

