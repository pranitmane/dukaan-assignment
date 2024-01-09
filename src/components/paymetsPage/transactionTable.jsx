import info from "../../assets/paymentsPage/info.svg";
import triangle from "../../assets/paymentsPage/triangle.svg";
import sort from "../../assets/paymentsPage/sort.svg";
import search from "../../assets/paymentsPage/search.svg";
import combinedShape from "../../assets/paymentsPage/combinedShape.svg";
import { parseISO, format } from "date-fns";

export default function TransactionTable({ data }) {
  return (
    <div>
      <div className="flex flex-row justify-between gap-3 pb-3 ">
        <div className="w-[216px] flex flex-row text-md1 border border-Black85 pt-[10px] pb-[10px] pl-4 pr-4 rounded-base gap-2">
          <img src={search} alt="search-icon" />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="flex flex-row gap-3">
          <button className="text-md1 border hover:bg-Black98 rounded-base border-Black85 text-Black30 flex flex-row gap-[6px] justify-center items-center pl-3 pr-3 pt-[3px] pb-[3px]">
            <p>Sort</p>
            <img src={sort} alt="" />
          </button>
          <button className="border rounded-base hover:bg-Black98 border-Black85 text-Black30 flex flex-row justify-center items-center pl-3 pr-3 pt-[3px] pb-[3px]">
            <img src={combinedShape} alt="" />
          </button>
        </div>
      </div>
      <table className=" w-full">
        <thead>
          <tr className="text-Black30 bg-Black95 rounded-base">
            <th className="text-start text-sm1 pl-3 pt-[10px] pb-[10px] pr-10 rounded-l-base">
              Order ID
            </th>
            <th className="text-start text-sm1 pl-3 pt-[10px] pb-[10px] pr-10">
            <div className="flex flex-row gap-1 max-w-fit">
                <p>Order date</p>
                <img src={triangle} alt="" />
              </div>
            </th>
            <th className="text-end text-sm1 pl-3 pt-[10px] pb-[10px] pr-10">
              Order amount
            </th>
            <th className="flex flex-row justify-end text-sm1 pt-[10px] pb-[10px] pr-3 rounded-r-base">
              <div className="flex flex-row gap-1 max-w-fit">
                <p>Transaction fees</p>
                <img src={info} alt="" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((payment) => (
            <tr className="text-sm1  border-b-Black90 rounded-base">
              <td className="p-0">
                <p className="text-start whitespace-nowrap ml-3  text-Blue border-b border-b-Black90 pt-[10px] pb-[10px] pr-10">
                  {payment.order_id}
                </p>
              </td>
              <td className="p-0">
                <p className="text-start whitespace-nowrap border-b border-b-Black90 text-Black12 pl-3 pt-[10px] pb-[10px] pr-10">
                  {format(parseISO(payment.order_date_iso), "dd MMM, yyyy")}
                </p>
              </td>
              <td className="p-0">
                <p className="text-end whitespace-nowrap border-b border-b-Black90 text-Black12 pl-3 pt-[10px] pb-[10px] pr-10">
                  {payment.order_amount}
                </p>
              </td>
              <td className="p-0">
                <p className="text-end border-b border-b-Black90 text-Black12 pt-[10px] pb-[10px] mr-3">
                  {payment.transaction_fees}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
