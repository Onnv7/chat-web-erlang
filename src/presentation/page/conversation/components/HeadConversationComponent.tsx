import PHONE_CALL_ICON from "@icon/phone_calling_icon.svg";
import VIDEO_CALL_ICON from "@icon/video_call_icon.svg";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../../../common/context/auth.context";
import { ConversationSummaryEntity } from "../../../../domain/entity/conversation.entity";
type HeadConversationComponentProps = {
  imageUrl?: string;
  name?: string;
  friendId?: number;
};
function HeadConversationComponent({
  imageUrl,
  name,
}: HeadConversationComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const conversationId = searchParams.get("id");
  const friendIdParam =
    searchParams.get("friend") ?? Number(searchParams.get("friend"));
  const { userId } = useAuthContext();

  const [conversationInfo, setConversationInfo] = useState<
    ConversationSummaryEntity | undefined
  >({
    imageUrl: imageUrl ?? "",
    name: name ?? "",
  });

  return (
    <section className="flex items-center gap-4">
      <img
        src={conversationInfo?.imageUrl}
        alt=""
        className="size-[3.4rem] rounded-full object-cover"
      />
      <div className="grow">
        <h3 className="text-14 font-5">{conversationInfo?.name}</h3>
      </div>
      <div className="flex gap-4">
        <img
          src={VIDEO_CALL_ICON}
          alt=""
          className="size-[1.6rem] cursor-pointer"
        />
        <img
          src={PHONE_CALL_ICON}
          alt=""
          className="size-[1.6rem] cursor-pointer"
        />
      </div>
    </section>
  );
}

export default HeadConversationComponent;
