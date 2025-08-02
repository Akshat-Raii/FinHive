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
import { Incomes } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";

function CreateIncomes({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  const onCreateIncomes = async () => {
    const result = await db
      .insert(Incomes)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Incomes.id });

    if (result) {
      refreshData();
      toast("New Income Source Created!");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white p-5 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-300 cursor-pointer hover:bg-blue-50 transition-all h-[170px]">
            <PlusCircle className="h-8 w-8 text-blue-500" />
            <h2 className="font-bold text-lg mt-2 text-blue-700">
              Create New Income
            </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-800">
              Create New Income Source
            </DialogTitle>
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
                  <label className="text-slate-600 font-medium my-1">
                    Source Name
                  </label>
                  <Input
                    placeholder="e.g. Youtube"
                    className="mt-1 focus-visible:ring-blue-500"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-slate-600 font-medium my-1">
                    Monthly Amount
                  </label>
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
                onClick={() => onCreateIncomes()}
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300"
              >
                Create Income Source
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateIncomes;
