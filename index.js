// Hi, I'm Samer and I will write some comments to explain what things do.
// Then my knowledge with my friends.
import data from './file1';
import { log as logger, add } from './file2';
import  * as file3 from './file3';

logger(data.username)
logger(add(data.age, 5))
logger(file3.intro(data.username))
logger(file3.random100())
