export interface Order {
    state:"initByUser" | "radicated" | "inProgress" | "successed" | "failed";
    description: string;
    price: number;
  }
  