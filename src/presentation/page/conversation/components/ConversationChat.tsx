import REACT_EMOJI_ICON from "@icon/react_emoji_icon.svg";
import AVATAR from "@icon/chat_icon.svg";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../../../common/context/auth.context";
import HeadConversationComponent from "./HeadConversationComponent";
import TextingComponent from "./TextingComponent";
import {
  ConversationInfoEntity,
  MessageEntity,
} from "../../../../domain/entity/conversation.entity";

function ConversationChat() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   const conversationDispatch = useConversationDispatch();
  const conversationId = searchParams.get("id");
  const friendId =
    searchParams.get("friend") ?? Number(searchParams.get("friend"));
  const { userId } = useAuthContext();
  const scrollLastRef = useRef<HTMLDivElement>(null);
  const conversationScrollRef = useRef<HTMLDivElement>(null);
  const firstVisibleMessageRef = useRef<HTMLDivElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [openReactMsgId, setOpenReactMsgId] = useState("");
  const [msgHoverId, setMsgHoverId] = useState("");
  const [conversationMessageList, setConversationMessageList] = useState<
    MessageEntity[]
  >([]);

  const [dateTimeSend, setDateTimeSendPosition] = useState({
    top: 0,
    right: 0,
  });
  const [conversationEntity, setConversationEntity] =
    useState<ConversationInfoEntity>();

  const handleLoadingMoreMessage = async () => {};
  const handleSendReaction = async (emoji: string, msgId: string) => {};

  return (
    <div className="flex size-full flex-col rounded-[0.8rem] bg-white px-4 py-2 shadow-md">
      <HeadConversationComponent
        imageUrl={AVATAR}
        name={conversationEntity?.name}
        friendId={
          conversationEntity?.memberList.find((u) => u.id !== userId)?.id
        }
      />
      <hr className="my-2" />

      <section
        className="flex grow flex-col overflow-y-scroll"
        ref={conversationScrollRef}
      >
        <div ref={scrollLastRef}></div>
      </section>
      <TextingComponent
        conversationId={conversationId}
        onAfterSend={function (data: any): void {
          if (conversationId) {
            const lastMessage =
              conversationMessageList[conversationMessageList.length - 1];
            if (lastMessage?.senderId === userId!) {
              //   lastMessage.messageChain.push(data);
            } else {
              //   conversationMessageList.push({
              //     messageChain: [data],
              //     senderId: userId!,
              //   });
            }
            setConversationMessageList([...conversationMessageList]);
          } else {
          }
        }}
        receiverId={Number(friendId)}
      />
    </div>
  );
}

export default ConversationChat;
