# TypeScript-course

&ensp; TS is a programming language that extends JavaScript by adding optional type annotations. It is designed to address the needs of developing large-scale JS applications by providing a type system that helps catch potential errors and provides enhanced tooling support.
* **Optional Types**
  - _it allows you to annotate variables, function parameters;_
  - _it return types with types, making it possible to explicitly declare the expected data types;_
* **Tooling Support**
  - _it provides rich tooling support through the use of static type checking;_
  - _it can catch common errors during the development phase, such as type mismatches, undefined variables, or incorrect function calls;_
  - _this helps improve code quality and reduces debugging time;_
* **Application-Scale JavaScript**
  - _it is particularly suited for large-scale JavaScript applications;_
  - _as the size and complexity of a JS codebase increase, it becomes more challenging to maintain and reason about the code;_
  - _type system helps provide additional safety and maintainability when working with large projects;_
* **Cross-Browser and Cross-Platform:**
  - _it can be used to develop applications that run on any browser and any host, including web browsers, Node.js;_
  - _it is not limited to a specific operating system and can be used on Windows, macOS, Linux, or any other OS that supports JS;_
* **Readable, Standards-Based JavaScript**
  - _TypeScript code is transpiled (compiled) into regular JavaScript, which can be executed by any JavaScript runtime;_
  - _generated JavaScript is readable and adheres to standard JS syntax, making it compatible with existing JS tools and libraries;_

> By leveraging TypeScript, developers can benefit from the advantages of static typing while still enjoying the flexibility and familiarity of JS programming. TS code can be integrated seamlessly with existing JS codebases, enabling gradual adoption and easy migration.


### tsc -help

* ``tsc --init``
> Creates a tsconfig.json with the recommended settings in the working directory.


## Syntactic constructions

* data types:
  + ``let identifier:type = value;``
  + ``const IDENTIFIER:type = value;``
* functions:
  + ```typescript
     function identifier(
       param1:Type,
       param2:Type
     ): ReturnedType {
      return 'value';
     }
    ```
  + ```typescript
     <T, U>(param: Type, param2: Type): Type => value;
    ```
* Classes
> _instance (static) variables = fields_\
> _accessors (get/set) = properties_\
> _computed property & index signature = member_\
  + ```typescript
     class Identifier<T> {
       static staticField: Type = value; // class member

       static get staticProperty(): Type {
         // class member
         return value;
       }

       static set staticProperty(value: Type) {
         // class member
       }
  
       static staticMethod<T, U>(
         param0: Type,
         param1: Type
       ): Type {
         // class member
       }

       [indexSignature: Type]: Type; // class member

       [computedProp]: Type = value; // class member

       field: Type = value; // class member

       get property(): Type {
         // class member
         return value;
       }

       set property(value: Type) {
       // class member
       }

       constructor(param0: Type, param1: Type) {}

       method<T, U>(param0: Type, param1: Type): Type {
         // class member
       }
     }
    ```

## [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

* Numeric enums
  + ```typescript
      enum Direction {
        Up,
        Down,
        Left,
        Right,
      }
    ```
  + > _Here, Up would have value 0, Down - 1, Left - 2, and Right- 3._
* String enums  
  + ```typescript
      enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
      }
    ```
* Heterogeneous enums

## Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:
```javascript
  const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```


## Window APIs

[DOM-manipulation library](https://github.com/microsoft/TypeScript/blob/main/src/lib/dom.generated.d.ts)\
&ensp; **Node** is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.

&ensp; **Element** is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.

&ensp; Any **HTML element**. Some elements directly implement this interface, while others implement it via an interface that inherits it.

