import _path from '../path';
import curry from '../../curry';

export default curry((p, obj) => _path([p], obj));
