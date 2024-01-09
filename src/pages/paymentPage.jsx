import SearchBar from "../components/paymetsPage/searchBar";
import PaymentOverview from "../components/paymetsPage/paymentOverview";
import PaymentStats from "../components/paymetsPage/paymentStats";
import TransactionTable from "../components/paymetsPage/transactionTable";


import { useState } from "react";

import payments from "../services/payments.json";



export default function PaymentsPage() {
  const [month, setMonth] = useState("This Month");

  return (
    <div className="w-full h-full relative">
      <SearchBar />
      <div className="p-8">
        <PaymentOverview setMonth={setMonth} />
        <PaymentStats />
        <div className="flex flex-row gap-2 text-Black12 pb-5">
          <p className="text-xl">Transactions</p>
          <p className="text-xl border-l-[2px] border-Black12 pl-2">{month}</p>
        </div>
        <div className="p-3 bg-white rounded-plus shadow-base-base ">
          <TransactionTable data={payments} />
        </div>
      </div>
    </div>
  );
}


