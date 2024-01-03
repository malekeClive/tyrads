import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Paperclip, Smile } from "lucide-react";
import React from "react";

function ChatCard() {
  return (
    <CardContainer className="relative xl:col-span-4 xl:rounded-tl-none xl:rounded-bl-none xl:border-r-primary-foreground xl:border-l-[1px]">
      <CardHeader>
        <h3 className="font-semibold text-sm">Esther Howard</h3>
      </CardHeader>
      <CardBody className="flex flex-col">
        <div className="flex flex-col gap-4 overflow-scroll h-[186px] xl:h-[86px] pb-2">
          <div className="self-end flex flex-row items-center gap-2">
            <div className="bg-primary rounded-md p-2 text-xs text-white rounded-br-none">
              Are you ready?
            </div>
            <Avatar>A</Avatar>
          </div>

          <div className="flex flex-row items-center gap-2">
            <Avatar>B</Avatar>
            <div className="bg-background rounded-md p-2 text-xs rounded-bl-none">
              I have prepared everything
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-background rounded-md px-3 py-2">
          <textarea
            className="bg-background text-xs w-full resize-none focus:outline-none"
            name="chat"
            id=""
            placeholder="Type your message"
          ></textarea>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              <Button variant="ghost" size="xs">
                <Smile size={16} />
              </Button>
              <Button variant="ghost" size="xs">
                <Paperclip size={16} />
              </Button>
            </div>
            <div>
              <Button className="h-6 px-2 text-xs">Send now</Button>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ChatCard;
