"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";

function CreateBudget({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData();
      toast("New Budget Created!");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-300 cursor-pointer hover:bg-blue-50 transition-all h-[170px]">
            <PlusCircle className="h-8 w-8 text-blue-500" />
            <h2 className="font-bold text-lg mt-2 text-blue-700">Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800">Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-2xl border-gray-300 hover:border-blue-400 transition-all"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div className="mt-4">
                  <label className="text-slate-600 font-medium my-1">Budget Name</label>
                  <Input
                    placeholder="e.g. Home Decor"
                    className="mt-1 focus-visible:ring-blue-500"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-slate-600 font-medium my-1">Budget Amount</label>
                  <Input
                    type="number"
                    placeholder="e.g. Rs.5000"
                    className="mt-1 focus-visible:ring-blue-500"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onCreateBudget()}
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
