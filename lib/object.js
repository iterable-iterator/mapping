"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = object;
function object(mapping) {

	var obj = {};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = mapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    value = _step$value[1];

			obj[key] = value;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return obj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYmplY3QuanMiXSwibmFtZXMiOlsib2JqZWN0IiwibWFwcGluZyIsIm9iaiIsImtleSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFBd0JBLE07QUFBVCxTQUFTQSxNQUFULENBQWtCQyxPQUFsQixFQUE0Qjs7QUFFMUMsS0FBTUMsTUFBTSxFQUFaOztBQUYwQztBQUFBO0FBQUE7O0FBQUE7QUFJMUMsdUJBQStCRCxPQUEvQjtBQUFBO0FBQUEsT0FBY0UsR0FBZDtBQUFBLE9BQW9CQyxLQUFwQjs7QUFBeUNGLE9BQUlDLEdBQUosSUFBV0MsS0FBWDtBQUF6QztBQUowQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU0xQyxRQUFPRixHQUFQO0FBRUEiLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0ICggbWFwcGluZyApIHtcblxuXHRjb25zdCBvYmogPSB7fSA7XG5cblx0Zm9yICggY29uc3QgWyBrZXkgLCB2YWx1ZSBdIG9mIG1hcHBpbmcgKSBvYmpba2V5XSA9IHZhbHVlIDtcblxuXHRyZXR1cm4gb2JqIDtcblxufVxuIl19