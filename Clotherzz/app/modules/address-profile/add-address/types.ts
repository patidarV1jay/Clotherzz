interface PropsType {
  isVisible: boolean;
  handleVisible: () => void;
}

interface PinCodeAreaType {
  [key: string]: string;
}

type PinCodeAreaTypeArray = PinCodeAreaType[];

interface PostOffice {
  Block: string;
  BranchType: string;
  Circle: string;
  Country: string;
  DeliveryStatus: string;
  Description: string | null;
  District: string;
  Division: string;
  Name: string;
  Pincode: string;
  Region: string;
  State: string;
}

interface ApiResponse {
  Message?: string;
  PostOffice?: PostOffice[];
  Status?: string;
}