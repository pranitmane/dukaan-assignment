

export default function PaymentStats() {
    return (
      <div className="flex flex-row gap-5 pb-8">
        <div className="flex-1 p-5 bg-Black100 shadow-base flex-col rounded-plus gap-4">
          <p className="text-Black30 text-lg1">Online orders</p>
          <p className="text-2xl text-Black12">231</p>
        </div>
        <div className="flex-1 p-5 bg-Black100 shadow-base flex-col rounded-plus gap-4">
          <p className="text-Black30 text-lg1">Amount recieved</p>
          <p className="text-2xl text-Black12">₹23,92,312.19</p>
        </div>
      </div>
    );
  }