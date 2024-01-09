import SearchBar from "../components/paymetsPage/searchBar";
import PaymentOverview from "../components/paymetsPage/paymentOverview";
import PaymentStats from "../components/paymetsPage/paymentStats";
import TransactionTable from "../components/paymetsPage/transactionTable";


import { useState } from "react";

import payments from "../services/payments.json";



export default function PaymentsPage({navOpen,setNavOpen}) {
  const [month, setMonth] = useState("This Month");

  return (
    <div className="w-full h-full relative overflow-y-scroll flex-1">
      <SearchBar setNavOpen={setNavOpen} />
      <div className="p-3 md:p-8">
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


