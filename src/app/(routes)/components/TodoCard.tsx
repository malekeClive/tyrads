"use client";

import React from "react";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { ChevronRight, MoreVertical, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const dummyItemsToBuy = [
  {
    id: 1,
    selected: false,
    name: "Macbook",
  },
  {
    id: 2,
    selected: false,
    name: "Bicycle",
  },
  {
    id: 3,
    selected: false,
    name: "Motorcycle",
  },
  {
    id: 4,
    selected: false,
    name: "Iphone 14",
  },
  {
    id: 5,
    selected: false,
    name: "Iphone 15",
  },
];

interface TodoItem {
  id: number;
  selected: boolean;
  name: string;
}

function TodoCard() {
  const [todoItems, setTodoItems] = React.useState<TodoItem[]>(dummyItemsToBuy);

  const checkedItems = React.useMemo(() => {
    return todoItems.filter((item) => item.selected === true).length;
  }, [todoItems]);

  const onCheckClicked = (id: number) => {
    const newItems = todoItems.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }

      return item;
    });

    setTodoItems(newItems);
  };

  return (
    <CardContainer className="xl:col-span-4 xl:rounded-tr-none xl:rounded-br-none xl:border-r-primary-foreground xl:border-r-[1px]">
      <CardHeader>
        <h3 className="font-semibold text-sm">List of items to buy</h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 mt-2">
        <div className="flex flex-row items-center">
          <div>
            <p className="font-semibold">02:00</p>
            <p className="text-[10px] text-gray-400">Sat, August 12</p>
          </div>
          <div className="text-gray-400 w-16 flex justify-center">
            <ChevronRight size={18} />
          </div>
          <div>
            <p className="font-semibold">05:00</p>
            <p className="text-[10px] text-gray-400">Sat, September 12</p>
          </div>
        </div>
        <div className="flex flex-col itemc gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-1">
              <span className="text-xs text-gray-400">
                {checkedItems}/{todoItems.length}
              </span>
              <span className="text-xs font-medium">Shopping list</span>
            </div>
            <div>
              <Button
                variant="ghost"
                className="flex flex-row items-center gap-1"
              >
                <Plus size={14} />
                <p className="text-xs font-medium">Add an item</p>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 h-24 overflow-y-scroll">
            {todoItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row justify-between bg-background px-3 py-3 rounded-md"
              >
                <div className="flex flex-row gap-1 items-center">
                  <Checkbox
                    id={item.name}
                    checked={item.selected}
                    onCheckedChange={() => onCheckClicked(item.id)}
                  />
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
                <div>
                  <Button
                    variant="ghost"
                    className="p-0 h-5 hover:bg-transparent"
                  >
                    <MoreVertical size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default TodoCard;
