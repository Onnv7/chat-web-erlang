import SEARCH_ICON from "@icon/search_icon.svg";
import AVATAR from "@icon/chat_icon.svg";
import { useEffect, useRef, useState } from "react";

import { useAuthContext } from "../../../../common/context/auth.context";

import { useSearchParams } from "react-router-dom";
import { ConversationEntity } from "../../../../domain/entity/conversation.entity";
import { getRoomList } from "../../../../domain/usecase/conversation.usecase";
import {
  conversationSelector,
  useConversationDispatch,
  useConversationSelector,
} from "../redux/conversation.store";
import { getConversationListThunk } from "../redux/conversation.slice";
import { useSelector } from "react-redux";

const conversationFilterType = ["All", "Groups"];

function ConversationList() {
  const { userId } = useAuthContext();
  const conversationDispatch = useConversationDispatch();
  const conversationPayload = useConversationSelector(conversationSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const conversationId = searchParams.get("id");

  const friendId = searchParams.get("friend");
  const [conversationType, setConversationType] = useState(0);
  const conversationScrollRef = useRef<HTMLSelectElement>(null);

  async function handleScroll() {
    // const pageEntity = conversationPayload.pageEntity;
    // if (pageEntity.currentPage < pageEntity.totalPage!) {
    //   await conversationDispatch(
    //     getNextConversationPageThunk({
    //       userId: userId!,
    //     })
    //   );
    // }
  }

  useEffect(() => {
    const fetchData = async () => {
      conversationDispatch(getConversationListThunk(userId!));
      //   const data = await getRoomList(userId!);
      //   console.log("🚀 ~ fetchData ~ data:", data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex size-full flex-col rounded-[0.8rem] bg-white px-4 py-2 shadow-md">
      <section>
        <h3 className="text-16 font-7">Message</h3>
      </section>
      <hr className="my-4" />
      <section>
        <div className="flex rounded-[0.8rem] border-[1px] p-1">
          <img
            src={SEARCH_ICON}
            alt=""
            className="absolute mx-1 size-[1.4rem]"
          />
          <input
            type="text"
            className="ml-8 outline-none"
            placeholder="Search"
          />
        </div>
        <div className="mx-auto my-2 flex w-fit gap-2 rounded-[1.6rem] bg-[#efebeb] px-4 py-2">
          {conversationFilterType.map((item, index) => {
            const isActive = conversationType === index;

            return (
              <span
                key={index} // Thêm key để React nhận diện các phần tử
                className={`z-10 cursor-pointer rounded-[1.4rem] px-4 py-1 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "bg-white text-blue-500 shadow-md"
                    : "text-gray-500"
                }`}
                onClick={() => setConversationType(index)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </section>
      <section className="grow overflow-y-auto" ref={conversationScrollRef}>
        {conversationPayload.conversationList.map((conv, index) => {
          //   const imSender = userId === conv.senderId;
          return (
            <div key={conv.roomId}>
              <div className="flex justify-center items-center cursor-pointer hover:bg-gray-400 rounded-md">
                <img
                  src={AVATAR}
                  alt=""
                  className="size-[3rem] rounded-full object-cover"
                />
                <h3 className="mx-4 text-10 grow font-5">{conv.roomName}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default ConversationList;
