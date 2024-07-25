import React from "react";
import { FaNetworkWired } from "react-icons/fa6";

function Vision() {
  return (
    <div className="card w-full p-6 bg-base-100 shadow-xl mt-4">
      <div className="text-xl font-normal mb-2 flex items-center ">
        Mission : พันธกิจ
      </div>
      <div className="divider mt-0"></div>
      <div className="flex flex-wrap ">
        <div className="w-full flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#3EECBA] bg-opacity-10 w-12 rounded-full text-[#3EECBA]">
                <FaNetworkWired size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center">
            <div className="mb-1">1 จัดการศึกษาทางการพยาบาลระดับอุดมศึกษา เพื่อผลิตบัณฑิตที่มีคุณภาพตามมาตรฐานสากล และตอบสนองความต้องการของสังคม</div>
            <div className="mb-1">2 ผลิตผลงานวิจัยด้านสุขภาพที่สร้างองค์ความรู้และนำไปใช้ได้จริงในการเรียนการสอน การบริการ และนวัตกรรม</div>
            <div className="mb-1">3 ให้บริการวิชาการแก่ชุมชนและสังคม</div>
            <div className="mb-1">4 ทำนุบำรุงศิลปวัฒนธรรม และบำรุงรักษาสิ่งแวดล้อม (พันธกิจรอง โดยบูรณาการร่วมกับการดำเนินการในพันธกิจด้านอื่นๆ)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
