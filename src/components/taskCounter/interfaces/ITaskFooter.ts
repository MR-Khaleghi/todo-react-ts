export interface ITaskFooter {
  id: string;
  status?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => void;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
