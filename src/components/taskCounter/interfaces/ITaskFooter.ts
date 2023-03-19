export interface ITaskFooter {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
