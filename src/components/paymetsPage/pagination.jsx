import arrowLeft from "../../assets/paymentsPage/arrowLeft.svg";
import arrowRight from "../../assets/paymentsPage/arrowRight.svg";
import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);



  return (
    <div className="text-Black30">
      <div className="flex flex-row gap-6 items-center">
        <button
            onClick={() => (page>1)?setPage(page - 1):setPage(totalPages)}
         className="flex flex-row gap-[6px] hover:bg-Black98 items-center justify-center p-[6px]  border border-Black85 rounded-base pr-3">
          <img src={arrowLeft} alt="" />
          Previous
        </button>
        <div className="flex flex-row gap-2">
        {Array(totalPages)
            .fill()
            .map((_, i) => (
              <button
                key={i}
                className={
                  i + 1 === page
                    ? "rounded-base bg-Blue text-Black100 flex flex-row justify-center items-center p-[6px] pl-3 pr-3"
                    : "rounded-base hover:bg-Black Black98 text-Black30 flex flex-row justify-center items-center p-[6px] pl-3 pr-3"
                }
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <button
            onClick={() =>(page<totalPages)? setPage(page + 1):setPage(1)}
         className="flex flex-row gap-[6px] hover:bg-Black98 items-center justify-center p-[6px] border border-Black85 rounded-base pl-3">
          Next
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
