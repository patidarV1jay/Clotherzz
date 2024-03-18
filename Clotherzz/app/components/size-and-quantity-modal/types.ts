export interface PropsType {
  isVisible: boolean;
  handleVisible: (input: string) => void;
  modalData: string;
  handleSizeAndQuantity: (input: string) => void;
  measurement?: string;
  addCartButton: boolean;
}
