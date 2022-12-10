interface PaymentMethod {
  getDiscountAmount: (amount: number) => number;
}

class Billet implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Credit implements PaymentMethod {
  constructor(private installments: number) {}

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05;
    }

    if (this.installments <= 6) {
      return amount * 0.02;
    }
    return 0;
  }
}
class Debit implements PaymentMethod {
  getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class CalculateOrderDicount {
  constructor(private paymentMethod: PaymentMethod) {}

  public execute(amount: number) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDicount = new CalculateOrderDicount(new Credit(6));
calculateOrderDicount.execute(2000);
