import arrow from "../../assets/paymentsPage/arrow.svg";

export default function PaymentOverview({ setMonth }) {
    return (
      <div className="flex flex-row justify-between items-center pb-6">
        <p className="text-xl text-Black12">Overview</p>
        <div className="flex flex-row gap-[7px] items-center bg-Black100 text-Black30 border border-Black85 rounded-base relative ">
          <select
            type="select"
            onChange={(e) => setMonth(e.target.value)}
            className="bg-Black100 hover:bg-Black98 outline-none text-lg1 hover:cursor-pointer  h-full pl-[14px] pr-[37px] pt-[6px] pb-[6px] rounded-base w-full"
            placeholder="Last Month"
            style={{
              WebkitAppearance: "none",
            }}
          >
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
          </select>
          <img
            className="absolute pointer-events-none right-[14px]"
            src={arrow}
            alt=""
          />
        </div>
      </div>
    );
  }