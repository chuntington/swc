//// [elementAccessChain.3.ts]
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!    ,-[1:1]
//!  1 | 
//!  2 | declare const obj: any;
//!  3 | 
//!  4 | obj?.["a"]++;
//!    : ^^^^^^^^^^
//!  5 | obj?.a["b"]++;
//!  6 | obj?.["a"]--;
//!  7 | obj?.a["b"]--;
//!    `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!    ,-[2:1]
//!  2 | declare const obj: any;
//!  3 | 
//!  4 | obj?.["a"]++;
//!  5 | obj?.a["b"]++;
//!    : ^^^^^^^^^^^
//!  6 | obj?.["a"]--;
//!  7 | obj?.a["b"]--;
//!    `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!    ,-[3:1]
//!  3 | 
//!  4 | obj?.["a"]++;
//!  5 | obj?.a["b"]++;
//!  6 | obj?.["a"]--;
//!    : ^^^^^^^^^^
//!  7 | obj?.a["b"]--;
//!  8 | 
//!  9 | ++obj?.["a"];
//!    `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[4:1]
//!   4 | obj?.["a"]++;
//!   5 | obj?.a["b"]++;
//!   6 | obj?.["a"]--;
//!   7 | obj?.a["b"]--;
//!     : ^^^^^^^^^^^
//!   8 | 
//!   9 | ++obj?.["a"];
//!  10 | ++obj?.a["b"];
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[6:1]
//!   6 | obj?.["a"]--;
//!   7 | obj?.a["b"]--;
//!   8 | 
//!   9 | ++obj?.["a"];
//!     :   ^^^^^^^^^^
//!  10 | ++obj?.a["b"];
//!  11 | --obj?.["a"];
//!  12 | --obj?.a["b"];
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[7:1]
//!   7 | obj?.a["b"]--;
//!   8 | 
//!   9 | ++obj?.["a"];
//!  10 | ++obj?.a["b"];
//!     :   ^^^^^^^^^^^
//!  11 | --obj?.["a"];
//!  12 | --obj?.a["b"];
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[8:1]
//!   8 | 
//!   9 | ++obj?.["a"];
//!  10 | ++obj?.a["b"];
//!  11 | --obj?.["a"];
//!     :   ^^^^^^^^^^
//!  12 | --obj?.a["b"];
//!  13 | 
//!  14 | obj?.["a"] = 1;
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[9:1]
//!   9 | ++obj?.["a"];
//!  10 | ++obj?.a["b"];
//!  11 | --obj?.["a"];
//!  12 | --obj?.a["b"];
//!     :   ^^^^^^^^^^^
//!  13 | 
//!  14 | obj?.["a"] = 1;
//!  15 | obj?.a["b"] = 1;
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[11:1]
//!  11 | --obj?.["a"];
//!  12 | --obj?.a["b"];
//!  13 | 
//!  14 | obj?.["a"] = 1;
//!     : ^^^^^^^^^^
//!  15 | obj?.a["b"] = 1;
//!  16 | obj?.["a"] += 1;
//!  17 | obj?.a["b"] += 1;
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[12:1]
//!  12 | --obj?.a["b"];
//!  13 | 
//!  14 | obj?.["a"] = 1;
//!  15 | obj?.a["b"] = 1;
//!     : ^^^^^^^^^^^
//!  16 | obj?.["a"] += 1;
//!  17 | obj?.a["b"] += 1;
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[13:1]
//!  13 | 
//!  14 | obj?.["a"] = 1;
//!  15 | obj?.a["b"] = 1;
//!  16 | obj?.["a"] += 1;
//!     : ^^^^^^^^^^
//!  17 | obj?.a["b"] += 1;
//!  18 | 
//!  19 | for (obj?.["a"] in {});
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[14:1]
//!  14 | obj?.["a"] = 1;
//!  15 | obj?.a["b"] = 1;
//!  16 | obj?.["a"] += 1;
//!  17 | obj?.a["b"] += 1;
//!     : ^^^^^^^^^^^
//!  18 | 
//!  19 | for (obj?.["a"] in {});
//!  20 | for (obj?.a["b"] in {});
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[16:1]
//!  16 | obj?.["a"] += 1;
//!  17 | obj?.a["b"] += 1;
//!  18 | 
//!  19 | for (obj?.["a"] in {});
//!     :      ^^^^^^^^^^
//!  20 | for (obj?.a["b"] in {});
//!  21 | for (obj?.["a"] of []);
//!  22 | for (obj?.a["b"] of []);
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[17:1]
//!  17 | obj?.a["b"] += 1;
//!  18 | 
//!  19 | for (obj?.["a"] in {});
//!  20 | for (obj?.a["b"] in {});
//!     :      ^^^^^^^^^^^
//!  21 | for (obj?.["a"] of []);
//!  22 | for (obj?.a["b"] of []);
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[18:1]
//!  18 | 
//!  19 | for (obj?.["a"] in {});
//!  20 | for (obj?.a["b"] in {});
//!  21 | for (obj?.["a"] of []);
//!     :      ^^^^^^^^^^
//!  22 | for (obj?.a["b"] of []);
//!  23 | 
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!     `----
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!     ,-[19:1]
//!  19 | for (obj?.["a"] in {});
//!  20 | for (obj?.a["b"] in {});
//!  21 | for (obj?.["a"] of []);
//!  22 | for (obj?.a["b"] of []);
//!     :      ^^^^^^^^^^^
//!  23 | 
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!     `----
//! 
//!   x Not a pattern
//!     ,-[21:1]
//!  21 | for (obj?.["a"] of []);
//!  22 | for (obj?.a["b"] of []);
//!  23 | 
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!     :       ^^^^^^^^^^
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!     `----
//! 
//!   x Cannot assign to this
//!     ,-[22:1]
//!  22 | for (obj?.a["b"] of []);
//!  23 | 
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!     :       ^^^^^^^^^^^
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!  28 | [...obj?.["a"]] = [];
//!     `----
//! 
//!   x Not a pattern
//!     ,-[23:1]
//!  23 | 
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!     :       ^^^^^^^^^^
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!  28 | [...obj?.["a"]] = [];
//!  29 | [...obj?.a["b"]] = [];
//!     `----
//! 
//!   x Cannot assign to this
//!     ,-[24:1]
//!  24 | ({ a: obj?.["a"] } = { a: 1 });
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!     :       ^^^^^^^^^^^
//!  28 | [...obj?.["a"]] = [];
//!  29 | [...obj?.a["b"]] = [];
//!     `----
//! 
//!   x Not a pattern
//!     ,-[25:1]
//!  25 | ({ a: obj?.a["b"] } = { a: 1 });
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!  28 | [...obj?.["a"]] = [];
//!     :     ^^^^^^^^^^
//!  29 | [...obj?.a["b"]] = [];
//!     `----
//! 
//!   x Cannot assign to this
//!     ,-[26:1]
//!  26 | ({ ...obj?.["a"] } = { a: 1 });
//!  27 | ({ ...obj?.a["b"] } = { a: 1 });
//!  28 | [...obj?.["a"]] = [];
//!  29 | [...obj?.a["b"]] = [];
//!     :     ^^^^^^^^^^^
//!     `----
