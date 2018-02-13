import _prop from '../_internals/prop';
import curry from '../curry';
import map from '../map';

// Can be changed to better support array list types
// Don't forget the documentation block
export default curry((p, list) => map(_prop(p), list));
