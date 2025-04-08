'use client';

import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import * as DrawerPrimitive from '@/components/ui/drawer';

import useDebounce from '@/shared/hooks/useDebounce';

const SearchDrawer = ({ open, setOpen }) => {
    return (
        <DrawerPrimitive.Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerPrimitive.DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerPrimitive.DrawerHeader>
                        <DrawerPrimitive.DrawerTitle>Move Goal</DrawerPrimitive.DrawerTitle>
                        <DrawerPrimitive.DrawerDescription>
                            Set your daily activity goal.
                        </DrawerPrimitive.DrawerDescription>
                    </DrawerPrimitive.DrawerHeader>
                    <div className="p-4 pb-0"></div>
                    <DrawerPrimitive.DrawerFooter>
                        <DrawerPrimitive.DrawerClose asChild>
                            <button variant="outline">Cancel</button>
                        </DrawerPrimitive.DrawerClose>
                    </DrawerPrimitive.DrawerFooter>
                </div>
            </DrawerPrimitive.DrawerContent>
        </DrawerPrimitive.Drawer>
    );
};

const SearchForm = ({ input, setInput }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="hidden lg:flex flex-1" onSubmit={handleSubmit}>
            <label className="bg-accent min-h-12 flex-1 items-center rounded-full border pl-4 text-sm flex">
                <input
                    type="text"
                    className="h-full focus-within:outline-0 focus:border-none flex-1"
                    autoCorrect="false"
                    autoComplete="false"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" className="h-full">
                    <span className="flex gap-1 px-2 items-center">
                        <IoSearch size={22} />
                        Search
                    </span>
                </Button>
            </label>
        </form>
    );
};
export const SearchProcesses = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const debouncedInput = useDebounce(input, 300);

    useEffect(() => {
        if (debouncedInput) {
            console.log(debouncedInput);
        }
    }, [debouncedInput]);
    return (
        <>
            <button onClick={() => setOpen(true)} className="block cursor-pointer lg:hidden">
                <IoSearch />
            </button>
            <SearchForm {...{ input, setInput }} />
            <SearchDrawer {...{ open, setOpen }} />
        </>
    );
};
