import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

function CoreValues() {
  return (
    <div className="card w-full p-6 bg-base-100 shadow-xl mt-2">
      <div className="text-xl font-normal mb-2 flex items-center ">
        Core Values : ค่านิยมหลัก
      </div>
      <div className="divider mt-0"></div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#7367F0] bg-opacity-10 w-12 rounded-full text-[#7367F0]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Focus on Quality</div>
            <div>การมุ่งเน้นคุณภาพ</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#EA5455] bg-opacity-10 w-12 rounded-full text-[#EA5455]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Organization Leadership</div>
            <div>การนำองค์กรอย่างมีวิสัยทัศน์</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#00CFE8] bg-opacity-10 w-12 rounded-full text-[#00CFE8]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Nurturing</div>
            <div>การดูแลเอาใจใส่</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#CC5FE2] bg-opacity-10 w-12 rounded-full text-[#CC5FE2]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Commitment and Community concerned</div>
            <div>
              ความผูกพันและมุ่งมั่นทุ่มเทและความรับผิดชอบต่อชุมชนและสังคม
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#813FD3] bg-opacity-10 w-12 rounded-full text-[#813FD3]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Morality</div>
            <div>คุณธรรม</div>
          </div>
        </div>
        {/* 6 */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 flex gap-3">
          <div className="flex-none">
            <div className="avatar placeholder">
              <div className="bg-[#FF9F43] bg-opacity-10 w-12 rounded-full text-[#FF9F43]">
                <FaRegCircleCheck size={25} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <div>Unity</div>
            <div>ความเป็นเอกภาพ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
