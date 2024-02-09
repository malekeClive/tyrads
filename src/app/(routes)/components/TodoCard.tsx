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
    <CardContainer className="variant-default card-todo">
      <CardHeader className="card-todo-header">
        <h3>List of items to buy</h3>
      </CardHeader>
      <CardBody className="card-todo-body">
        <div>
          <div>
            <p>02:00</p>
            <p>Sat, August 12</p>
          </div>
          <div>
            <ChevronRight size={18} />
          </div>
          <div>
            <p>05:00</p>
            <p>Sat, September 12</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>
                {checkedItems}/{todoItems.length}
              </span>
              <span>Shopping list</span>
            </div>
            <div>
              <Button className="variant-ghost size-default">
                <Plus size={14} />
                <p>Add an item</p>
              </Button>
            </div>
          </div>
          <div>
            {todoItems.map((item, idx) => (
              <div key={idx}>
                <div>
                  <Checkbox
                    id={item.name}
                    checked={item.selected}
                    onCheckedChange={() => onCheckClicked(item.id)}
                  />
                  <p>{item.name}</p>
                </div>
                <div>
                  <Button className="variant-ghost size-default">
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
