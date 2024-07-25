import React from "react";
import { TbTargetArrow } from "react-icons/tb";

function Vision() {
  return (
    <div className="card w-full p-6 bg-base-100 shadow-xl mt-4">
      <div className="text-xl font-normal mb-2 flex items-center ">
        Vision : วิสัยทัศ
      </div>
      <div className="divider mt-0"></div>
      <div className="flex flex-wrap ">
        <div className="w-full flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#FF842E] bg-opacity-10 w-12 rounded-full text-[#FF842E]">
                <TbTargetArrow size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <div>คณะพยาบาลศาสตร์ มหาวิทยาลัยเชียงใหม่ เป็นสถาบันชั้นนำระดับสากลด้านการศึกษาและการวิจัย (โดยตั้งเป้าหมายเป็นสถาบันการศึกษาทางการพยาบาลใน 100 อันดับแรกของโลก ภายในปี 2567)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
