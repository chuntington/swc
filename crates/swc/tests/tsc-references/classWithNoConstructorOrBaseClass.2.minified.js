//// [classWithNoConstructorOrBaseClass.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
new function C() {
    "use strict";
    _class_call_check(this, C);
}();
var D = function D() {
    "use strict";
    _class_call_check(this, D);
};
new D(), new D();
