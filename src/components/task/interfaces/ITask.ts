import { ITaskFooter } from './../../taskCounter/interfaces/ITaskFooter';
import { ITaskDescription } from './ITaskDescription';
import { ITaskHeader } from './ITaskHeader';

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  priority?: string;
}
