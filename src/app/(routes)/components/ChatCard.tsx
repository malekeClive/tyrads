import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Paperclip, Smile } from "lucide-react";
import React from "react";

function ChatCard() {
  return (
    <CardContainer className="variant-default card-chat">
      <CardHeader className="card-header-chat">
        <h3>Esther Howard</h3>
      </CardHeader>
      <CardBody className="card-body-chat">
        <div className="card-body-chat-content-chats">
          <div className="card-body-chat-content-chats-me">
            <div>Are you ready?</div>
            <Avatar className="variant-default size-default">A</Avatar>
          </div>

          <div className="card-body-chat-content-chats-other">
            <Avatar className="variant-default size-default">B</Avatar>
            <div>I have prepared everything</div>
          </div>
        </div>
        <div className="card-body-chat-content-chatbox">
          <textarea
            name="chat"
            id=""
            placeholder="Type your message"
          ></textarea>
          <div className="card-body-chat-content-chatbox-actions">
            <div>
              <Button className="variant-ghost size-xs">
                <Smile size={16} />
              </Button>
              <Button className="variant-ghost size-xs">
                <Paperclip size={16} />
              </Button>
            </div>
            <Button className="variant-default size-default">Send now</Button>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ChatCard;
