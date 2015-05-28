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

The stack itself should have some helpers for navigating:

- getFrame() returns the top frame
- pop() pops the top frame, returns a new call stack
- popUntil(functionName) pops frames until a function with the name is found

All stacks are immutable. Actions result in new stacks.
